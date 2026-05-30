import { NextResponse } from "next/server";

import { appendLedgerEvents, type LedgerEventInput } from "@/lib/blockchain/ledger";
import { evaluateVendorDrop } from "@/lib/chainops/riskEngine";

type VendorDropRequest = {
  vendorId?: string;
  projectId?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as VendorDropRequest;

  if (!body.vendorId || !body.projectId) {
    return NextResponse.json(
      { error: "vendorId and projectId are required" },
      { status: 400 },
    );
  }

  const vendorId = body.vendorId;
  const projectId = body.projectId;
  const result = await evaluateVendorDrop(vendorId, projectId);
  const basePayload = {
    vendorId,
    projectId,
    decision: result.status,
  };

  let ledgerInputs: LedgerEventInput[];

  if (result.status === "allowed") {
    ledgerInputs = [
      {
        projectId,
        entityId: vendorId,
        eventType: "VENDOR_DROPPED_ON_WORKFLOW",
        payload: {
          ...basePayload,
          reason: "Vendor risk status is clear in local vetting registry.",
        },
      },
    ];
  } else {
    const relatedProjectInputs = result.affectedProjects
      .filter((project) => project.id !== body.projectId)
      .map<LedgerEventInput>((project) => ({
        projectId: project.id,
        entityId: vendorId,
        eventType: "RELATED_PROJECT_ALERTED",
        payload: {
          ...basePayload,
          relatedProjectId: project.id,
          relatedProjectName: project.name,
          requiredAction: "Human review required",
        },
      }));

    ledgerInputs = [
      {
        projectId,
        entityId: vendorId,
        eventType: "VENDOR_FLAG_DETECTED",
        payload: {
          ...basePayload,
          reason: result.reason,
        },
      },
      {
        projectId,
        entityId: vendorId,
        eventType: "PROJECT_BLOCKED",
        payload: {
          ...basePayload,
          blockedProjectId: projectId,
          reason: result.reason,
        },
      },
      ...relatedProjectInputs,
      {
        projectId,
        entityId: vendorId,
        eventType: "HUMAN_REVIEW_REQUIRED",
        payload: {
          ...basePayload,
          reviewQueue: "Canadian vetting process",
          reason: result.reason,
        },
      },
    ];
  }

  const ledgerEvents = await appendLedgerEvents(ledgerInputs);

  return NextResponse.json({
    result,
    ledgerEvents,
  });
}
