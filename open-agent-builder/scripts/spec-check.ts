import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const vendorsPath = path.join(root, "data", "vendors.json");
const relationshipsPath = path.join(root, "data", "relationships.json");
const projectsPath = path.join(root, "data", "projects.json");

function evaluateVendorDrop(vendorId: string) {
  const vendors = JSON.parse(fs.readFileSync(vendorsPath, "utf8"));
  const relationships = JSON.parse(fs.readFileSync(relationshipsPath, "utf8"));
  const projects = JSON.parse(fs.readFileSync(projectsPath, "utf8"));
  const vendor = vendors.find((candidate: any) => candidate.id === vendorId);

  if (!vendor) {
    return { status: "blocked", affectedProjects: [] };
  }

  if (vendor.riskStatus === "flagged") {
    const projectIds = relationships
      .filter((relationship: any) => relationship.entityId === vendorId)
      .map((relationship: any) => relationship.projectId);

    return {
      status: "blocked",
      affectedProjects: projects.filter((project: any) => projectIds.includes(project.id)),
    };
  }

  return { status: "allowed", affectedProjects: [] };
}

async function main() {
  const contract = fs.readFileSync(
    path.join(root, "contracts", "ChainOpsLedger.sol"),
    "utf8",
  );

  assert.match(contract, /contract ChainOpsLedger/);
  assert.match(contract, /event AuditLogged/);
  assert.match(contract, /function logEvent/);
  assert.match(contract, /function getEventCount/);

  const clearResult = evaluateVendorDrop("vendor-maple-secure");
  assert.equal(clearResult.status, "allowed");

  const originalVendors = fs.readFileSync(vendorsPath, "utf8");
  const vendors = JSON.parse(originalVendors);
  const flaggedVendors = vendors.map((vendor: any) =>
    vendor.id === "vendor-northline-systems"
      ? {
          ...vendor,
          riskStatus: "flagged",
          riskReason:
            "Matched by mock Canadian vetting update. Human review required before authorization.",
        }
      : vendor,
  );

  fs.writeFileSync(vendorsPath, `${JSON.stringify(flaggedVendors, null, 2)}\n`);
  const flaggedResult = evaluateVendorDrop("vendor-northline-systems");
  fs.writeFileSync(vendorsPath, originalVendors);

  assert.equal(flaggedResult.status, "blocked");
  assert.equal(flaggedResult.affectedProjects.length, 3);

  console.log("Spec check passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
