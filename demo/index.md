<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# badge

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
HTML custom element for the use of drawing attention to additional interface information.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-badge use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `auro-badge` use cases include:

* Additional information to draw attention to a specific area of the interface
* Advising the user of a specific action or status
<!-- AURO-GENERATED-CONTENT:END -->

## Default component

Default non-actionable badge element to display data.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-badge>Nonstop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-badge>Nonstop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### On dark option

Use the `ondark` attribute to render colors appropiatre for darker backgrounds.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/onDark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/onDark.html -->
  <auro-badge ondark>Nonstop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/onDark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/onDark.html -->

```html
<auro-badge ondark>Nonstop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Element with target property

Use the `target` property to convert the badge to a functional button. This this property will convert the badge to a clickable button element and the value of the button will be copied to the element's `value` attribute and a custom event will be fired when clicked.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/target.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/target.html -->
  <auro-badge target>Nonstop</auro-badge>
  <auro-badge target disabled>1 stop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/target.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/target.html -->

```html
<auro-badge target>Nonstop</auro-badge>
<auro-badge target disabled>1 stop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Elements with spacing attribute

Use the `space` attribute to allow for default spacing between elements.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/space.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/space.html -->
  <auro-badge space>Nonstop</auro-badge>
  <auro-badge space>1 stop</auro-badge>
  <auro-badge space>2+ stops</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/space.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/space.html -->

```html
<auro-badge space>Nonstop</auro-badge>
<auro-badge space>1 stop</auro-badge>
<auro-badge space>2+ stops</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Alert color options

Use the `error`, `success`, or `advisory` attributes for alternate alert experiences.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/color.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/color.html -->
  <auro-badge error>Nonstop</auro-badge>
  <auro-badge success>1 stop</auro-badge>
  <auro-badge advisory>2+ stops</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/color.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/color.html -->

```html
<auro-badge error>Nonstop</auro-badge>
<auro-badge success>1 stop</auro-badge>
<auro-badge advisory>2+ stops</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### On dark option

Use the `ondark` attribute to render colors appropiatre for darker backgrounds.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/color-onDark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/color-onDark.html -->
  <auro-badge ondark error>Nonstop</auro-badge>
  <auro-badge ondark success>1 stop</auro-badge>
  <auro-badge ondark advisory>2+ stops</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/color-onDark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/color-onDark.html -->

```html
<auro-badge ondark error>Nonstop</auro-badge>
<auro-badge ondark success>1 stop</auro-badge>
<auro-badge ondark advisory>2+ stops</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Label option

Use the `label` attribute for a text label experience. The last example illustrates a customized version.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/label.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/label.html -->
  <auro-badge label error>Danger</auro-badge>
  <auro-badge label success>Success</auro-badge>
  <auro-badge label advisory>Advisory</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/label.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/label.html -->

```html
<auro-badge label error>Danger</auro-badge>
<auro-badge label success>Success</auro-badge>
<auro-badge label advisory>Advisory</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Icons

To use icons in your badges, it is preferred that this is added as contnet within the `<slot>` of the `<auro-badge>` element. In most cases is is preferred to to use the Auro Icons repo and include the icon as part of the bundle. This example illustrates this option using the `<auro-icon>` element. Be aware that the `<auro-icon>` element uses a CDN to render the SVG. Consider this when building app critical UIs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/icon.html -->
  <auro-badge><auro-icon ondark emphasis category="health" name="air"></auro-icon>Air</auro-badge>
  <auro-badge><auro-icon ondark emphasis category="health" name="covid-test"></auro-icon>Covid test</auro-badge>
  <auro-badge><auro-icon ondark emphasis category="health" name="health"></auro-icon>Health</auro-badge>
  <auro-badge><auro-icon ondark emphasis category="health" name="mask"></auro-icon>Mask</auro-badge>
  <auro-badge><auro-icon ondark emphasis category="health" name="spraybottle"></auro-icon>Spray bottle</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/icon.html -->

