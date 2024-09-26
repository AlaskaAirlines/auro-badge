// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-sm.mjs';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * HTML custom element for the use of drawing attention to additional interface information.
 *
 * @attr {Boolean} target - Enables the close functionality
 * @attr {Boolean} ondark - Enables styles for dark backgrounds
 * @attr {Boolean} error - Enables error UI
 * @attr {Boolean} success - Enables success UI
 * @attr {Boolean} advisory - Enables advisory UI
 * @attr {Boolean} space - Adds default spacing spec to badges
 * @attr {Boolean} pill - Enables pill UI option
 * @attr {Boolean} label - Enables label UI option
 * @attr {Boolean} disabled - If set to true button will become disabled and not allow for interactions
 * @attr {Boolean} emerald - Sets the background color of the badge to the oneworld emerald color
 * @attr {Boolean} sapphire - Sets the background color of the badge to the oneworld sapphire color
 * @attr {Boolean} ruby - Sets the background color of the badge to the oneworld ruby color
 * @attr {Boolean} lounge - Sets the background color of the badge to the oneworld lounge color
 * @attr {Boolean} loungeplus - Sets the background color of the badge to the oneworld loungeplus color
 * @attr {Boolean} mvp - Sets the background color of the badge to the oneworld mvp color
 * @attr {Boolean} mvpgold - Sets the background color of the badge to the oneworld mvpgold color
 * @attr {Boolean} mvpgold75k - Sets the background color of the badge to the oneworld mvpgold75k color
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
    this.buttonTag = versioning.generateTag('auro-button', buttonVersion, AuroButton);

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    this.target = false;
    this.disabled = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      target: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      icon: {
        type: Boolean,
        reflect: true
      },

      /**
       * @private
       */
      value: {
        type: String
      },
    };
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
    const [slotContent] = this.shadowRoot.querySelector('slot').assignedNodes();

    if (slotContent.tagName === 'AURO-ICON') {
      this.icon = true;
    } else {
      this.icon = false;
    }
  }

  /**
   * Generates an HTML element containing an SVG icon based on the provided `svgContent`.
   *
   * @private
   * @param {string} svgContent - The SVG content to be embedded.
   * @returns {Element} The HTML element containing the SVG icon.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html');
    const svg = dom.body.firstChild;

    svg.setAttribute('slot', 'svg');

    const iconHtml = html`<${this.iconTag} customColor customSize customSvg slot="icon">${svg}</${this.iconTag}>`;

    return iconHtml;
  }

  connectedCallback() {
    super.connectedCallback();
    this.runtimeUtils.handleComponentTagRename(this, 'auro-badge');
  }

  firstUpdated() {
    // Finds slotted content and adds string to button value
    if (this.target) {
      const [targetElement] = this.shadowRoot.querySelector('slot').assignedNodes();

      this.value = targetElement.textContent;
    }
  }

  static get styles() {
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${this.target
        ? html`
        <${this.buttonTag}
          rounded
          @click=${this.handleChange}
          ?disabled="${this.disabled}"
          ?onDark="${this.hasAttribute('ondark')}"
          .value="${this.value}"
          class="target"
          id="targetButton">
          <slot @slotchange="${this.handleContentSlotChanges}"></slot>
          ${this.generateIconHtml(closeIcon.svg)}
          <span class="util_displayHiddenVisually">Dismiss</span>
        </${this.buttonTag}>`
        : html`<slot @slotchange="${this.handleContentSlotChanges}"></slot>`
      }
    `;
  }
}

// default internal definition
if (!customElements.get("auro-badge")) {
  customElements.define("auro-badge", AuroBadge);
}
