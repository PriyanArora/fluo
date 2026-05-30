import { NextResponse } from "next/server";

import { getVendors, writeVendors } from "@/lib/chainops/jsonStore";

type VendorRiskRequest = {
  vendorId?: string;
  riskStatus?: "clear" | "flagged";
};

const mockRiskReason =
  "Matched by mock Canadian vetting update. Human review required before authorization.";

export async function POST(request: Request) {
  const body = (await request.json()) as VendorRiskRequest;

  if (!body.vendorId || !body.riskStatus) {
    return NextResponse.json(
      { error: "vendorId and riskStatus are required" },
      { status: 400 },
    );
  }

  const vendorId = body.vendorId;
  const riskStatus = body.riskStatus;
  const vendors = await getVendors();
  const vendor = vendors.find((candidate) => candidate.id === vendorId);

  if (!vendor) {
    return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
  }

  const nextVendors = vendors.map((candidate) =>
    candidate.id === vendorId
      ? {
          ...candidate,
          riskStatus,
          riskReason: riskStatus === "flagged" ? mockRiskReason : null,
        }
      : candidate,
  );

  await writeVendors(nextVendors);

  return NextResponse.json({
    vendor: nextVendors.find((candidate) => candidate.id === vendorId),
  });
}
