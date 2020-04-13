import {KatexExprElement} from './katex-expr-element.js';

export class KatexDisplayElement extends KatexExprElement {
  get displayMode() {
    return true;
  }
}
customElements.define('katex-display', KatexDisplayElement);
