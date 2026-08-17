import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-badge", () => {
  it("auro-badge is accessible", async () => {
    const el = await fixture(html`
      <auro-badge>click me</auro-badge>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-badge custom element is defined", async () => {
    const el = await !!customElements.get("auro-badge");

    await expect(el).to.be.true;
  });

  it("auro-badge is NOT a button", async () => {
    const el = await fixture(html`
      <auro-badge>click me not</auro-badge>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    await expect(button).to.be.null;
  });

  it("auro-badge applies the body-default type class by default", async () => {
    const el = await fixture(html`
      <auro-badge>default</auro-badge>
    `);

    const wrapper = el.shadowRoot.querySelector("div");

    await expect(wrapper.classList.contains("body-default")).to.be.true;
  });

  it("auro-badge applies the body-xs type class when label", async () => {
    const el = await fixture(html`
      <auro-badge label>label</auro-badge>
    `);

    const wrapper = el.shadowRoot.querySelector("div");

    await expect(wrapper.classList.contains("body-xs")).to.be.true;
  });

  it("auro-badge applies the iconOnly class and no text type class when only an icon is slotted", async () => {
    const el = await fixture(html`
      <auro-badge icon><auro-icon category="interface" name="x-sm"></auro-icon></auro-badge>
    `);

    const wrapper = el.shadowRoot.querySelector("div");

    await expect(wrapper.classList.contains("iconOnly")).to.be.true;
    await expect(wrapper.classList.contains("body-default")).to.be.false;
    await expect(wrapper.classList.contains("body-xs")).to.be.false;
  });

  it("auro-badge applies a text type class (not iconOnly) when both an icon and text are slotted", async () => {
    // Guards the mixed-content branch of the hasText slot introspection: a text
    // node alongside an auro-icon must set hasText true, so the wrapper sizes as
    // text (body-default) and never collapses to iconOnly.
    const el = await fixture(html`
      <auro-badge icon><auro-icon category="interface" name="x-sm"></auro-icon>5</auro-badge>
    `);

    const wrapper = el.shadowRoot.querySelector("div");

    await expect(wrapper.classList.contains("body-default")).to.be.true;
    await expect(wrapper.classList.contains("iconOnly")).to.be.false;
    await expect(wrapper.classList.contains("body-xs")).to.be.false;
  });

  it("auro-badge gives icon-only badges 4px vertical padding to preserve height (AB#1461919)", async () => {
    // Guards the intentional .iconOnly padding retune: switching text badges to
    // typography tokens changed line-height, so icon-only badges get explicit
    // 4px (--ds-size-50) top/bottom padding to keep their sizing correct.
    const el = await fixture(html`
      <auro-badge icon><auro-icon category="interface" name="x-sm"></auro-icon></auro-badge>
    `);

    const wrapper = el.shadowRoot.querySelector("div");
    const styles = getComputedStyle(wrapper);

    await expect(styles.paddingTop).to.equal("4px");
    await expect(styles.paddingBottom).to.equal("4px");
  });

  it("auro-badge centers its text with a collapsed line-height so mobile spacing stays symmetric", async () => {
    // Guards AB#1547903: the text wrapper must flex-center its content and
    // collapse the typography leading (line-height 1 / 16px, not 24px) so Chrome
    // for Android cannot pool the extra leading below the glyph.
    const el = await fixture(html`
      <auro-badge>default</auro-badge>
    `);

    const wrapper = el.shadowRoot.querySelector("div");
    const styles = getComputedStyle(wrapper);

    await expect(styles.display).to.equal("flex");
    await expect(styles.alignItems).to.equal("center");
    await expect(styles.lineHeight).to.equal("16px");
  });

  it("auro-badge has an action that closes the badge", async () => {
    const el = await fixture(html`
      <auro-badge target>click me</auro-badge>
    `);

    const root = el.shadowRoot;
    root.getElementById("targetButton").click();
    setTimeout(() => expect(root).to.be.equal(undefined), 3000);
  });

  it("auro-badge locks the target badge button height to --ds-size-500 (AB#1311533)", async () => {
    // Guards the :host([target]) ::part(button) sizing rule that matches a target
    // badge's height (40px / --ds-size-500, padding 0) to a standard badge.
    const el = await fixture(html`
      <auro-badge target>close me</auro-badge>
    `);

    const targetButton = el.shadowRoot.getElementById("targetButton");
    await targetButton.updateComplete;

    const partButton = targetButton.shadowRoot.querySelector('[part~="button"]');
    const styles = getComputedStyle(partButton);

    await expect(styles.minHeight).to.equal("40px");
    await expect(styles.maxHeight).to.equal("40px");
    await expect(styles.paddingTop).to.equal("0px");
    await expect(styles.paddingBottom).to.equal("0px");
  });
});
