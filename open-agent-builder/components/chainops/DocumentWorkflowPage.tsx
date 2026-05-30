"use client";

import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type DragEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
  type Connection,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import {
  AlertTriangle,
  Blocks,
  CheckCircle2,
  CircleStop,
  FileText,
  Gavel,
  GripVertical,
  Network,
  Play,
  ShieldAlert,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

import AffectedProjectsPanel from "@/components/chainops/AffectedProjectsPanel";
import ConsoleNav from "@/components/chainops/ConsoleNav";
import LedgerDrawer from "@/components/chainops/LedgerDrawer";
import LedgerLogNode from "@/components/chainops/LedgerLogNode";
import PartOriginNode from "@/components/chainops/PartOriginNode";
import VendorNode from "@/components/chainops/VendorNode";
import { applyStepCompletion } from "@/components/chainops/workflowSteps";
import type {
  ChainOpsDocument,
  LedgerEvent,
  Organization,
  Project,
  Vendor,
  WorkflowDefinition,
} from "@/lib/chainops/jsonStore";

type VendorDropResult =
  | { status: "allowed"; vendor: Vendor; affectedProjects: [] }
  | { status: "blocked"; reason: string; vendor?: Vendor; affectedProjects: Project[] };

type VendorDropResponse = {
  result: VendorDropResult;
  ledgerEvents: LedgerEvent[];
};

type DocumentWorkflowPageProps = {
  organization: Organization;
  document: ChainOpsDocument;
  project: Project;
  workflow: WorkflowDefinition;
  vendors: Vendor[];
  projects: Project[];
  ledgerEvents: LedgerEvent[];
};

type GenericNodeData = {
  label?: string;
  status?: string;
  nodeKind?: string;
  description?: string;
  vendorName?: string;
  vendorId?: string;
  controlledGoodsStatus?: string;
  countryExposure?: string[];
  riskReason?: string;
  eventCount?: number;
};

const defaultEdgeStyle = { stroke: "#75777a", strokeWidth: 2 };
const blockedEdgeStyle = { stroke: "#ba1a1a", strokeDasharray: "9 6", strokeWidth: 3 };

const paletteItems = [
  { label: "Project Start", nodeKind: "projectStart", icon: Play },
  { label: "Vendor / Contractor", nodeKind: "vendor", icon: ShieldAlert },
  { label: "Part / Origin Check", nodeKind: "partOrigin", icon: FileText },
  { label: "Human Review", nodeKind: "humanReview", icon: UserCheck },
  { label: "Ledger Log", nodeKind: "ledgerLog", icon: Blocks },
  { label: "Blocked / Escalated", nodeKind: "blocked", icon: CircleStop },
] as const;

function GenericWorkflowNode({ id, data, selected }: NodeProps) {
  const nodeData = data as GenericNodeData;
  const { setNodes } = useReactFlow();
  const kind = nodeData.nodeKind;
  const status = nodeData.status;

  const isStart = kind === "projectStart";
  const isApproval = kind === "approval";
  const isHumanReview = kind === "humanReview";
  const isBlocked = status === "blocked";
  const isComplete = status === "complete";
  const isApproved = status === "approved";

  const tone = isBlocked
    ? "blocked"
    : isApproved || isComplete
      ? "done"
      : isHumanReview
        ? "review"
        : isApproval
          ? "gate"
          : isStart
            ? "start"
            : "default";

  const accentClass = {
    blocked: "border-red-500 bg-red-50",
    done: "border-emerald-500 bg-emerald-50",
    review: "border-amber-300 bg-amber-50",
    gate: "border-neutral-300 bg-white",
    start: "border-sky-300 bg-sky-50",
    default: "border-neutral-200 bg-white",
  }[tone];
  const iconClass = {
    blocked: "bg-red-600",
    done: "bg-emerald-600",
    review: "bg-amber-700",
    gate: "bg-neutral-400",
    start: "bg-sky-700",
    default: "bg-neutral-950",
  }[tone];
  const eyebrowClass = {
    blocked: "text-red-800",
    done: "text-emerald-800",
    review: "text-amber-800",
    gate: "text-neutral-500",
    start: "text-sky-800",
    default: "text-neutral-500",
  }[tone];

  const Icon = isStart
    ? Play
    : isBlocked
      ? CircleStop
      : isApproved || isComplete
        ? CheckCircle2
        : isHumanReview
          ? UserCheck
          : CheckCircle2;

  const eyebrow = isStart
    ? "Project Start"
    : isBlocked
      ? "Blocked / Escalated"
      : isHumanReview
        ? "Human Review"
        : "Approval Gate";

  const onComplete = (event: ReactMouseEvent) => {
    event.stopPropagation();
    setNodes((nodes) => applyStepCompletion(nodes, id));
  };

  return (
    <div
      className={[
        "relative w-[245px] border p-14 shadow-sm transition",
        selected ? "ring-2 ring-neutral-300" : "",
        accentClass,
      ].join(" ")}
    >
      {!isStart ? (
        <Handle
          className="!h-10 !w-10 !border-2 !border-white !bg-neutral-700"
          position={Position.Left}
          type="target"
        />
      ) : null}

      <div className="flex items-start gap-10">
        <div className={["flex h-34 w-34 shrink-0 items-center justify-center", iconClass].join(" ")}>
          <Icon className="h-18 w-18 text-white" />
        </div>
        <div className="min-w-0">
          <div className={["fluo-mono text-[11px] uppercase", eyebrowClass].join(" ")}>
            {eyebrow}
          </div>
          <div className="mt-2 break-words text-[15px] font-semibold leading-20 text-neutral-950">
            {nodeData.label}
          </div>
          {nodeData.description ? (
            <p className="mt-8 text-[12px] leading-18 text-neutral-600">
              {nodeData.description}
            </p>
          ) : null}
        </div>
      </div>

      {isHumanReview ? (
        isComplete ? (
          <div className="mt-12 inline-flex items-center gap-6 bg-emerald-100 px-9 py-5 text-[12px] font-semibold text-emerald-800">
            <CheckCircle2 className="h-14 w-14" />
            Review complete
          </div>
        ) : (
          <button
            className="nodrag mt-12 inline-flex w-full items-center justify-center gap-6 border border-amber-700 bg-amber-700 px-10 py-7 text-[12px] font-semibold uppercase text-white transition hover:opacity-90"
            onClick={onComplete}
            type="button"
          >
            <CheckCircle2 className="h-14 w-14" />
            Mark review complete
          </button>
        )
      ) : null}

      {isApproval ? (
        <div
          className={[
            "mt-12 inline-flex items-center gap-6 px-9 py-5 text-[12px] font-semibold",
            isApproved
              ? "bg-emerald-100 text-emerald-800"
              : "bg-neutral-100 text-neutral-600",
          ].join(" ")}
        >
          {isApproved ? (
            <>
              <CheckCircle2 className="h-14 w-14" />
              Approved — released
            </>
          ) : (
            "Awaiting upstream steps"
          )}
        </div>
      ) : null}

      {!isApproval && !isBlocked ? (
        <Handle
          className="!h-10 !w-10 !border-2 !border-white !bg-neutral-700"
          position={Position.Right}
          type="source"
        />
      ) : null}
    </div>
  );
}

function buildInitialNodes(workflow: WorkflowDefinition, eventCount: number): Node[] {
  return workflow.nodes.map((workflowNode) => ({
    id: workflowNode.id,
    type: workflowNode.type,
    position: workflowNode.position,
    data: {
      label: workflowNode.label,
      status: workflowNode.status,
      nodeKind: workflowNode.type,
      countryExposure: workflowNode.countryExposure,
      eventCount: workflowNode.type === "ledgerLog" ? eventCount : undefined,
      description:
        workflowNode.type === "humanReview"
          ? "Human review required before final authorization."
          : undefined,
    },
  }));
}

function buildInitialEdges(workflow: WorkflowDefinition): Edge[] {
  return workflow.edges.map((workflowEdge) => ({
    id: workflowEdge.id,
    source: workflowEdge.source,
    target: workflowEdge.target,
    label: workflowEdge.label,
    markerEnd: { type: MarkerType.ArrowClosed, color: "#75777a" },
    style: defaultEdgeStyle,
    labelStyle: { fill: "#44474a", fontSize: 12, fontWeight: 700 },
    labelBgStyle: { fill: "#ffffff", fillOpacity: 0.94 },
  }));
}

function createPaletteNode(
  item: (typeof paletteItems)[number],
  position: { x: number; y: number },
  eventCount: number,
): Node {
  const nodeKind = item.nodeKind;
  const data: GenericNodeData = {
    label:
      nodeKind === "vendor"
        ? "Vendor / Contractor"
        : nodeKind === "partOrigin"
          ? "Component Origin Review"
          : nodeKind === "ledgerLog"
            ? "Write Vendor Flag Event"
            : item.label,
    status:
      nodeKind === "blocked"
        ? "blocked"
        : nodeKind === "humanReview"
          ? "required"
          : nodeKind === "partOrigin"
            ? "review"
            : "ready",
    nodeKind,
    countryExposure:
      nodeKind === "partOrigin" ? ["Canada", "United States", "China"] : undefined,
    eventCount: nodeKind === "ledgerLog" ? eventCount : undefined,
    description:
      nodeKind === "humanReview"
        ? "Human review required before final authorization."
        : nodeKind === "blocked"
          ? "Human review required before authorization."
          : undefined,
  };

  return {
    id: `${nodeKind}-${crypto.randomUUID()}`,
    type: nodeKind,
    position: { x: position.x - 120, y: position.y - 48 },
    data,
  };
}

function DocumentWorkflowCanvas(props: DocumentWorkflowPageProps) {
  const {
    organization,
    document,
    project,
    workflow,
    vendors,
    projects,
    ledgerEvents: initialLedgerEvents,
  } = props;
  const nameMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const item of projects) map[item.id] = item.name;
    for (const item of vendors) map[item.id] = item.name;
    return map;
  }, [projects, vendors]);
  const { screenToFlowPosition } = useReactFlow();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [vendorList, setVendorList] = useState(vendors);
  const [ledgerEvents, setLedgerEvents] = useState(initialLedgerEvents);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    buildInitialNodes(workflow, initialLedgerEvents.length),
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(buildInitialEdges(workflow));
  const [selectedNodeId, setSelectedNodeId] = useState("vendor-slot");
  const [dropResult, setDropResult] = useState<VendorDropResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [dropError, setDropError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges) =>
        addEdge(
          {
            ...connection,
            markerEnd: { type: MarkerType.ArrowClosed, color: "#75777a" },
            style: defaultEdgeStyle,
          },
          currentEdges,
        ),
      );
    },
    [setEdges],
  );

  const nodeTypes = useMemo(
    () => ({
      projectStart: GenericWorkflowNode,
      vendor: VendorNode,
      partOrigin: PartOriginNode,
      humanReview: GenericWorkflowNode,
      ledgerLog: LedgerLogNode,
      approval: GenericWorkflowNode,
      blocked: GenericWorkflowNode,
    }),
    [],
  );

  const selectedNode = nodes.find((node) => node.id === selectedNodeId) ?? nodes[0];
  const affectedProjects =
    dropResult?.status === "blocked" ? dropResult.affectedProjects : [];

  const updateLedgerEventCount = useCallback(
    (nextEventCount: number) => {
      setNodes((currentNodes) =>
        currentNodes.map((node) =>
          node.id === "ledger-log"
            ? { ...node, data: { ...node.data, eventCount: nextEventCount } }
            : node,
        ),
      );
    },
    [setNodes],
  );

  const markVendorAllowed = useCallback(
    (vendor: Vendor) => {
      setNodes((currentNodes) =>
        currentNodes
          .filter((node) => node.id !== "blocked-vendor")
          .map((node) =>
            node.id === "vendor-slot"
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    label: vendor.name,
                    vendorName: vendor.name,
                    vendorId: vendor.id,
                    status: "allowed",
                    controlledGoodsStatus: vendor.controlledGoodsStatus,
                    countryExposure: vendor.countryExposure,
                    riskReason: undefined,
                  },
                }
              : node,
          ),
      );
      setEdges(buildInitialEdges(workflow));
    },
    [setEdges, setNodes, workflow],
  );

  const markVendorBlocked = useCallback(
    (vendor: Vendor | undefined, reason: string) => {
      setNodes((currentNodes) => {
        const withoutBlockedNode = currentNodes.filter(
          (node) => node.id !== "blocked-vendor",
        );

        return [
          ...withoutBlockedNode.map((node) =>
            node.id === "vendor-slot"
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    label: vendor?.name ?? "Vendor Not Found",
                    vendorName: vendor?.name ?? "Vendor Not Found",
                    vendorId: vendor?.id,
                    status: "blocked",
                    controlledGoodsStatus: vendor?.controlledGoodsStatus,
                    countryExposure: vendor?.countryExposure,
                    riskReason: reason,
                  },
                }
              : node,
          ),
          {
            id: "blocked-vendor",
            type: "blocked",
            position: { x: 380, y: 520 },
            data: {
              label: "Vendor Not Authorized",
              status: "blocked",
              nodeKind: "blocked",
              description: "Human review required before authorization.",
            },
          },
        ];
      });

      setEdges([
        ...buildInitialEdges(workflow).map((edge) =>
          edge.id === "edge-vendor-origin"
            ? {
                ...edge,
                label: "connection blocked",
                markerEnd: { type: MarkerType.ArrowClosed, color: "#ba1a1a" },
                style: blockedEdgeStyle,
                labelStyle: {
                  fill: "#93000a",
                  fontSize: 12,
                  fontWeight: 800,
                  textDecoration: "line-through",
                },
              }
            : edge,
        ),
        {
          id: "edge-vendor-blocked",
          source: "vendor-slot",
          target: "blocked-vendor",
          label: "blocked",
          markerEnd: { type: MarkerType.ArrowClosed, color: "#ba1a1a" },
          style: { stroke: "#ba1a1a", strokeWidth: 3 },
          labelStyle: { fill: "#93000a", fontSize: 12, fontWeight: 800 },
          labelBgStyle: { fill: "#ffdad6", fillOpacity: 0.96 },
        },
      ]);
    },
    [setEdges, setNodes, workflow],
  );

  const evaluateVendor = useCallback(
    async (vendorId: string) => {
      setIsEvaluating(true);
      setDropError(null);

      try {
        const response = await fetch("/api/chainops/vendor-drop", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ vendorId, projectId: project.id }),
        });

        if (!response.ok) {
          throw new Error("Vendor risk evaluation failed.");
        }

        const payload = (await response.json()) as VendorDropResponse;
        setDropResult(payload.result);
        setLedgerEvents((currentEvents) => {
          const nextEvents = [...currentEvents, ...payload.ledgerEvents];
          updateLedgerEventCount(nextEvents.length);
          return nextEvents;
        });

        if (payload.result.status === "allowed") {
          markVendorAllowed(payload.result.vendor);
        } else {
          markVendorBlocked(payload.result.vendor, payload.result.reason);
        }

        setSelectedNodeId("vendor-slot");
      } catch (error) {
        setDropError(error instanceof Error ? error.message : "Vendor drop failed.");
      } finally {
        setIsEvaluating(false);
      }
    },
    [markVendorAllowed, markVendorBlocked, project.id, updateLedgerEventCount],
  );

  const applyMockVettingUpdate = async () => {
    setDropError(null);
    const response = await fetch("/api/chainops/vendor-risk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vendorId: "vendor-northline-systems",
        riskStatus: "flagged",
      }),
    });

    if (!response.ok) {
      setDropError("Could not apply mock vetting update.");
      return;
    }

    const payload = (await response.json()) as { vendor: Vendor };
    setVendorList((currentVendors) =>
      currentVendors.map((vendor) =>
        vendor.id === payload.vendor.id ? payload.vendor : vendor,
      ),
    );
  };

  const onVendorDragStart = (event: DragEvent<HTMLDivElement>, vendorId: string) => {
    event.dataTransfer.setData("application/chainops-vendor", vendorId);
    event.dataTransfer.effectAllowed = "move";
  };

  const onPaletteDragStart = (
    event: DragEvent<HTMLDivElement>,
    item: (typeof paletteItems)[number],
  ) => {
    event.dataTransfer.setData(
      "application/chainops-node",
      JSON.stringify({ label: item.label, nodeKind: item.nodeKind }),
    );
    event.dataTransfer.effectAllowed = "copy";
  };

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
    event.dataTransfer.dropEffect = event.dataTransfer.types.includes(
      "application/chainops-node",
    )
      ? "copy"
      : "move";
  }, []);

  const onDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    if (!wrapperRef.current?.contains(event.relatedTarget as HTMLElement | null)) {
      setIsDragOver(false);
    }
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragOver(false);
      const vendorId = event.dataTransfer.getData("application/chainops-vendor");
      if (vendorId) {
        void evaluateVendor(vendorId);
        return;
      }

      const nodeData = event.dataTransfer.getData("application/chainops-node");
      if (nodeData) {
        const parsed = JSON.parse(nodeData) as Pick<
          (typeof paletteItems)[number],
          "label" | "nodeKind"
        >;
        const item = paletteItems.find(
          (candidate) => candidate.nodeKind === parsed.nodeKind,
        );

        if (!item) return;

        const position = screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });
        const nextNode = createPaletteNode(item, position, ledgerEvents.length);
        setNodes((currentNodes) => [...currentNodes, nextNode]);
        setSelectedNodeId(nextNode.id);
      }
    },
    [evaluateVendor, ledgerEvents.length, screenToFlowPosition, setNodes],
  );

  return (
    <div className="fluo-page">
      <ConsoleNav
        active="workspace"
        orgId={organization.id}
        action={
          <button className="fluo-console-action" onClick={applyMockVettingUpdate}>
            Simulate Vetting Update
          </button>
        }
      />

      <header className="fluo-doc-header">
        <div>
          <span className="fluo-label">{project.id}</span>
          <h1 className="fluo-headline mt-12 text-[32px] font-bold leading-37">
            {document.title}
          </h1>
          <p className="mt-8 max-w-[760px] text-[14px] leading-21 text-[var(--fluo-muted)]">
            Build the approval path, then drop a vendor to run vetting and write the
            ledger event.
          </p>
        </div>
        <Link className="fluo-doc-header-link fluo-mono" href="/trace">
          Trace a part →
        </Link>
      </header>

      <div className="fluo-workspace-shell">
        <aside className="fluo-side">
          <div className="fluo-side-heading">
            <span className="fluo-label">Step 1</span>
            <h2 className="fluo-headline mt-8 text-[17px] font-semibold">
              Workflow Nodes
            </h2>
            <p className="mt-4 text-[12px] leading-17 text-[var(--fluo-muted)]">
              Drag any block onto the canvas to build the approval path.
            </p>
          </div>
          <div className="mt-14 space-y-8">
            {paletteItems.map((item) => {
              const Icon = item.icon;

              return (
              <div
                className="fluo-palette-item"
                data-node-kind={item.nodeKind}
                draggable
                key={item.nodeKind}
                onDragStart={(event) => onPaletteDragStart(event, item)}
              >
                <span className="fluo-palette-icon">
                  <Icon className="h-15 w-15" />
                </span>
                <span className="fluo-palette-label">{item.label}</span>
                <GripVertical className="fluo-palette-grip h-15 w-15" />
              </div>
              );
            })}
          </div>

          <div className="mt-26">
            <span className="fluo-label">Step 2</span>
            <h3 className="fluo-headline mt-8 text-[17px] font-semibold">
              Drop a Vendor
            </h3>
            <p className="mt-4 text-[12px] leading-17 text-[var(--fluo-muted)]">
              Drag a contractor into the canvas to run vetting.
            </p>
            <div className="mt-12 space-y-10">
              {vendorList.map((vendor) => (
                <div
                  className="fluo-vendor-chip"
                  data-risk={vendor.riskStatus}
                  draggable
                  key={vendor.id}
                  onDragStart={(event) => onVendorDragStart(event, vendor.id)}
                >
                  <div className="flex items-center justify-between gap-10">
                    <div className="min-w-0">
                      <div className="truncate text-[14px] font-semibold">
                        {vendor.name}
                      </div>
                      <div className="mt-3 text-[12px] text-[var(--fluo-muted)]">
                        {vendor.controlledGoodsStatus}
                      </div>
                    </div>
                    <span
                      className={[
                        "fluo-mono shrink-0 px-8 py-4 text-[10px] uppercase",
                        vendor.riskStatus === "flagged"
                          ? "fluo-status-error"
                          : "fluo-status-clear",
                      ].join(" ")}
                    >
                      {vendor.riskStatus}
                    </span>
                  </div>
                  <div className="fluo-vendor-chip-hint fluo-mono">
                    <GripVertical className="h-12 w-12" />
                    Drag to canvas
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main
          className={[
            "fluo-flow",
            isDragOver ? "fluo-flow-dragover" : "",
          ].join(" ")}
          ref={wrapperRef}
        >
          <ReactFlow
            className="fluo-flow-react-bg"
            connectionLineStyle={{ stroke: "#070a0c", strokeWidth: 2 }}
            defaultEdgeOptions={{
              markerEnd: { type: MarkerType.ArrowClosed, color: "#75777a" },
              style: defaultEdgeStyle,
            }}
            edges={edges}
            elementsSelectable
            fitView
            fitViewOptions={{ padding: 0.22, maxZoom: 1 }}
            minZoom={0.4}
            maxZoom={1.6}
            nodeTypes={nodeTypes}
            nodes={nodes}
            nodesConnectable
            nodesDraggable
            onConnect={onConnect}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onEdgesChange={onEdgesChange}
            onNodeClick={(_, node) => setSelectedNodeId(node.id)}
            onNodesChange={onNodesChange}
            onDrop={onDrop}
            onPaneClick={() => setIsDragOver(false)}
            panOnDrag
            proOptions={{ hideAttribution: true }}
            zoomOnDoubleClick
            zoomOnPinch
            zoomOnScroll
          >
            <Background color="#d4d4d4" gap={22} size={1.4} variant={BackgroundVariant.Dots} />
            <MiniMap
              maskColor="rgba(243, 243, 243, 0.7)"
              nodeColor="#070a0c"
              pannable
              zoomable
            />
            <Controls showInteractive={false} />
          </ReactFlow>

          {isDragOver ? (
            <div className="fluo-flow-dropzone" aria-hidden="true">
              <span>Drop to place on the workflow canvas</span>
            </div>
          ) : null}
        </main>

        <aside className="fluo-inspector">
          <section className="fluo-card p-16">
            <div className="flex items-center gap-8">
              <Gavel size={18} />
              <h2 className="fluo-headline text-[18px] font-semibold">Inspector</h2>
            </div>
            <div className="mt-16 border border-[var(--fluo-border)] bg-[var(--fluo-panel-soft)] p-12">
              <div className="fluo-mono text-[11px] uppercase text-[var(--fluo-muted)]">
                Selected Node
              </div>
              <div className="mt-4 text-[15px] font-semibold">
                {String(selectedNode?.data?.label ?? "Workflow node")}
              </div>
              <div className="mt-4 text-[12px] text-[var(--fluo-muted)]">
                Status: {String(selectedNode?.data?.status ?? "ready")}
              </div>
            </div>

            {dropResult?.status === "blocked" ? (
              <div className="mt-12 border border-red-200 bg-red-50 p-12">
                <div className="flex items-center gap-8 text-[13px] font-semibold text-red-900">
                  <AlertTriangle className="h-16 w-16" />
                  Human review required before authorization.
                </div>
                <p className="mt-8 text-[12px] leading-18 text-red-800">
                  {dropResult.reason}
                </p>
              </div>
            ) : null}

            {dropResult?.status === "allowed" ? (
              <div className="mt-12 border border-emerald-200 bg-emerald-50 p-12">
                <div className="flex items-center gap-8 text-[13px] font-semibold text-emerald-900">
                  <CheckCircle2 className="h-16 w-16" />
                  Vendor path allowed.
                </div>
              </div>
            ) : null}

            {isEvaluating ? (
              <p className="mt-12 text-[13px] text-[var(--fluo-muted)]">
                Reading local vetting JSON and writing ledger event...
              </p>
            ) : null}
            {dropError ? <p className="mt-12 text-[13px] text-red-700">{dropError}</p> : null}
          </section>

          <div className="mt-16">
            <AffectedProjectsPanel
              currentProjectId={project.id}
              isBlocked={dropResult?.status === "blocked"}
              projects={affectedProjects}
            />
          </div>

          <section className="mt-16 border border-[var(--fluo-border)] bg-white p-14">
            <div className="mb-8 flex items-center gap-8">
              <Network size={16} />
              <span className="fluo-mono text-[11px] uppercase">Part-Origin Context</span>
            </div>
            <p className="text-[12px] leading-18 text-[var(--fluo-muted)]">
              Component origin visibility required. Country exposure: Canada, United
              States, China.
            </p>
          </section>
        </aside>
      </div>

      <LedgerDrawer events={ledgerEvents} nameMap={nameMap} variant="drawer" />
    </div>
  );
}

export default function DocumentWorkflowPage(props: DocumentWorkflowPageProps) {
  return (
    <ReactFlowProvider>
      <DocumentWorkflowCanvas {...props} />
    </ReactFlowProvider>
  );
}
