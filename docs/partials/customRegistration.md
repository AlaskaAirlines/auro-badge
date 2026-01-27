```js
// Import the class only
import { AuroBadge } from '@aurodesignsystem/auro-badge/class';

// Register with a custom name if desired
AuroBadge.register('custom-badge');
```

This will create a new custom element `<custom-badge>` that behaves exactly like `<auro-badge>`, allowing both to coexist on the same page without interfering with each other.
