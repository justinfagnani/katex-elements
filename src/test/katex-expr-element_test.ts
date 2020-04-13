import {KatexExprElement} from '../katex-expr-element.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('katex-expr', () => {

  test('is defined', () => {
    const el = document.createElement('katex-expr');
    assert.instanceOf(el, KatexExprElement);
  });

  test('empty element', async () => {
    const el = await fixture(html`<katex-expr></katex-expr>`);
    // wait for slotchange to fire
    await 0;
    assert.shadowDom.equalSnapshot(el);
  });

  test('quadratic equation', async () => {
    const el = await fixture(html`<katex-expr>c = \pm\sqrt{a^2 + b^2}</katex-expr>`);
    // wait for slotchange to fire
    await 0;
    assert.shadowDom.equalSnapshot(el);
  });

  test('change text content', async () => {
    const el = await fixture(html`<katex-expr>c = \pm\sqrt{a^2 + b^2}</katex-expr>`);
    assert.shadowDom.equalSnapshot(el);
    el.textContent = 'x = 4';
    // wait for slotchange to fire
    await 0;
    assert.shadowDom.equalSnapshot(el);
  });

});
