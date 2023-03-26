import type { CustomEvent } from "../types/type";

export const $ = <T extends Element = Element>(
  selector: string,
  target: HTMLElement | Document = document
) => {
  const element = target.querySelector<T>(selector);

  if (!element) {
    throw new Error(`Element not found: ${selector}`);
  }
  return element;
};

export const $$ = <T extends Element = Element>(
  selector: string,
  target: HTMLElement | Document = document
) => {
  const elements = target.querySelectorAll<T>(selector);

  if (!elements || !elements.length) {
    throw new Error(`Element not found: ${selector}`);
  }
  return elements;
};

export const dispatchCustomEvent = (
  $target: HTMLElement,
  { eventType, data = null }: CustomEvent
) => {
  const customEvent = new CustomEvent(eventType, { detail: data });

  $target.dispatchEvent(customEvent);
};
