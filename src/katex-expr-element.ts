import katexType from 'katex';
import katexDist from 'katex/dist/katex.mjs';
import {styles} from './katex.min.css.js';

const katex = katexDist as typeof katexType;

export const supportsAdoptingStyleSheets =
    ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);

let styleSheet: CSSStyleSheet|undefined;
const getStyleSheet = () => {
  if (styleSheet === undefined) {
    styleSheet = new CSSStyleSheet();
    styleSheet.replace(styles);
  }
  return styleSheet;
}

const template = document.createElement('template');
template.innerHTML = `
  ${!supportsAdoptingStyleSheets ? `<style>${styles}</style>` : ''}
  <style>
    :host {
      display: block;
    }
  </style>
  <div id="container"></div>
  <div hidden><slot></slot></div>
`;

export class KatexExprElement extends HTMLElement {

  static observedAttributes = ['display-mode', 'leqno', 'fleqn', 'macros'];

  private _container: HTMLDivElement;
  private _slot: HTMLSlotElement;
  private _styleTag: HTMLStyleElement;

  private _macros?: {[name: string]: string};
  get macros(): {[name: string]: string}|undefined {
    return this._macros;
  }
  set macros(v: {[name: string]: string}|undefined) {
    if (v == null) {
      this.removeAttribute('macros');
    } else {
      try {
        const json = JSON.stringify(v);
        this._macros = v;
        this.setAttribute('macros', json);
      } catch (e) {
        this._macros = undefined;
        this.removeAttribute('macros');
        throw e;
      }
    }
  }

  /**
   * The Katex displayMode:
   * 
   * If true, math will be rendered in display mode (math in display style and
   * center math on page)
   * 
   * If false, math will be rendered in inline mode
   */
  get displayMode(): boolean {
    return this.hasAttribute('display-mode');
  }

  set displayMode(v: boolean) {
    if (v) {
      this.setAttribute('display-mode', '');
    } else {
      this.removeAttribute('display-mode');
    }
  }

  get leqno(): boolean {
    return this.hasAttribute('leqno');
  }

  set leqno(v: boolean) {
    if (v) {
      this.setAttribute('leqno', '');
    } else {
      this.removeAttribute('leqno');
    }
  }

  get fleqn(): boolean {
    return this.hasAttribute('fleqn');
  }

  set fleqn(v: boolean) {
    if (v) {
      this.setAttribute('fleqn', '');
    } else {
      this.removeAttribute('fleqn');
    }
  }

  /**
   * Specifies a minimum thickness, in ems, for fraction lines, \sqrt top lines,
   * {array} vertical lines, \hline, \hdashline, \underline, \overline, and the
   * borders of \fbox, \boxed, and \fcolorbox. The usual value for these items
   * is 0.04, so for minRuleThickness to be effective it should probably take a
   * value slightly above 0.04, say 0.05 or 0.06. Negative values will be
   * ignored.
   */
  get minRuleThickness(): number|undefined {
    const attrValue = this.getAttribute('min-rule-thickness');
    if (attrValue == null) {
      return undefined;
    }
    return parseFloat(attrValue);
  }

  set minRuleThickness(v: number|undefined) {
    if (v == null) {
      this.removeAttribute('min-rule-thickness');
    } else {
      this.setAttribute('min-rule-thickness', String(v));
    }
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(document.importNode(template.content, true));
    if (supportsAdoptingStyleSheets) {
      shadowRoot.adoptedStyleSheets = [getStyleSheet()];
    }
    this._container = shadowRoot.querySelector('#container') as HTMLDivElement;
    this._slot = shadowRoot.querySelector('slot')!;
    this._slot.addEventListener('slotchange', () => this._render());
    this._styleTag = shadowRoot.querySelector('style')!;
  }
  
  attributeChangedCallback(_name: string) {
    this._render();
  }

  private _render() {
    const hostRule = this._styleTag.sheet!.cssRules[0] as CSSStyleRule;
    hostRule.style.display = this.displayMode ? 'block' : 'inline-block';
    const inputText = this._slot.assignedNodes({flatten: true}).map((n) => n.textContent).join('');
    katex.render(inputText, this._container, {displayMode: this.displayMode});
  }
}
customElements.define('katex-expr', KatexExprElement);
