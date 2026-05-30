import Link from "next/link";
import { ArrowRight, ScrollText } from "lucide-react";

import { getChainOpsData } from "@/lib/chainops/jsonStore";

export default async function HomePage() {
  const { organizations, projects, ledgerEvents } = await getChainOpsData();
  const organization = organizations[0];

  return (
    <div className="fluo-page fluo-home-page">
      <nav className="fluo-home-nav">
        <Link className="fluo-home-wordmark fluo-headline" href="/">
          fluo
        </Link>
        <div className="fluo-home-nav-links fluo-mono">
          <Link className="fluo-home-nav-link" href={`/orgs/${organization.id}`}>
            Workspace
          </Link>
          <Link className="fluo-home-nav-link" href="/ledger">
            Ledger
          </Link>
        </div>
        <Link
          className="fluo-home-nav-cta fluo-mono"
          href={`/orgs/${organization.id}`}
        >
          Enter Console
          <ArrowRight size={15} />
        </Link>
      </nav>

      <section className="fluo-home-hero">
        <img
          alt="Canadian Armed Forces vehicle maintenance at CFB Gagetown"
          src="/images/fluo-gagetown-leopard-preview.jpg"
        />
        <div className="fluo-home-hero-overlay" />

        <div className="fluo-home-hero-inner">
          <span className="fluo-home-eyebrow fluo-mono">
            Defence Procurement Assurance
          </span>
          <h1 className="fluo-headline">
            A blockchain ledger for
            <br />
            every procurement decision.
          </h1>
          <p className="fluo-home-sub">
            fluo is a secure visual workflow layer for defence procurement. Build
            approval flows, detect flagged vendors, and preserve every event in a
            tamper-evident audit ledger.
          </p>
          <div className="fluo-home-actions">
            <Link className="fluo-home-primary fluo-mono" href={`/orgs/${organization.id}`}>
              Open CFB Gagetown Workspace
              <ArrowRight size={16} />
            </Link>
            <Link className="fluo-home-secondary fluo-mono" href="/ledger">
              <ScrollText size={16} />
              View Audit Ledger
            </Link>
          </div>
        </div>

        <div className="fluo-home-meta fluo-mono">
          <div className="fluo-home-meta-item">
            <span className="fluo-home-meta-value">{organization.name}</span>
            <span className="fluo-home-meta-label">Organization</span>
          </div>
          <div className="fluo-home-meta-item">
            <span className="fluo-home-meta-value">{projects.length} Projects</span>
            <span className="fluo-home-meta-label">Linked Workflows</span>
          </div>
          <div className="fluo-home-meta-item">
            <span className="fluo-home-meta-value">{ledgerEvents.length} Events</span>
            <span className="fluo-home-meta-label">On Audit Ledger</span>
          </div>
        </div>
      </section>
    </div>
  );
}
