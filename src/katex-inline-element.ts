import { KatexExprElement } from './katex-expr-element.js';

export class KatexInlineElement extends KatexExprElement {
  get displayMode(): boolean {
    return false;
  }
}
customElements.define('katex-inline', KatexInlineElement);
