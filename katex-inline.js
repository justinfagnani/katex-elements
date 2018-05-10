import * as katex from './katex-import.js';

export class KatexInline extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: ${this._displayMode ? 'block' : 'inline-block'};
        }
      </style>
      <!-- one of these should work ☹️ -->
      <link rel="stylesheet" href="./node_modules/katex/dist/katex.min.css">
      <link rel="stylesheet" href="../katex/dist/katex.min.css">
      <div></div>
    `;
    this._container = this.shadowRoot.querySelector('div');
  }

  get _displayMode() { return false; }

  connectedCallback() {
    katex.render(this.textContent, this._container, { displayMode: this._displayMode });
  }
}
customElements.define('katex-inline', KatexInline);