```html
<auro-badge><auro-icon ondark emphasis category="health" name="air"></auro-icon>Air</auro-badge>
<auro-badge><auro-icon ondark emphasis category="health" name="covid-test"></auro-icon>Covid test</auro-badge>
<auro-badge><auro-icon ondark emphasis category="health" name="health"></auro-icon>Health</auro-badge>
<auro-badge><auro-icon ondark emphasis category="health" name="mask"></auro-icon>Mask</auro-badge>
<auro-badge><auro-icon ondark emphasis category="health" name="spraybottle"></auro-icon>Spray bottle</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Pill option

Use the `pill` property in combination with `error`, `success`, or `advisory` attributes for alternate badge experiences. The last example illustrates a customized version.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/pill.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/pill.html -->
  <auro-badge pill>12</auro-badge>
  <auro-badge error pill>Danger</auro-badge>
  <auro-badge success pill>Flight 167</auro-badge>
  <auro-badge advisory pill>99</auro-badge>
  <auro-badge pill style="color: var(--auro-color-text-primary-on-light); background-color: var(--auro-color-brand-tropical-300); border-color: var(--auro-color-brand-tropical-300)">Flight 99</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/pill.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/pill.html -->

```html
<auro-badge pill>12</auro-badge>
<auro-badge error pill>Danger</auro-badge>
<auro-badge success pill>Flight 167</auro-badge>
<auro-badge advisory pill>99</auro-badge>
<auro-badge pill style="color: var(--auro-color-text-primary-on-light); background-color: var(--auro-color-brand-tropical-300); border-color: var(--auro-color-brand-tropical-300)">Flight 99</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Pill with Icons

Use `icon` attribute to include icons inside your badge.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/pillWithIcons.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/pillWithIcons.html -->
  <div class="exampleWrapper" style="display: inline-flex; gap: 0.25rem; flex-wrap: wrap">
    <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="air"></auro-icon>Air</auro-badge>
    <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="covid-test"></auro-icon>Covid test</auro-badge>
    <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="health"></auro-icon>Health</auro-badge>
    <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="mask"></auro-icon>Mask</auro-badge>
    <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="spraybottle"></auro-icon>Spray bottle</auro-badge>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/pillWithIcons.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/pillWithIcons.html -->

```html
<div class="exampleWrapper" style="display: inline-flex; gap: 0.25rem; flex-wrap: wrap">
  <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="air"></auro-icon>Air</auro-badge>
  <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="covid-test"></auro-icon>Covid test</auro-badge>
  <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="health"></auro-icon>Health</auro-badge>
  <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="mask"></auro-icon>Mask</auro-badge>
  <auro-badge pill><auro-icon ondark customSize emphasis category="health" name="spraybottle"></auro-icon>Spray bottle</auro-badge>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Brand programs

Use the `emerald`, `sapphire`, or `ruby` attributes for oneworld badges.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/brand.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/brand.html -->
  <auro-badge pill emerald><b>one</b>world Emerald</auro-badge>
  <auro-badge pill sapphire><b>one</b>world Sapphire</auro-badge>
  <auro-badge pill ruby><b>one</b>world Ruby</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/brand.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/brand.html -->

```html
<auro-badge pill emerald><b>one</b>world Emerald</auro-badge>
<auro-badge pill sapphire><b>one</b>world Sapphire</auro-badge>
<auro-badge pill ruby><b>one</b>world Ruby</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Tier programs

Use the `lounge`, `loungeplus`, `mvp`, `mvpgold` or `mvpgold75k` attributes for tier badges.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/tier.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/tier.html -->
  <auro-badge pill lounge>Lounge</auro-badge>
  <auro-badge pill loungeplus>Lounge+</auro-badge>
  <auro-badge pill mvp>MVP</auro-badge>
  <auro-badge pill mvpgold>MVP Gold</auro-badge>
  <auro-badge pill mvpgold75k>MVP Gold 75k</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/tier.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/tier.html -->

```html
<auro-badge pill lounge>Lounge</auro-badge>
<auro-badge pill loungeplus>Lounge+</auro-badge>
<auro-badge pill mvp>MVP</auro-badge>
<auro-badge pill mvpgold>MVP Gold</auro-badge>
<auro-badge pill mvpgold75k>MVP Gold 75k</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-badge` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import { AuroBadge } from './src/auro-badge.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-badge', AuroBadge);
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-badge` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-badge type="warning">Salutations World!</custom-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-badge type="warning">Salutations World!</custom-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
