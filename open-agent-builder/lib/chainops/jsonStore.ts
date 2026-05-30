import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

const dataDirectory = path.join(process.cwd(), "data");

export type Organization = {
  id: string;
  name: string;
  type: "defence_base";
  country: string;
};

export type ChainOpsDocument = {
  id: string;
  organizationId: string;
  title: string;
  createdBy: string;
  workflowId: string;
};

export type Project = {
  id: string;
  organizationId: string;
  name: string;
  status: "active" | "blocked" | "review_required";
  workflowId: string;
};

export type Vendor = {
  id: string;
  name: string;
  riskStatus: "clear" | "flagged";
  riskReason: string | null;
  controlledGoodsStatus: "unknown" | "registered";
  countryExposure: string[];
};

export type Relationship = {
  entityId: string;
  entityType: "vendor";
  projectId: string;
  relationship: "candidate_vendor" | "existing_vendor" | "past_vendor";
};

export type WorkflowNodeDefinition = {
  id: string;
  type:
    | "projectStart"
    | "vendor"
    | "partOrigin"
    | "humanReview"
    | "ledgerLog"
    | "approval"
    | "blocked";
  label: string;
  position: { x: number; y: number };
  status: string;
  countryExposure?: string[];
};

export type WorkflowEdgeDefinition = {
  id: string;
  source: string;
  target: string;
  label: string;
};

export type WorkflowDefinition = {
  id: string;
  documentId: string;
  projectId: string;
  nodes: WorkflowNodeDefinition[];
  edges: WorkflowEdgeDefinition[];
};

export type LedgerEvent = {
  eventId: number;
  projectId: string;
  entityId: string;
  eventType:
    | "VENDOR_DROPPED_ON_WORKFLOW"
    | "VENDOR_FLAG_DETECTED"
    | "PROJECT_BLOCKED"
    | "RELATED_PROJECT_ALERTED"
    | "HUMAN_REVIEW_REQUIRED";
  payloadHash: string;
  actor: string;
  timestamp: string;
  transactionHash: string;
  payload: Record<string, unknown>;
};

export type ProvenanceEntry = {
  stage: string;
  label: string;
  detail: string;
  location: string;
  actor: string;
  timestamp: string;
  transactionHash: string;
};

export type Part = {
  id: string;
  name: string;
  partNumber: string;
  category: string;
  projectId: string;
  vendorId: string;
  originCountry: string;
  componentOrigins: string[];
  controlledGoodsStatus: string;
  batch: string;
  status: "cleared" | "in_review" | "blocked";
  summary: string;
  provenance: ProvenanceEntry[];
};

async function readJsonFile<T>(fileName: string): Promise<T> {
  const filePath = path.join(dataDirectory, fileName);
  const file = await fs.readFile(filePath, "utf8");
  return JSON.parse(file) as T;
}

async function writeJsonFile<T>(fileName: string, data: T): Promise<void> {
  const filePath = path.join(dataDirectory, fileName);
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export function getDataFilePath(fileName: string) {
  return path.join(dataDirectory, fileName);
}

export function getOrganizations() {
  return readJsonFile<Organization[]>("organizations.json");
}

export function getDocuments() {
  return readJsonFile<ChainOpsDocument[]>("documents.json");
}

export function getProjects() {
  return readJsonFile<Project[]>("projects.json");
}

export function getVendors() {
  return readJsonFile<Vendor[]>("vendors.json");
}

export function getParts() {
  return readJsonFile<Part[]>("parts.json");
}

export function writeVendors(vendors: Vendor[]) {
  return writeJsonFile("vendors.json", vendors);
}

export function getRelationships() {
  return readJsonFile<Relationship[]>("relationships.json");
}

export function getWorkflows() {
  return readJsonFile<WorkflowDefinition[]>("workflows.json");
}

export function getLedgerEvents() {
  return readJsonFile<LedgerEvent[]>("ledger-events-cache.json");
}

export function writeLedgerEvents(events: LedgerEvent[]) {
  return writeJsonFile("ledger-events-cache.json", events);
}

export async function getChainOpsData() {
  const [
    organizations,
    documents,
    projects,
    vendors,
    relationships,
    workflows,
    ledgerEvents,
  ] = await Promise.all([
    getOrganizations(),
    getDocuments(),
    getProjects(),
    getVendors(),
    getRelationships(),
    getWorkflows(),
    getLedgerEvents(),
  ]);

  return {
    organizations,
    documents,
    projects,
    vendors,
    relationships,
    workflows,
    ledgerEvents,
  };
}
