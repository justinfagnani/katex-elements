interface ShadowRoot {
  adoptedStyleSheets: CSSStyleSheet[];
}

declare var ShadowRoot: {prototype: ShadowRoot; new (): ShadowRoot;}

interface CSSStyleSheet {
  replaceSync(cssText: string): void;
  replace(cssText: string): Promise<unknown>;
}

declare module 'katex/dist/katex.mjs';
