// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from "./style-fixed-css.js";
import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-sm_es6.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * HTML custom element for the use of drawing attention to additional interface information
 *
 * @attr {Boolean} target - Enables the close functionality
 * @attr {Boolean} error - Enables error ui
 * @attr {Boolean} success - Enables success ui
 * @attr {Boolean} advisory - Enables advisory ui
 * @attr {Boolean} space - Adds default spacing spec to badges
 * @attr {Boolean} pill - Enables pill ui option
 * @attr {Boolean} label - Enables label ui option
 * @attr {Boolean} fixed - Uses px values instead of rem
 * @attr {Boolean} disabled - If set to true button will become disabled and not allow for interactions
 */

// build the component class
export class AuroBadge extends LitElement {
  constructor() {
    super();

    /**
     * @private internal variable
     */
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private internal variable
     */
    this.svg = this.dom.body.firstChild;

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

      /**
       * @private
       */
      value: {
        type: String
      },
    };
  }

  /**
   * @private Fires a custom event and removes the element from the DOM if target is true
   * @param {*} event interaction event from Badge
   * @returns {void}
   */
  handleChange(event) {
    if (this.target) {
      const customEvent = new CustomEvent(event.type, event);

      this.dispatchEvent(customEvent);
      this.remove();
    }
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
      styleCssFixed
    ]
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${this.target
        ? html`<button
                @click=${this.handleChange}
                ?disabled="${this.disabled}"
                .value="${this.value}"
                class="target">
          <slot></slot>${this.svg}
          <span class="util_displayHiddenVisually">Dismiss</span>
        </button>`
        : html`<slot></slot>`
      }
    `;
  }
}
