import {KatexInline} from './katex-inline.js';

export class KatexDisplay extends KatexInline {

  get _displayMode() { return true; }

}
customElements.define('katex-display', KatexDisplay);
