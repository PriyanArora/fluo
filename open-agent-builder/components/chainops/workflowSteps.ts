import type { Node } from "@xyflow/react";

/** Node kinds that a reviewer can manually mark as complete. */
export const COMPLETABLE_KINDS = ["partOrigin", "humanReview"];

type NodeData = { nodeKind?: string; status?: string };

/**
 * Marks one review/gate node complete, then auto-approves the final approval
 * node once every completable step is complete and nothing is blocked.
 */
export function applyStepCompletion(nodes: Node[], nodeId: string): Node[] {
  const updated = nodes.map((node) =>
    node.id === nodeId
      ? { ...node, data: { ...node.data, status: "complete" } }
      : node,
  );

  const completable = updated.filter((node) =>
    COMPLETABLE_KINDS.includes((node.data as NodeData).nodeKind ?? ""),
  );
  const anyBlocked = updated.some(
    (node) => (node.data as NodeData).status === "blocked",
  );
  const allComplete =
    completable.length > 0 &&
    completable.every((node) => (node.data as NodeData).status === "complete");

  if (allComplete && !anyBlocked) {
    return updated.map((node) =>
      (node.data as NodeData).nodeKind === "approval"
        ? { ...node, data: { ...node.data, status: "approved" } }
        : node,
    );
  }

  return updated;
}
