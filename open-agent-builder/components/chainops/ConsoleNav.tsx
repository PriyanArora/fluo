import Link from "next/link";

type ConsoleNavProps = {
  orgId: string;
  active?: "workspace" | "trace" | "ledger";
  action?: React.ReactNode;
};

const links: { key: "workspace" | "trace" | "ledger"; label: string; href: (orgId: string) => string }[] = [
  { key: "workspace", label: "Workspace", href: (orgId) => `/orgs/${orgId}` },
  { key: "trace", label: "Part Trace", href: () => "/trace" },
  { key: "ledger", label: "Audit Ledger", href: () => "/ledger" },
];

export default function ConsoleNav({ orgId, active, action }: ConsoleNavProps) {
  return (
    <nav className="fluo-console-nav">
      <div className="fluo-console-nav-left">
        <Link className="fluo-console-wordmark fluo-headline" href="/">
          fluo
        </Link>
        <span className="fluo-console-divider" />
        <div className="fluo-console-links fluo-mono">
          {links.map((link) => (
            <Link
              className={[
                "fluo-console-link",
                active === link.key ? "fluo-console-link-active" : "",
              ].join(" ")}
              href={link.href(orgId)}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="fluo-console-nav-right">{action}</div>
    </nav>
  );
}
