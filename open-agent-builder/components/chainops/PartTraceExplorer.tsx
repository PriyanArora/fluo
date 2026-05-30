"use client";

import { useMemo, useState } from "react";
import {
  Boxes,
  Check,
  Copy,
  Factory,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import type { Part } from "@/lib/chainops/jsonStore";

type PartTraceExplorerProps = {
  parts: Part[];
  nameMap: Record<string, string>;
};

const STATUS_LABEL: Record<Part["status"], string> = {
  cleared: "Cleared",
  in_review: "In Review",
  blocked: "Blocked",
};

function shortHash(value: string): string {
  if (!value || value.length < 14) return value;
  return `${value.slice(0, 10)}…${value.slice(-8)}`;
}

export default function PartTraceExplorer({ parts, nameMap }: PartTraceExplorerProps) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(parts[0]?.id ?? "");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return parts;
    return parts.filter((part) =>
      [
        part.name,
        part.partNumber,
        part.batch,
        part.category,
        nameMap[part.vendorId] ?? part.vendorId,
        nameMap[part.projectId] ?? part.projectId,
        ...part.componentOrigins,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term),
    );
  }, [query, parts, nameMap]);

  const selected =
    filtered.find((part) => part.id === selectedId) ?? filtered[0] ?? null;

  const copyHash = async (hash: string) => {
    try {
      await navigator.clipboard.writeText(hash);
      setCopied(hash);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="fluo-trace-grid">
      <div className="fluo-trace-list-col">
        <div className="fluo-registry-search">
          <Search className="h-16 w-16 text-[var(--fluo-muted)]" />
          <input
            autoFocus
            className="fluo-registry-input"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search part, batch, supplier, origin..."
            value={query}
          />
        </div>
        <div className="mt-8 text-[11px] uppercase tracking-wide text-[var(--fluo-muted)] fluo-mono">
          {filtered.length} part{filtered.length === 1 ? "" : "s"} on ledger
        </div>

        <div className="mt-12 space-y-10">
          {filtered.map((part) => (
            <button
              className={[
                "fluo-trace-card",
                selected?.id === part.id ? "fluo-trace-card-active" : "",
              ].join(" ")}
              key={part.id}
              onClick={() => setSelectedId(part.id)}
            >
              <div className="flex items-center justify-between gap-8">
                <span className="text-[14px] font-semibold">{part.name}</span>
                <span
                  className={[
                    "fluo-mono px-7 py-3 text-[10px] uppercase",
                    part.status === "cleared"
                      ? "fluo-status-clear"
                      : "fluo-status-warn",
                  ].join(" ")}
                >
                  {STATUS_LABEL[part.status]}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-8 text-[11px] text-[var(--fluo-muted)] fluo-mono">
                <span>{part.partNumber}</span>
                <span>·</span>
                <span>{part.category}</span>
              </div>
            </button>
          ))}

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-[13px] text-[var(--fluo-muted)]">
              No part matches “{query}”.
            </p>
          ) : null}
        </div>
      </div>

      <div className="fluo-trace-detail-col">
        {selected ? (
          <>
            <div className="fluo-trace-detail-head">
              <div>
                <span className="fluo-label">{selected.partNumber}</span>
                <h2 className="fluo-headline mt-10 text-[26px] font-bold leading-30">
                  {selected.name}
                </h2>
                <p className="mt-8 max-w-[640px] text-[14px] leading-21 text-[var(--fluo-muted)]">
                  {selected.summary}
                </p>
              </div>
              <span
                className={[
                  "fluo-mono shrink-0 px-9 py-5 text-[11px] uppercase",
                  selected.status === "cleared"
                    ? "fluo-status-clear"
                    : "fluo-status-warn",
                ].join(" ")}
              >
                {STATUS_LABEL[selected.status]}
              </span>
            </div>

            <div className="fluo-trace-facts">
              <div className="fluo-trace-fact">
                <span className="fluo-trace-fact-icon"><MapPin className="h-15 w-15" /></span>
                <div>
                  <div className="fluo-trace-fact-label fluo-mono">Declared Origin</div>
                  <div className="fluo-trace-fact-value">{selected.originCountry}</div>
                </div>
              </div>
              <div className="fluo-trace-fact">
                <span className="fluo-trace-fact-icon"><Factory className="h-15 w-15" /></span>
                <div>
                  <div className="fluo-trace-fact-label fluo-mono">Supplier</div>
                  <div className="fluo-trace-fact-value">
                    {nameMap[selected.vendorId] ?? selected.vendorId}
                  </div>
                </div>
              </div>
              <div className="fluo-trace-fact">
                <span className="fluo-trace-fact-icon"><Workflow className="h-15 w-15" /></span>
                <div>
                  <div className="fluo-trace-fact-label fluo-mono">Project</div>
                  <div className="fluo-trace-fact-value">
                    {nameMap[selected.projectId] ?? selected.projectId}
                  </div>
                </div>
              </div>
              <div className="fluo-trace-fact">
                <span className="fluo-trace-fact-icon"><ShieldCheck className="h-15 w-15" /></span>
                <div>
                  <div className="fluo-trace-fact-label fluo-mono">Controlled Goods</div>
                  <div className="fluo-trace-fact-value">
                    {selected.controlledGoodsStatus}
                  </div>
                </div>
              </div>
              <div className="fluo-trace-fact">
                <span className="fluo-trace-fact-icon"><Boxes className="h-15 w-15" /></span>
                <div>
                  <div className="fluo-trace-fact-label fluo-mono">Batch</div>
                  <div className="fluo-trace-fact-value">{selected.batch}</div>
                </div>
              </div>
            </div>

            <div className="fluo-trace-origins">
              <div className="mb-8 flex items-center gap-8 text-[12px] uppercase text-[var(--fluo-muted)] fluo-mono">
                <Globe2 className="h-14 w-14" />
                Component country exposure
              </div>
              <div className="flex flex-wrap gap-7">
                {selected.componentOrigins.map((country) => (
                  <span
                    className={[
                      "fluo-origin-chip",
                      country === "China" ? "fluo-origin-chip-risk" : "",
                    ].join(" ")}
                    key={country}
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="fluo-trace-timeline-head">
              <h3 className="fluo-headline text-[16px] font-bold">
                Provenance on the blockchain
              </h3>
              <span className="fluo-mono text-[11px] text-[var(--fluo-muted)]">
                {selected.provenance.length} signed records
              </span>
            </div>

            <ol className="fluo-timeline">
              {selected.provenance.map((entry) => (
                <li className="fluo-timeline-item" key={entry.transactionHash}>
                  <span className="fluo-timeline-dot" data-stage={entry.stage} />
                  <div className="fluo-timeline-body">
                    <div className="flex flex-wrap items-center gap-8">
                      <span className="text-[14px] font-semibold text-[var(--fluo-text)]">
                        {entry.label}
                      </span>
                      <span className="fluo-mono fluo-timeline-stage">{entry.stage}</span>
                    </div>
                    <p className="mt-3 text-[12px] leading-17 text-[var(--fluo-muted)]">
                      {entry.detail}
                    </p>
                    <div className="fluo-timeline-meta fluo-mono">
                      <span><MapPin className="h-11 w-11" />{entry.location}</span>
                      <span>{new Date(entry.timestamp).toLocaleString()}</span>
                      <span>by {entry.actor}</span>
                    </div>
                    <button
                      className="fluo-ledger-hash fluo-mono"
                      onClick={() => copyHash(entry.transactionHash)}
                      title="Copy transaction hash"
                    >
                      {copied === entry.transactionHash ? (
                        <Check className="h-12 w-12" />
                      ) : (
                        <Copy className="h-12 w-12" />
                      )}
                      tx {shortHash(entry.transactionHash)}
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <p className="py-24 text-center text-[14px] text-[var(--fluo-muted)]">
            Select a part to view its provenance.
          </p>
        )}
      </div>
    </div>
  );
}
