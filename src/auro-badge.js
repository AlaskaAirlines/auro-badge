// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroButton } from "@aurodesignsystem/auro-button/class";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import { classMap } from "lit/directives/class-map.js";
import buttonVersion from "./buttonVersion.js";
import iconVersion from "./iconVersion.js";
import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Draws attention to a short piece of information, such as a status, a count, or a loyalty tier.
 *
 * **Key capabilities**
 * - **Color variants**: Set `variant` to color the badge for a status, such as `error`, or a tier, such as `gold`.
 * - **Dark backgrounds**: Set `appearance="inverse"` to use colors made for dark backgrounds.
 * - **Rounded shapes**: Set `pill` or `label` for a badge with fully rounded ends.
 * - **Dismissible**: Set `target` to turn the badge into a button that removes it when clicked.
 *
 * @example
 * <auro-badge variant="success">Nonstop</auro-badge>
 * @summary A small label that highlights a status, count, or tier, with color variants and an optional dismiss button.
 * @customElement auro-badge
 * @slot - The badge's content, such as short text, an `<auro-icon>`, or both. For a badge that shows only an icon, describe the icon with text in the icon's default slot.
 * @cssprop --ds-auro-badge-border-color - Border color of the badge. Badges with `target` don't show a border.
 * @cssprop --ds-auro-badge-boxshadow-color - Color of the ring drawn around the dismiss button of a badge with `target` when it has keyboard focus. Transparent by default.
 * @cssprop --ds-auro-badge-container-color - Background color of the badge.
 * @cssprop --ds-auro-badge-text-color - Color of the badge's text.
 */
export class AuroBadge extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.target = false;
    this.disabled = false;
    this.label = false;
    this.appearance = "default";

    /*
     * @private
     */
    this.icon = false;

    /*
     * @private
     */
    this.hasText = true;

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag(
      "auro-button",
      buttonVersion,
      AuroButton,
    );

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component.
  static get properties() {
    return {
      /**
       * Sets the badge's colors for the background it sits on. Use `inverse` on dark backgrounds.
       * @type {'default' | 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true
      },

      /**
       * Shows the badge in a muted style. When `target` is set, also turns off the dismiss button, so it can't be clicked or reached with the keyboard.
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Shows the badge with fully rounded ends and smaller text.
       */
      label: {
        type: Boolean,
        reflect: true
      },

      /**
       * Shows the badge with fully rounded ends and less vertical padding.
       */
      pill: {
        type: Boolean,
        reflect: true
      },


      /**
       * Deprecated: Use `appearance="inverse"` instead.
       * Shows the badge in colors for dark backgrounds.
       * @deprecated Use `appearance="inverse"` instead.
       */
      onDark: {
        type: Boolean,
        reflect: true,
        deprecated: true
      },


      /**
       * Adds default spacing to the left of badges.
       */
      space: {
        type: Boolean,
        reflect: true
      },

      /**
       * Turns the badge into a button with an x icon that removes the badge from the page when clicked. Screen readers announce the badge's text followed by "Dismiss".
       */
      target: {
        type: Boolean,
        reflect: true
      },

      /**
       * @private
       */
      value: {
        type: String
      },

      /**
       * @private
       */
      hasText: {
        type: Boolean,
        state: true
      },

      /**
       * Sets the badge's color to match what it shows. Use a status (`info`, `error`, `success`, or `warning`), a fare class (values starting with `fare-`), a loyalty, oneworld, or lounge tier (such as `gold`, `emerald`, or `lounge`), or an accent (`accent1`–`accent4`). Use `transparent` for a semi-transparent background, or `transparent-inverse` for one on dark backgrounds.
       * @type {'accent1' | 'accent2' | 'accent3' | 'accent4' | 'bronze' | 'cobalt' | 'copper' | 'gold' | 'nickel' | 'platinum' | 'silver' | 'titanium' | 'transparent' | 'transparent-inverse' | 'info' | 'error' | 'success' | 'warning' | 'emerald' | 'sapphire' | 'ruby' | 'lounge' | 'loungeplus' | 'fare-saver' | 'fare-economy' | 'fare-premium' | 'fare-business' | 'fare-first'}
       */
      variant: {
        type: String,
        reflect: true
      }
    };
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-badge"] - The tag name to register the element under.
   *
   * @example
   * AuroBadge.register("custom-badge") // registers the element as <custom-badge>
   *
   */
  static register(name = "auro-badge") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroBadge);
  }

  /**
   * Called when the dismiss button is clicked. Fires a copy of the click event from the badge, then removes the badge from the page.
   * @private
   * @param {*} event - The click event from the dismiss button.
   */
  handleChange(event) {
    if (this.target) {
      const customEvent = new CustomEvent(event.type, event);

      this.dispatchEvent(customEvent);
      this.remove();
    }
  }

  /**
   * Called when the slot content changes. Sets `icon` to whether the slot holds an `<auro-icon>`, and sets `hasText`, which picks text or icon-only sizing.
   * Setting `icon` doesn't currently add an `icon` attribute, so the `:host([icon])` styles don't apply.
   * @private
   * @returns {void}
   */
  handleContentSlotChanges() {
    const slotContents = this.shadowRoot.querySelector("slot").assignedNodes();
    this.icon = slotContents.some(
      (slotContent) => slotContent.tagName === "AURO-ICON",
    );
    this.hasText = slotContents.some(
      (slotContent) =>
        (slotContent.nodeType === Node.TEXT_NODE &&
          slotContent.textContent.trim().length > 0) ||
        (slotContent.nodeType === Node.ELEMENT_NODE &&
          slotContent.tagName !== "AURO-ICON"),
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this.runtimeUtils.handleComponentTagRename(this, "auro-badge");
  }

  firstUpdated() {
    // Finds slotted content and adds string to button value
    if (this.target) {
      const [targetElement] = this.shadowRoot
        .querySelector("slot")
        .assignedNodes();

      this.value = targetElement.textContent;
    }
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const sizingClassMap = {
      "body-xs": this.hasText && this.label,
      "body-default": this.hasText && !this.label,
      "iconOnly": !this.hasText
    };

    return html`
      ${
        this.target
          ? html`
        <${this.buttonTag}
          appearance="${this.hasAttribute("ondark") ? "inverse" : this.appearance}"
          shape="pill"
          @click=${this.handleChange}
          ?disabled="${this.disabled}"
          .value="${this.value}"
          class="target"
          id="targetButton">
          <slot @slotchange="${this.handleContentSlotChanges}"></slot>
          <${this.iconTag} customColor category="interface" name="x-sm"></${this.iconTag}>
          <span class="util_displayHiddenVisually">Dismiss</span>
        </${this.buttonTag}>`
          : html`<div class="${classMap(sizingClassMap)}">
          <slot @slotchange="${this.handleContentSlotChanges}"></slot>
        </div>`
      }
    `;
  }
}
