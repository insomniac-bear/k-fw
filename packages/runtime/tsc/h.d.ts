import type { ElementType, FragmentType, TextType, VNodesType } from './types/h.js';
export declare function h(tag: keyof HTMLElementTagNameMap, props?: {}, children?: VNodesType): ElementType;
export declare function hString(str: string): TextType;
export declare function hFragment(vNodes: VNodesType): FragmentType;
//# sourceMappingURL=h.d.ts.map