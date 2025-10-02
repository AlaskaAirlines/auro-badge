<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Badge

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-badge use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Default component

Default non-actionable badge element to display data.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Visual state on dark backgrounds

Use the `appearance="inverse"` attribute to render colors appropriate for darker backgrounds.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inverseAppearance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inverseAppearance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Element with target property

Use the `target` property to convert the badge to a functional button. This this property will convert the badge to a clickable button element and the value of the button will be copied to the element's `value` attribute and a custom event will be fired when clicked.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/target.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/target.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Elements with spacing attribute

Use the `space` attribute to allow for default spacing between elements.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/space.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/space.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Label option

Use the `label` attribute for a text label experience.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/label.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Icons

To use icons in your badges, it is preferred that this is added as contnet within the `<slot>` of the `<auro-badge>` element. In most cases is is preferred to to use the Auro Icons repo and include the icon as part of the bundle. This example illustrates this option using the `<auro-icon>` element. Be aware that the `<auro-icon>` element uses a CDN to render the SVG. Consider this when building app critical UIs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/icon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Pill option

Use the `pill` property in combination with the `error`, `success`, or `advisory` variants for alternate badge experiences. The last example illustrates a customized version.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pill.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pill.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Pill with Icons

Use `icon` attribute to include icons inside your badge.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pillWithIcons.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pillWithIcons.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-badge` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroBadge.register(name)` method and pass in a unique name.

```js
import { AuroBadge } from '@aurodesignsystem/auro-badge/class';

AuroBadge.register('custom-badge');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-badge` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
