"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Building2,
  Check,
  Loader2,
  Search,
  ShieldCheck,
} from "lucide-react";

import type { Vendor } from "@/lib/chainops/jsonStore";

type VettingRegistryProps = {
  vendors: Vendor[];
};

export default function VettingRegistry({ vendors }: VettingRegistryProps) {
  const [vendorList, setVendorList] = useState(vendors);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return vendorList;
    return vendorList.filter(
      (vendor) =>
        vendor.name.toLowerCase().includes(term) ||
        vendor.id.toLowerCase().includes(term),
    );
  }, [query, vendorList]);

  const flaggedCount = vendorList.filter((v) => v.riskStatus === "flagged").length;

  const setRisk = async (vendorId: string, riskStatus: "clear" | "flagged") => {
    setPendingId(vendorId);
    setError(null);
    try {
      const response = await fetch("/api/chainops/vendor-risk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vendorId, riskStatus }),
      });
      if (!response.ok) throw new Error("Could not update vetting status.");
      const payload = (await response.json()) as { vendor: Vendor };
      setVendorList((current) =>
        current.map((vendor) =>
          vendor.id === payload.vendor.id ? payload.vendor : vendor,
        ),
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setPendingId(null);
    }
  };

  return (
    <section className="fluo-panel-block">
      <div className="fluo-panel-block-head">
        <div>
          <span className="fluo-label">Vetting Control</span>
          <h2 className="fluo-headline mt-10 text-[24px] font-bold">
            Contractor &amp; Vendor Registry
          </h2>
          <p className="mt-6 max-w-[560px] text-[14px] leading-21 text-[var(--fluo-muted)]">
            Manually mark a contractor as flagged when a vetting authority raises a
            concern. Flagging here blocks the contractor in every connected workflow
            and writes audit events when dropped.
          </p>
        </div>
        <div className="fluo-registry-counter">
          <span className="fluo-registry-counter-value">{flaggedCount}</span>
          <span className="fluo-registry-counter-label fluo-mono">Flagged</span>
        </div>
      </div>

      <div className="fluo-registry-search">
        <Search className="h-16 w-16 text-[var(--fluo-muted)]" />
        <input
          className="fluo-registry-input"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search contractors and vendors..."
          value={query}
        />
      </div>

      {error ? <p className="mt-12 text-[13px] text-[var(--fluo-error)]">{error}</p> : null}

      <div className="mt-16 space-y-12">
        {filtered.map((vendor) => {
          const isFlagged = vendor.riskStatus === "flagged";
          const isPending = pendingId === vendor.id;

          return (
            <div
              className={[
                "fluo-registry-row",
                isFlagged ? "fluo-registry-row-flagged" : "",
              ].join(" ")}
              key={vendor.id}
            >
              <div className="flex min-w-0 items-start gap-12">
                <span
                  className={[
                    "fluo-registry-icon",
                    isFlagged ? "fluo-registry-icon-flagged" : "",
                  ].join(" ")}
                >
                  {isFlagged ? (
                    <AlertTriangle className="h-18 w-18" />
                  ) : (
                    <Building2 className="h-18 w-18" />
                  )}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-8">
                    <span className="text-[15px] font-semibold text-[var(--fluo-text)]">
                      {vendor.name}
                    </span>
                    <span
                      className={[
                        "fluo-mono px-7 py-3 text-[10px] uppercase",
                        isFlagged ? "fluo-status-error" : "fluo-status-clear",
                      ].join(" ")}
                    >
                      {vendor.riskStatus}
                    </span>
                  </div>
                  <div className="mt-4 text-[12px] text-[var(--fluo-muted)]">
                    Controlled goods: {vendor.controlledGoodsStatus} · Exposure:{" "}
                    {vendor.countryExposure.join(", ")}
                  </div>
                  {isFlagged && vendor.riskReason ? (
                    <p className="mt-6 text-[12px] leading-17 text-[var(--fluo-error)]">
                      {vendor.riskReason}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="fluo-registry-actions">
                {isFlagged ? (
                  <button
                    className="fluo-mini-button"
                    disabled={isPending}
                    onClick={() => setRisk(vendor.id, "clear")}
                  >
                    {isPending ? (
                      <Loader2 className="h-14 w-14 animate-spin" />
                    ) : (
                      <ShieldCheck className="h-14 w-14" />
                    )}
                    Clear
                  </button>
                ) : (
                  <button
                    className="fluo-mini-button fluo-mini-button-danger"
                    disabled={isPending}
                    onClick={() => setRisk(vendor.id, "flagged")}
                  >
                    {isPending ? (
                      <Loader2 className="h-14 w-14 animate-spin" />
                    ) : (
                      <AlertTriangle className="h-14 w-14" />
                    )}
                    Flag
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-[13px] text-[var(--fluo-muted)]">
            No contractors match “{query}”.
          </p>
        ) : null}
      </div>

      <p className="mt-14 flex items-center gap-6 text-[12px] text-[var(--fluo-muted)]">
        <Check className="h-13 w-13" />
        Flag = block workflow connection and require human review. Permanent
        blacklisting requires an authorized human decision.
      </p>
    </section>
  );
}
