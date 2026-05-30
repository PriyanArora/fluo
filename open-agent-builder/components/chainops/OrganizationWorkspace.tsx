import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  FileText,
  PackageSearch,
  ShieldAlert,
  Workflow,
} from "lucide-react";

import ConsoleNav from "@/components/chainops/ConsoleNav";
import VettingRegistry from "@/components/chainops/VettingRegistry";
import type {
  ChainOpsDocument,
  LedgerEvent,
  Organization,
  Project,
  Vendor,
} from "@/lib/chainops/jsonStore";

type OrganizationWorkspaceProps = {
  organization: Organization;
  documents: ChainOpsDocument[];
  projects: Project[];
  vendors: Vendor[];
  ledgerEvents: LedgerEvent[];
};

export default function OrganizationWorkspace({
  organization,
  documents,
  projects,
  vendors,
  ledgerEvents,
}: OrganizationWorkspaceProps) {
  const flaggedVendors = vendors.filter((vendor) => vendor.riskStatus === "flagged");
  const primaryDocId = documents[0]?.id ?? "";

  const stats = [
    {
      icon: FileText,
      value: documents.length,
      label: "Documents",
      hint: "Procurement workflow documents",
    },
    {
      icon: ShieldAlert,
      value: flaggedVendors.length,
      label: "Flagged Vendors",
      hint: "Contractors marked in vetting",
    },
    {
      icon: Blocks,
      value: ledgerEvents.length,
      label: "Ledger Events",
      hint: "Cached audit records",
    },
  ];

  const quickLinks = [
    {
      icon: Workflow,
      title: "Open Procurement Workflow",
      body: "Build the visual approval path and drop a vendor to run vetting.",
      href: `/documents/${primaryDocId}`,
      cta: "Open document",
    },
    {
      icon: PackageSearch,
      title: "Trace a Part",
      body: "Search any component to see its origin and chain of custody.",
      href: "/trace",
      cta: "Open trace",
    },
    {
      icon: Blocks,
      title: "Audit Ledger",
      body: "Review the tamper-evident history of every risk decision.",
      href: "/ledger",
      cta: "Open ledger",
    },
  ];

  return (
    <div className="fluo-page">
      <ConsoleNav
        active="workspace"
        orgId={organization.id}
        action={
          <Link className="fluo-console-action" href={`/documents/${primaryDocId}`}>
            Open Workflow
          </Link>
        }
      />

      <section className="fluo-console-hero">
        <span className="fluo-label">Organization Workspace</span>
        <h1 className="fluo-headline mt-14 max-w-[860px] text-[44px] font-bold leading-48">
          {organization.name}
        </h1>
        <p className="mt-14 max-w-[680px] text-[15px] leading-23 text-[var(--fluo-muted)]">
          fluo keeps readable procurement data in local JSON and uses a local
          blockchain ledger only for tamper-evident audit events.
        </p>

        <div className="fluo-stat-row">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div className="fluo-stat-card" key={stat.label}>
                <div className="fluo-stat-card-top">
                  <Icon className="h-18 w-18" />
                  <span className="fluo-mono text-[10px] uppercase">{stat.label}</span>
                </div>
                <div className="fluo-headline mt-12 text-[40px] font-bold leading-44">
                  {stat.value}
                </div>
                <p className="mt-4 text-[12px] text-[var(--fluo-muted)]">{stat.hint}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="fluo-console-body">
        <div className="fluo-quicklink-grid">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link className="fluo-quicklink" href={link.href} key={link.title}>
                <span className="fluo-quicklink-icon">
                  <Icon className="h-18 w-18" />
                </span>
                <h3 className="fluo-headline mt-14 text-[17px] font-bold">
                  {link.title}
                </h3>
                <p className="mt-6 text-[13px] leading-19 text-[var(--fluo-muted)]">
                  {link.body}
                </p>
                <span className="fluo-quicklink-cta fluo-mono">
                  {link.cta}
                  <ArrowRight className="h-13 w-13" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="fluo-workspace-split">
          <div className="fluo-projects-block">
            <span className="fluo-label">Projects</span>
            <h2 className="fluo-headline mt-10 text-[24px] font-bold">
              Linked Procurement Projects
            </h2>
            <p className="mt-6 text-[13px] leading-19 text-[var(--fluo-muted)]">
              A flag on a shared contractor propagates across every project below.
            </p>
            <div className="mt-16 space-y-10">
              {projects.map((project, index) => (
                <div className="fluo-project-row" key={project.id}>
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold text-[var(--fluo-text)]">
                      {project.name}
                    </div>
                    <div className="mt-3 text-[11px] text-[var(--fluo-muted)] fluo-mono">
                      {project.id}
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <span className="fluo-mono fluo-status-clear px-8 py-4 text-[10px] uppercase">
                      {project.status}
                    </span>
                    <span className="fluo-mono text-[11px] text-[var(--fluo-muted)]">
                      /0.{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <VettingRegistry vendors={vendors} />
        </div>
      </section>
    </div>
  );
}
