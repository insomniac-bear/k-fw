import type { NodeType, VNodesType } from "../types/h";

export function withoutNulls(nodes: VNodesType): Array<NodeType> {
  return nodes.filter(node => node != null);
}