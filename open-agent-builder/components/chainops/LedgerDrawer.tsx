"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Ban,
  Bell,
  Blocks,
  Check,
  Copy,
  PackageSearch,
  ShieldQuestion,
} from "lucide-react";

import type { LedgerEvent } from "@/lib/chainops/jsonStore";

type EventMeta = {
  title: string;
  description: string;
  icon: typeof AlertTriangle;
  tone: "danger" | "warning" | "info";
};

const EVENT_META: Record<string, EventMeta> = {
  VENDOR_DROPPED_ON_WORKFLOW: {
    title: "Vendor added to workflow",
    description: "A contractor was dropped onto a procurement workflow.",
    icon: PackageSearch,
    tone: "info",
  },
  VENDOR_FLAG_DETECTED: {
    title: "Vendor flag detected",
    description: "Vetting registry flagged this contractor as a risk.",
    icon: AlertTriangle,
    tone: "danger",
  },
  PROJECT_BLOCKED: {
    title: "Project blocked",
    description: "This project's approval path was stopped for review.",
    icon: Ban,
    tone: "danger",
  },
  RELATED_PROJECT_ALERTED: {
    title: "Related project alerted",
    description: "Another project using this contractor was flagged for review.",
    icon: Bell,
    tone: "warning",
  },
  HUMAN_REVIEW_REQUIRED: {
    title: "Human review required",
    description: "Sent to a security officer for an authorized decision.",
    icon: ShieldQuestion,
    tone: "warning",
  },
};

const DEFAULT_META: EventMeta = {
  title: "Audit event",
  description: "An event was written to the audit ledger.",
  icon: Blocks,
  tone: "info",
};

type LedgerDrawerProps = {
  events: LedgerEvent[];
  variant?: "drawer" | "page";
  nameMap?: Record<string, string>;
};

function shortHash(value: string): string {
  if (!value || value.length < 14) return value;
  return `${value.slice(0, 8)}…${value.slice(-6)}`;
}

export default function LedgerDrawer({
  events,
  variant = "drawer",
  nameMap = {},
}: LedgerDrawerProps) {
  const [copied, setCopied] = useState<number | null>(null);
  const visibleEvents = [...events].sort((a, b) => b.eventId - a.eventId);
  const label = (id: string) => nameMap[id] ?? id;

  const copyHash = async (event: LedgerEvent) => {
    try {
      await navigator.clipboard.writeText(event.transactionHash);
      setCopied(event.eventId);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className={variant === "drawer" ? "fluo-ledger fluo-ledger-drawer" : "fluo-ledger"}>
      <div className="fluo-ledger-head">
        <div className="flex items-center gap-10">
          <span className="fluo-ledger-head-icon">
            <Blocks className="h-16 w-16" />
          </span>
          <div>
            <h2 className="fluo-headline text-[16px] font-bold leading-18">
              Blockchain Audit Log
            </h2>
            <p className="text-[11px] text-[var(--fluo-muted)]">
              Tamper-evident record · newest first
            </p>
          </div>
        </div>
        <span className="fluo-ledger-count fluo-mono">{events.length} events</span>
      </div>

      {visibleEvents.length ? (
        <div className="fluo-ledger-list">
          {visibleEvents.map((event) => {
            const meta = EVENT_META[event.eventType] ?? DEFAULT_META;
            const Icon = meta.icon;

            return (
              <article className="fluo-ledger-item" data-tone={meta.tone} key={event.eventId}>
                <span className="fluo-ledger-item-icon" data-tone={meta.tone}>
                  <Icon className="h-16 w-16" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-8">
                    <span className="text-[14px] font-semibold text-[var(--fluo-text)]">
                      {meta.title}
                    </span>
                    <span className="fluo-mono fluo-ledger-tag" data-tone={meta.tone}>
                      {event.eventType}
                    </span>
                  </div>
                  <p className="mt-3 text-[12px] leading-17 text-[var(--fluo-muted)]">
                    {meta.description}
                  </p>

                  <div className="fluo-ledger-meta fluo-mono">
                    <span>
                      <span className="fluo-ledger-meta-key">Project</span>
                      {label(event.projectId)}
                    </span>
                    <span>
                      <span className="fluo-ledger-meta-key">Entity</span>
                      {label(event.entityId)}
                    </span>
                    <span>
                      <span className="fluo-ledger-meta-key">When</span>
                      {new Date(event.timestamp).toLocaleString()}
                    </span>
                  </div>

                  <button
                    className="fluo-ledger-hash fluo-mono"
                    onClick={() => copyHash(event)}
                    title="Copy transaction hash"
                  >
                    {copied === event.eventId ? (
                      <Check className="h-12 w-12" />
                    ) : (
                      <Copy className="h-12 w-12" />
                    )}
                    tx {shortHash(event.transactionHash)}
                  </button>
                </div>

                <span className="fluo-ledger-id fluo-mono">#{event.eventId}</span>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="fluo-ledger-empty">
          <Blocks className="h-22 w-22 text-[var(--fluo-border-strong)]" />
          <p className="mt-10 text-[14px] font-semibold text-[var(--fluo-text)]">
            No audit events yet
          </p>
          <p className="mt-4 text-[12px] text-[var(--fluo-muted)]">
            Drop a flagged contractor into a workflow to write the first event.
          </p>
        </div>
      )}
    </section>
  );
}
