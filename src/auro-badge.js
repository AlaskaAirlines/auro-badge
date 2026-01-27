// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroButton } from "@aurodesignsystem/auro-button/class";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import buttonVersion from "./buttonVersion.js";
import iconVersion from "./iconVersion.js";
import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The `auro-badge` element is for the use of drawing attention to additional interface information.
 * @customElement auro-badge
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
       * Defines whether the component will be on lighter or darker backgrounds.
       * @type {'default' | 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true
      },

      /**
       * If set to true button will become disabled and not allow for interactions.
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Enables label UI option.
       */
      label: {
        type: Boolean,
        reflect: true
      },

      /**
       * Enables pill UI option.
       */
      pill: {
        type: Boolean,
        reflect: true
      },


      /**
       * DEPRECATED - use `appearance` instead.
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
       * Adds functionality to the badge that displays a "target" icon, which dismisses the badge when clicked.
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
       * Defines the color variant of the badge.
       * @type {'accent1' | 'accent2' | 'accent3' | 'accent4' | 'bronze' | 'cobalt' | 'copper' | 'gold' | 'nickel' | 'platinum' | 'silver' | 'titanium' | 'transparent' | 'info' | 'error' | 'success' | 'warning' | 'emerald' | 'sapphire' | 'ruby' | 'lounge' | 'loungeplus' | 'fare-saver' | 'fare-economy' | 'fare-premium' | 'fare-business' | 'fare-first'}
       */
      variant: {
        type: String,
        reflect: true
      }
    };
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-badge"] - The name of the element that you want to register.
   *
   * @example
   * AuroBadge.register("custom-badge") // this will register this element to <custom-badge/>
   *
   */
  static register(name = "auro-badge") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroBadge);
  }

  /**
   * Fires a custom event and removes the element from the DOM if target is true.
   * @private
   * @param {*} event - Event interaction event from Badge.
   */
  handleChange(event) {
    if (this.target) {
      const customEvent = new CustomEvent(event.type, event);

      this.dispatchEvent(customEvent);
      this.remove();
    }
  }

  /**
   * On slot content change, checks for auro-icon and applies attribute to component for adjusted styling.
   * @private
   * @returns {void}
   */
  handleContentSlotChanges() {
    const slotContents = this.shadowRoot.querySelector("slot").assignedNodes();
    this.icon = slotContents.some(
      (slotContent) => slotContent.tagName === "AURO-ICON",
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
          : html`<div class="${this.label ? "body-xs" : ""}">
          <slot @slotchange="${this.handleContentSlotChanges}"></slot>
        </div>`
      }
    `;
  }
}
