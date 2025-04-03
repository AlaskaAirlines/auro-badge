
import { AuroBadge } from '../../src/auro-badge.js';

/**
 * HTML custom element for the use of drawing attention to additional interface information.
 */
class AuroBadgeWCA extends AuroBadge {}

if (!customElements.get("auro-badge")) {
  customElements.define("auro-badge", AuroBadgeWCA);
}
