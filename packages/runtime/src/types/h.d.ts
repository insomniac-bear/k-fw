export enum DomTypes {
  TEXT = 'text',
  ELEMENT = 'element',
  FRAGMENT = 'fragment',
};

export type VNodeType = ElementType | FragmentType | TextType | string | null | undefined;

export type VNodesType = Array<VNodeType>;

export type NodeType = NonNullable<VNodeType>;



export interface ElementType {
  type: DomTypes.ELEMENT;
  props: Record<string, unknown>;
  children: Array<NodeType>;
  tag: keyof HTMLElementTagNameMap;
}

export interface TextType {
  type: DomTypes.TEXT;
  value: string;
}

export interface FragmentType {
  type: DomTypes.FRAGMENT;
  children: Array<NodeType>;
}