import { DomTypes } from './types/h.js';
import { withoutNulls } from './utils/arrays.js';

import type { ElementType, FragmentType, NodeType, TextType, VNodesType } from './types/h.js';

export function h(tag: keyof HTMLElementTagNameMap, props = {}, children: VNodesType = []): ElementType {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DomTypes.ELEMENT,
  }
}

function mapTextNodes(children: Array<NodeType>): Array<NodeType> {
  return children.map(child => typeof child === 'string' ? hString(child) : child);
}

export function hString(str: string): TextType {
  return {
    type: DomTypes.TEXT,
    value: str,
  }
}

export function hFragment(vNodes: VNodesType): FragmentType {
  return {
    type: DomTypes.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes)),
  }
}