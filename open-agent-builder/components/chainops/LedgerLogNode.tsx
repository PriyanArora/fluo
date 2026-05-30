"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Blocks } from "lucide-react";

type LedgerLogNodeData = {
  label?: string;
  eventCount?: number;
};

export default function LedgerLogNode({ data, selected }: NodeProps) {
  const nodeData = data as LedgerLogNodeData;

  return (
    <div
      className={[
        "relative w-[250px] border border-violet-300 bg-violet-50 p-14 shadow-sm",
        selected ? "ring-2 ring-violet-200" : "",
      ].join(" ")}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!h-10 !w-10 !border-2 !border-white !bg-violet-700"
      />

      <div className="flex items-start gap-10">
        <div className="flex h-34 w-34 shrink-0 items-center justify-center bg-violet-700">
          <Blocks className="h-18 w-18 text-white" />
        </div>
        <div>
          <div className="text-[12px] font-medium uppercase text-violet-800">
            Ledger Log
          </div>
          <div className="mt-2 text-[15px] font-semibold leading-20 text-neutral-950">
            {nodeData.label ?? "Write Vendor Flag Event"}
          </div>
          <p className="mt-8 text-[12px] leading-18 text-violet-900">
            Stores event metadata and payload hash.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-white px-8 py-6 text-[12px] text-violet-900">
        Cached ledger events: {nodeData.eventCount ?? 0}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!h-10 !w-10 !border-2 !border-white !bg-violet-700"
      />
    </div>
  );
}
