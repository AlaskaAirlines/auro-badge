// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
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
 * HTML custom element for the use of drawing attention to additional interface information.
 *
 * @attr {Boolean} target - Enables the close functionality
 * @attr {Boolean} ondark - Enables styles for dark backgrounds
 * @attr {Boolean} space - Adds default spacing spec to badges
 * @attr {Boolean} pill - Enables pill UI option
 * @attr {Boolean} label - Enables label UI option
 * @attr {Boolean} disabled - If set to true button will become disabled and not allow for interactions
 * @attr {String} variant - Sets the color UI of the badge
 *  Possible Values:
 *    - `accent1`, `accent2`, `accent3`, `accent4`, `bronze`, `cobalt`, `copper`, `gold`, `nickel`, `platinum`, `silver`, `titanium`, `transparent`, `info`, `error`, `success`, `warning`, `emerald`, `sapphire`, `ruby`, `lounge`, `loungeplus`
 *  Deprecated Values:
 *    - `mvp`, `mvpgold`, `mvpgold75k`
 */

// build the component class
export class AuroBadge extends LitElement {
  constructor() {
    super();

    /**
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

    this.target = false;
    this.disabled = false;
    this.label = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      target: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
      label: {
        type: Boolean,
        reflect: true,
      },
      icon: {
        type: Boolean,
        reflect: true,
      },

      /**
       * @private
       */
      value: {
        type: String,
      },
    };
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-badge"] - The name of element that you want to register to.
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
    const [slotContent] = this.shadowRoot.querySelector("slot").assignedNodes();

    if (slotContent.tagName === "AURO-ICON") {
      this.icon = true;
    } else {
      this.icon = false;
    }
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
          shape="pill"
          @click=${this.handleChange}
          ?disabled="${this.disabled}"
          ?onDark="${this.hasAttribute("ondark")}"
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
