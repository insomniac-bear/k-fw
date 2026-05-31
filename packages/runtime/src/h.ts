import { DomTypes } from './types/h';
import { withoutNulls } from './utils/arrays';

import type { ElementType, FragmentType, NodeType, PropsType, TextType, VNodesType } from './types/h';

export function h(
  tag: keyof HTMLElementTagNameMap,
  props?: PropsType,
  children: VNodesType = [],
): ElementType {
  return {
    tag,
    props: props ? props : undefined,
    children: mapTextNodes(withoutNulls(children)),
    type: DomTypes.ELEMENT,
    el: null,
    listeners: {},
  }
}

function mapTextNodes(children: Array<NodeType>): Array<NodeType> {
  return children.map(child => typeof child === 'string' ? hString(child) : child);
}

export function hString(str: string): TextType {
  return {
    type: DomTypes.TEXT,
    value: str,
    el: null,
  }
}

export function hFragment(vNodes: VNodesType): FragmentType {
  return {
    type: DomTypes.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes)),
    el: null,
  }
}