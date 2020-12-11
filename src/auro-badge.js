// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-lg_es6.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-badge provides users a way to ...
 *
 * @attr {Boolean} target - Enables the close functionality.
 */

// build the component class
class AuroBadge extends LitElement {
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
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      target: {type: Boolean},
    };
  }

  /**
   * Fires a custom event and removes the element from the DOM if target is true
   *
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

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="badge" role="button">
        <slot></slot>
        ${this.target ? html`
          <button @click=${this.handleChange}>
            ${this.svg}
          </button>
        ` : html`
        `}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-badge")) {
  customElements.define("auro-badge", AuroBadge);
}
