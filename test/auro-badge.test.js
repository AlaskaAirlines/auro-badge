import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-badge.js';

describe('auro-badge', () => {
  it('sets the CSS class on auro-badge > div element', async () => {
    const el = await fixture(html`
      <auro-badge cssclass="testClass"></auro-badge>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-badge is accessible', async () => {
    const el = await fixture(html`
      <auro-badge cssclass="testClass"></auro-badge>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-badge custom element is defined', async () => {
    const el = await !!customElements.get("auro-badge");

    await expect(el).to.be.true;
  });
});
