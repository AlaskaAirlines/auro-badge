import { AuroBadge } from './src/auro-badge.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroBadge {});
  }
}

// Example custom registration
// registerComponent('my-badge');
