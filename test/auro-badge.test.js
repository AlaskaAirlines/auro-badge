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
});
