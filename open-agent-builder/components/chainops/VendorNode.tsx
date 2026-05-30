"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { AlertTriangle, Building2, ShieldCheck } from "lucide-react";

type VendorNodeData = {
  label?: string;
  vendorName?: string;
  status?: "pending" | "allowed" | "blocked";
  riskReason?: string;
  controlledGoodsStatus?: string;
  countryExposure?: string[];
};

export default function VendorNode({ data, selected }: NodeProps) {
  const nodeData = data as VendorNodeData;
  const status = nodeData.status ?? "pending";
  const isBlocked = status === "blocked";
  const isAllowed = status === "allowed";
  const title = isBlocked
    ? "Vendor blocked: risk flag found in local vetting registry."
    : undefined;

  return (
    <div
      title={title}
      className={[
        "relative w-[250px] border bg-white p-14 shadow-sm transition",
        selected ? "ring-2 ring-neutral-300" : "",
        isBlocked
          ? "border-red-500 bg-red-50"
          : isAllowed
            ? "border-emerald-500 bg-emerald-50"
            : "border-neutral-200",
      ].join(" ")}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!h-10 !w-10 !border-2 !border-white !bg-neutral-500"
      />

      <div className="flex items-start gap-10">
        <div
          className={[
            "flex h-34 w-34 shrink-0 items-center justify-center",
            isBlocked ? "bg-red-600" : isAllowed ? "bg-emerald-600" : "bg-neutral-800",
          ].join(" ")}
        >
          {isBlocked ? (
            <AlertTriangle className="h-18 w-18 text-white" />
          ) : isAllowed ? (
            <ShieldCheck className="h-18 w-18 text-white" />
          ) : (
            <Building2 className="h-18 w-18 text-white" />
          )}
        </div>

        <div className="min-w-0">
          <div className="text-[12px] font-medium uppercase text-neutral-500">
            Vendor / Contractor
          </div>
          <div className="mt-2 break-words text-[15px] font-semibold leading-20 text-neutral-950">
            {nodeData.vendorName ?? nodeData.label ?? "Vendor / Contractor"}
          </div>
          <div
            className={[
              "mt-8 inline-flex px-8 py-3 text-[12px] font-medium",
              isBlocked
                ? "bg-red-100 text-red-800"
                : isAllowed
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-neutral-100 text-neutral-700",
            ].join(" ")}
          >
            {isBlocked ? "Blocked" : isAllowed ? "Authorized path allowed" : "Awaiting drop"}
          </div>
        </div>
      </div>

      {nodeData.countryExposure?.length ? (
        <div className="mt-12 flex flex-wrap gap-6">
          {nodeData.countryExposure.map((country) => (
            <span
            className="border border-neutral-200 bg-white px-7 py-3 text-[11px] text-neutral-700"
              key={country}
            >
              {country}
            </span>
          ))}
        </div>
      ) : null}

      {isBlocked ? (
        <p className="mt-10 text-[12px] leading-18 text-red-800">
          {nodeData.riskReason ?? "Human review required before authorization."}
        </p>
      ) : null}

      <Handle
        type="source"
        position={Position.Right}
        className="!h-10 !w-10 !border-2 !border-white !bg-neutral-500"
      />
    </div>
  );
}
