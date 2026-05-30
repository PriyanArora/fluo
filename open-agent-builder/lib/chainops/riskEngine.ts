import "server-only";

import {
  getProjects,
  getRelationships,
  getVendors,
  type Project,
  type Vendor,
} from "@/lib/chainops/jsonStore";

export type VendorDropAllowed = {
  status: "allowed";
  vendor: Vendor;
  affectedProjects: [];
};

export type VendorDropBlocked = {
  status: "blocked";
  reason: string;
  vendor?: Vendor;
  affectedProjects: Project[];
};

export type VendorDropResult = VendorDropAllowed | VendorDropBlocked;

export async function evaluateVendorDrop(
  vendorId: string,
  projectId: string,
): Promise<VendorDropResult> {
  const [vendors, relationships, projects] = await Promise.all([
    getVendors(),
    getRelationships(),
    getProjects(),
  ]);

  const vendor = vendors.find((candidate) => candidate.id === vendorId);

  if (!vendor) {
    return {
      status: "blocked",
      reason: "Vendor not found",
      affectedProjects: [],
    };
  }

  if (vendor.riskStatus === "flagged") {
    const relatedProjectIds = relationships
      .filter((relationship) => relationship.entityId === vendorId)
      .map((relationship) => relationship.projectId);

    const affectedProjects = projects.filter((project) =>
      relatedProjectIds.includes(project.id),
    );

    return {
      status: "blocked",
      reason:
        vendor.riskReason ??
        "Matched by mock Canadian vetting update. Human review required before authorization.",
      vendor,
      affectedProjects,
    };
  }

  return {
    status: "allowed",
    vendor,
    affectedProjects: [],
  };
}
