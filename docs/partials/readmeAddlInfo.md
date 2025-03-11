<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-badge` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroBadge.register('name')` method and pass in a unique name.

```js
import { AuroBadge } from '@aurodesignsystem/auro-badge';
AuroBadge.register('custom-badge');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-badge` element.

<div class="exampleWrapper">
  <custom-badge type="warning">Salutations World!</custom-badge>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <custom-badge type="warning">Salutations World!</custom-badge>
  ```
  
</auro-accordion>
