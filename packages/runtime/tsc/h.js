import { DomTypes } from './types/h.js';
import { withoutNulls } from './utils/arrays.js';
export function h(tag, props = {}, children = []) {
    return {
        tag,
        props,
        children: mapTextNodes(withoutNulls(children)),
        type: DomTypes.ELEMENT,
    };
}
function mapTextNodes(children) {
    return children.map(child => typeof child === 'string' ? hString(child) : child);
}
export function hString(str) {
    return {
        type: DomTypes.TEXT,
        value: str,
    };
}
export function hFragment(vNodes) {
    return {
        type: DomTypes.FRAGMENT,
        children: mapTextNodes(withoutNulls(vNodes)),
    };
}
//# sourceMappingURL=h.js.map