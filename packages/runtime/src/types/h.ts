import type { Attributes } from "../attributes";

export enum DomTypes {
  TEXT = 'text',
  ELEMENT = 'element',
  FRAGMENT = 'fragment',
};

export type VNodeType = ElementType | FragmentType | TextType | null | undefined;

export type VNodesType = Array<VNodeType>;

export type NodeType = NonNullable<VNodeType>;

export interface PropsType extends Attributes {
  on?: Record<string, EventListener>;
} 

export interface ElementType {
  type: DomTypes.ELEMENT;
  props?: PropsType | undefined;
  children?: Array<NodeType>;
  tag: keyof HTMLElementTagNameMap;
  el: HTMLElement | null;
  listeners: Record<string, EventListener>;
}

export interface TextType {
  type: DomTypes.TEXT;
  value: string;
  el: Text | null;
}

export interface FragmentType {
  type: DomTypes.FRAGMENT;
  children: Array<NodeType>;
  el: HTMLElement | null;
}