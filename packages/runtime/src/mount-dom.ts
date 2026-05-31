import { DomTypes } from './types/h';
import type { ElementType, FragmentType, NodeType, PropsType, TextType } from './types/h.js';
import { addEventListeners } from './events';
import { setAttributes } from './attributes';

export function mountDOM(vdom: NodeType, parentEl: HTMLElement) {
  switch (vdom.type) {
    case DomTypes.TEXT: {
      createTextNode(vdom, parentEl);
      break;
    }
    
    case DomTypes.ELEMENT: {
      createElementNode(vdom, parentEl);
      break;
    }
    
    case DomTypes.FRAGMENT: {
      createFragmentNodes(vdom, parentEl);
      break;
    }
    
    default:
      throw new Error(`Can't mount DOM of type: ${vdom}`);
  }
}

function createTextNode(vdom: TextType, parentEl: HTMLElement) {
  const { value } = vdom;
  const textNode = document.createTextNode(value);
  vdom.el = textNode;
  parentEl.appendChild(textNode);
}

function createFragmentNodes(vdom: FragmentType, parentEl: HTMLElement) {
  const { children } = vdom;
  vdom.el = parentEl;
  children.forEach((child) => mountDOM(child, parentEl));
}

function createElementNode(vdom: ElementType, parentEl: HTMLElement) {
  const { tag, props, children } = vdom;

  const element = document.createElement(tag);
  if (props) addProps(element, props, vdom);
  vdom.el = element;

  if (children) children.forEach((child) => mountDOM(child, element));
  parentEl.appendChild(element);
}

function addProps(el: HTMLElement, props: PropsType, vdom: ElementType) {
  const { on: events, ...atr } = props;

  vdom.listeners = addEventListeners(events, el);
  setAttributes(el, atr);
};

