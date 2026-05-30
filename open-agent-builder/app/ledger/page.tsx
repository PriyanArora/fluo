import { AlertTriangle, Ban, Bell, ShieldQuestion } from "lucide-react";

import ConsoleNav from "@/components/chainops/ConsoleNav";
import LedgerDrawer from "@/components/chainops/LedgerDrawer";
import { getChainOpsData } from "@/lib/chainops/jsonStore";

const LEGEND = [
  { icon: AlertTriangle, label: "Vendor flag detected", tone: "danger" as const },
  { icon: Ban, label: "Project blocked", tone: "danger" as const },
  { icon: Bell, label: "Related project alerted", tone: "warning" as const },
  { icon: ShieldQuestion, label: "Human review required", tone: "warning" as const },
];

export default async function LedgerPage() {
  const { organizations, projects, vendors, ledgerEvents } = await getChainOpsData();
  const organization = organizations[0];

  const nameMap: Record<string, string> = {};
  for (const project of projects) nameMap[project.id] = project.name;
  for (const vendor of vendors) nameMap[vendor.id] = vendor.name;

  return (
    <div className="fluo-page">
      <ConsoleNav active="ledger" orgId={organization.id} />

      <section className="fluo-console-hero">
        <span className="fluo-label">Read-only ledger</span>
        <h1 className="fluo-headline mt-14 text-[40px] font-bold leading-44">
          Blockchain Audit Log
        </h1>
        <p className="mt-12 max-w-[680px] text-[15px] leading-23 text-[var(--fluo-muted)]">
          Every risk decision is written to a Solidity contract as event metadata and
          a payload hash. Readable details stay in local JSON — the chain only proves
          the history was not quietly rewritten.
        </p>

        <div className="fluo-ledger-legend">
          {LEGEND.map((item) => {
            const Icon = item.icon;
            return (
              <span className="fluo-ledger-legend-item" key={item.label}>
                <span className="fluo-ledger-item-icon" data-tone={item.tone}>
                  <Icon className="h-14 w-14" />
                </span>
                {item.label}
              </span>
            );
          })}
        </div>
      </section>

      <section className="fluo-console-body">
        <LedgerDrawer events={ledgerEvents} nameMap={nameMap} variant="page" />
      </section>
    </div>
  );
}
