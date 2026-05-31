export interface Attributes {
  className?: string;
  style?: string;
  [key: string]: unknown;
};

export function setAttributes(el: HTMLElement, attrs: Attributes) {
  const { className, style, ...otherAttrs } = attrs;
  
  if (className) setClasses(el, className);

  if (style) Object.entries(style).forEach(([prop, value]) => {
    setStyle(el, prop, value);
  });
  
  for (const [name, value] of Object.entries(otherAttrs)) {
    setAttribute(el, name, value as string);
  }
};

function setClasses(el: HTMLElement, className: string) {
  el.className = '';
  
  if (typeof className === 'string') el.className = className;
  
  if (Array.isArray(className)) el.classList.add(...className);
}

export function setAttribute(el: HTMLElement, name: string, value: string) {
  if (value === null) el.removeAttribute(name);
  else el.setAttribute(name, value);
}

export function setStyle(el: HTMLElement, name: string, value: string) {
  el.style.setProperty(name, value);
}

export function removeStyle(el: HTMLElement, name: string) {
  el.style.removeProperty(name);
}
