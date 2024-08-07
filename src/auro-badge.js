// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html } from "lit";
import styleCss from "./style-css.js";
import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-sm.mjs';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * HTML custom element for the use of drawing attention to additional interface information
 *
 * @attr {Boolean} target - Enables the close functionality
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
     * @private internal variable
     */
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private internal variable
     */
    this.svg = this.dom.body.firstChild;

    /**
     * @private internal variable
     */
    this.icon = false;

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

  /**
  * @private On slot content change, checks for auro-icon and applies attribute to component for adjusted styling
  * @returns {void}
  */
  handleContentSlotChanges() {
    const [slotContent] = this.shadowRoot.querySelector('slot').assignedNodes();

    if (slotContent.tagName === 'AURO-ICON') {
      this.icon = true;
    } else {
      this.icon = false
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
    return [styleCss]
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
          <slot @slotchange="${this.handleContentSlotChanges}"></slot>${this.svg}
          <span class="util_displayHiddenVisually">Dismiss</span>
        </button>`
        : html`<slot @slotchange="${this.handleContentSlotChanges}"></slot>`
      }
    `;
  }
}

// default internal definition
if (!customElements.get("auro-badge")) {
  customElements.define("auro-badge", AuroBadge);
}
