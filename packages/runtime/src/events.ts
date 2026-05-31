function addEventListener(eventName: string, handler: EventListener, el: HTMLElement): EventListener {
  el.addEventListener(eventName, handler);
  return handler;
}

export function addEventListeners(listeners: Record<string, EventListener> = {}, el: HTMLElement) {
  const addedListeners: Record<string, EventListener> = {};
  
  Object.entries(listeners).forEach(([eventName, handler]) => {
    const listener = addEventListener(eventName, handler, el);
    addedListeners[eventName] = listener;
  });
  
  return addedListeners;
}