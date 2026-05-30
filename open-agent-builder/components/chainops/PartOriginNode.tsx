"use client";

import { Handle, Position, useReactFlow, type NodeProps } from "@xyflow/react";
import { CheckCircle2, Globe2 } from "lucide-react";
import type { MouseEvent as ReactMouseEvent } from "react";

import { applyStepCompletion } from "@/components/chainops/workflowSteps";

type PartOriginNodeData = {
  label?: string;
  status?: string;
  countryExposure?: string[];
};

export default function PartOriginNode({ id, data, selected }: NodeProps) {
  const nodeData = data as PartOriginNodeData;
  const { setNodes } = useReactFlow();
  const exposure = nodeData.countryExposure ?? ["Canada", "United States", "China"];
  const isComplete = nodeData.status === "complete";

  const onComplete = (event: ReactMouseEvent) => {
    event.stopPropagation();
    setNodes((nodes) => applyStepCompletion(nodes, id));
  };

  return (
    <div
      className={[
        "relative w-[260px] border p-14 shadow-sm transition",
        isComplete ? "border-emerald-500 bg-emerald-50" : "border-cyan-300 bg-cyan-50",
        selected ? "ring-2 ring-cyan-200" : "",
      ].join(" ")}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!h-10 !w-10 !border-2 !border-white !bg-cyan-700"
      />

      <div className="flex items-start gap-10">
        <div
          className={[
            "flex h-34 w-34 shrink-0 items-center justify-center",
            isComplete ? "bg-emerald-600" : "bg-cyan-700",
          ].join(" ")}
        >
          {isComplete ? (
            <CheckCircle2 className="h-18 w-18 text-white" />
          ) : (
            <Globe2 className="h-18 w-18 text-white" />
          )}
        </div>
        <div>
          <div
            className={[
              "text-[12px] font-medium uppercase",
              isComplete ? "text-emerald-800" : "text-cyan-800",
            ].join(" ")}
          >
            Part / Origin Check
          </div>
          <div className="mt-2 text-[15px] font-semibold leading-20 text-neutral-950">
            {nodeData.label ?? "Component Origin Review"}
          </div>
          <p className="mt-8 text-[12px] leading-18 text-cyan-900">
            Component origin visibility required.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-6">
        {exposure.map((country) => (
          <span
            className="border border-cyan-200 bg-white px-7 py-3 text-[11px] text-cyan-900"
            key={country}
          >
            {country}
          </span>
        ))}
      </div>

      {isComplete ? (
        <div className="mt-12 inline-flex items-center gap-6 bg-emerald-100 px-9 py-5 text-[12px] font-semibold text-emerald-800">
          <CheckCircle2 className="h-14 w-14" />
          Origin check complete
        </div>
      ) : (
        <button
          className="nodrag mt-12 inline-flex w-full items-center justify-center gap-6 border border-cyan-700 bg-cyan-700 px-10 py-7 text-[12px] font-semibold uppercase text-white transition hover:opacity-90"
          onClick={onComplete}
          type="button"
        >
          <CheckCircle2 className="h-14 w-14" />
          Mark check complete
        </button>
      )}

      <Handle
        type="source"
        position={Position.Right}
        className="!h-10 !w-10 !border-2 !border-white !bg-cyan-700"
      />
    </div>
  );
}
