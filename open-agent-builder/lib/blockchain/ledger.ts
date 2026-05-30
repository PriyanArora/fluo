import "server-only";

import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { ethers } from "ethers";

import {
  getLedgerEvents,
  writeLedgerEvents,
  type LedgerEvent,
} from "@/lib/chainops/jsonStore";

export type ChainOpsLedgerEventType = LedgerEvent["eventType"];

export type LedgerEventInput = {
  projectId: string;
  entityId: string;
  eventType: ChainOpsLedgerEventType;
  actor?: string;
  payload: Record<string, unknown>;
};

const localActorAddress = "0x0000000000000000000000000000000000000000";
const contractAddressPath = path.join(process.cwd(), "data", "contract-address.json");
const ledgerAbi = [
  "function logEvent(string projectId,string entityId,string eventType,string payloadHash) public",
];

let ledgerWriteQueue: Promise<unknown> = Promise.resolve();

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    return `{${Object.keys(record)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

export function createPayloadHash(payload: Record<string, unknown>) {
  return `sha256:${crypto
    .createHash("sha256")
    .update(stableStringify(payload))
    .digest("hex")}`;
}

async function getLocalContractAddress() {
  try {
    const file = await fs.readFile(contractAddressPath, "utf8");
    const deployment = JSON.parse(file) as { address?: string | null };
    return deployment.address ?? null;
  } catch {
    return null;
  }
}

async function writeOnLocalChain(event: Omit<LedgerEvent, "transactionHash">) {
  const address = await getLocalContractAddress();

  if (!address) {
    return null;
  }

  try {
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer = await provider.getSigner(0);
    const contract = new ethers.Contract(address, ledgerAbi, signer);
    const tx = await contract.logEvent(
      event.projectId,
      event.entityId,
      event.eventType,
      event.payloadHash,
    );
    const receipt = await tx.wait();
    return receipt?.hash ?? tx.hash;
  } catch {
    return null;
  }
}

async function appendLedgerEventsUnsafe(
  inputs: LedgerEventInput[],
): Promise<LedgerEvent[]> {
  const existingEvents = await getLedgerEvents();
  const timestamp = new Date().toISOString();
  const newEvents: LedgerEvent[] = [];

  for (let index = 0; index < inputs.length; index += 1) {
    const input = inputs[index];
    const eventId = existingEvents.length + index + 1;
    const eventWithoutTransactionHash = {
      eventId,
      projectId: input.projectId,
      entityId: input.entityId,
      eventType: input.eventType,
      payloadHash: createPayloadHash(input.payload),
      actor: input.actor ?? localActorAddress,
      timestamp,
      payload: input.payload,
    };
    const transactionHash = await writeOnLocalChain(eventWithoutTransactionHash);

    newEvents.push({
      ...eventWithoutTransactionHash,
      transactionHash:
        transactionHash ?? `local-chain-event-${String(eventId).padStart(4, "0")}`,
    });
  }

  await writeLedgerEvents([...existingEvents, ...newEvents]);

  return newEvents;
}

export async function appendLedgerEvents(
  inputs: LedgerEventInput[],
): Promise<LedgerEvent[]> {
  const operation = ledgerWriteQueue.then(() => appendLedgerEventsUnsafe(inputs));
  ledgerWriteQueue = operation.catch(() => undefined);
  return operation;
}
