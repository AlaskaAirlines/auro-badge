import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-badge.js';

describe('auro-badge', () => {
  it('auro-badge is accessible', async () => {
    const el = await fixture(html`
      <auro-badge cssclass="testClass">asdf</auro-badge>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-badge custom element is defined', async () => {
    const el = await !!customElements.get("auro-badge");

    await expect(el).to.be.true;
  });
  /*it('auro-badge has an action', async () => {
    const el = await fixture(html`
      <auro-badge cssclass="testClass" action>asdf</auro-badge>
    `);
    const root = el.shadowRoot;
    document.querySelector('auro-badge').click();
    await expect(root).to.not.exist;
  });*/
});
