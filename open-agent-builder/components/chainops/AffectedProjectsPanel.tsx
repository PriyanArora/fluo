"use client";

import { AlertTriangle, CircleCheck } from "lucide-react";

import type { Project } from "@/lib/chainops/jsonStore";

type AffectedProjectsPanelProps = {
  projects: Project[];
  currentProjectId: string;
  isBlocked: boolean;
};

export default function AffectedProjectsPanel({
  projects,
  currentProjectId,
  isBlocked,
}: AffectedProjectsPanelProps) {
  return (
    <section className="border border-neutral-200 bg-white p-16">
      <div className="flex items-center gap-8">
        {isBlocked ? (
          <AlertTriangle className="h-18 w-18 text-red-600" />
        ) : (
          <CircleCheck className="h-18 w-18 text-emerald-600" />
        )}
        <h2 className="text-[15px] font-semibold text-neutral-950">
          Affected Projects
        </h2>
      </div>

      {projects.length ? (
        <div className="mt-12 space-y-8">
          {projects.map((project) => {
            const status =
              project.id === currentProjectId ? "BLOCKED" : "REVIEW REQUIRED";

            return (
              <div
                className="flex items-start justify-between gap-12 border border-neutral-200 bg-neutral-50 px-10 py-9"
                key={project.id}
              >
                <div className="min-w-0">
                  <div className="break-words text-[13px] font-medium leading-18 text-neutral-950">
                    {project.name}
                  </div>
                  <div className="mt-2 text-[11px] text-neutral-500">{project.id}</div>
                </div>
                <span
                  className={[
                    "shrink-0 px-8 py-3 text-[11px] font-semibold",
                    project.id === currentProjectId
                      ? "bg-red-100 text-red-800"
                      : "bg-amber-100 text-amber-800",
                  ].join(" ")}
                >
                  {status}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-10 text-[13px] leading-20 text-neutral-600">
          No related project is blocked. Vendor can proceed through the visible approval path.
        </p>
      )}
    </section>
  );
}
