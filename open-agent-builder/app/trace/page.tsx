import ConsoleNav from "@/components/chainops/ConsoleNav";
import PartTraceExplorer from "@/components/chainops/PartTraceExplorer";
import { getChainOpsData, getParts } from "@/lib/chainops/jsonStore";

export default async function TracePage() {
  const [{ organizations, projects, vendors }, parts] = await Promise.all([
    getChainOpsData(),
    getParts(),
  ]);
  const organization = organizations[0];

  const nameMap: Record<string, string> = {};
  for (const project of projects) nameMap[project.id] = project.name;
  for (const vendor of vendors) nameMap[vendor.id] = vendor.name;

  return (
    <div className="fluo-page">
      <ConsoleNav active="trace" orgId={organization.id} />

      <section className="fluo-console-hero">
        <span className="fluo-label">Part Provenance</span>
        <h1 className="fluo-headline mt-14 text-[40px] font-bold leading-44">
          Trace a part to its origin
        </h1>
        <p className="mt-12 max-w-[680px] text-[15px] leading-23 text-[var(--fluo-muted)]">
          Search any component used in a project. fluo shows where it came from, who
          supplied it, which project it belongs to, and the tamper-evident chain of
          custody recorded on the ledger.
        </p>
      </section>

      <section className="fluo-console-body">
        <PartTraceExplorer nameMap={nameMap} parts={parts} />
      </section>
    </div>
  );
}
