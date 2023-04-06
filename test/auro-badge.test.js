import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../index.js';

describe('auro-badge', () => {
  it('auro-badge is accessible', async () => {
    const el = await fixture(html`
      <auro-badge>click me</auro-badge>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-badge custom element is defined', async () => {
    const el = await !!customElements.get("auro-badge");

    await expect(el).to.be.true;
  });

  it('auro-badge is NOT a button', async () => {
    const el = await fixture(html`
      <auro-badge>click me not</auro-badge>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button')

    await expect(button).to.be.null;
  });

  it('auro-badge has an action that closes the badge', async () => {
    const el = await fixture(html`
      <auro-badge target>click me</auro-badge>
    `);

    const root = el.shadowRoot;
    root.querySelector('button').click();
    setTimeout(() =>  expect(root).to.be.equal(undefined), 3000);
  });
});
