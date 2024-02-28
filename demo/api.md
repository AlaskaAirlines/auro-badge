<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->
# auro-badge

HTML custom element for the use of drawing attention to additional interface information

## Attributes

| Attribute  | Type      | Description                                      |
|------------|-----------|--------------------------------------------------|
| `advisory` | `Boolean` | Enables advisory UI                              |
| `emerald`  | `Boolean` | Sets the background color of the badge to the oneworld emerald color |
| `error`    | `Boolean` | Enables error UI                                 |
| `label`    | `Boolean` | Enables label UI option                          |
| `pill`     | `Boolean` | Enables pill UI option                           |
| `ruby`     | `Boolean` | Sets the background color of the badge to the oneworld ruby color |
| `sapphire` | `Boolean` | Sets the background color of the badge to the oneworld sapphire color |
| `space`    | `Boolean` | Adds default spacing spec to badges              |
| `success`  | `Boolean` | Enables success UI                               |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | false   | If set to true button will become disabled and not allow for interactions |
| `target`   | `target`   | `Boolean` | false   | Enables the close functionality                  |
<!-- AURO-GENERATED-CONTENT:END -->

## Badge API Examples

### `error`

Use the `error` attribute for a pre-defined use of color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-badge error>Nonstop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error.html -->
```html
<auro-badge error>Nonstop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### `success`

Use the `success` attribute for a pre-defined use of color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/success.html -->
  <auro-badge success>1 stop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/success.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/success.html -->
```html
<auro-badge success>1 stop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### `advisory`

Use the `advisory` attribute for a pre-defined use of color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/advisory.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/advisory.html -->
  <auro-badge advisory>2+ stops</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/advisory.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/advisory.html -->
```html
<auro-badge advisory>2+ stops</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### `emerald`

Use the `emerald` attribute for a pre-defined use of color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/emerald.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/emerald.html -->
  <auro-badge emerald><b>one</b>world Emerald</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/emerald.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/emerald.html -->
```html
<auro-badge emerald><b>one</b>world Emerald</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### `ruby`

Use the `ruby` attribute for a pre-defined use of color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/ruby.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/ruby.html -->
  <auro-badge ruby><b>one</b>world Ruby</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/ruby.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/ruby.html -->
```html
<auro-badge ruby><b>one</b>world Ruby</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### `sapphire`

Use the `sapphire` attribute for a pre-defined use of color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/sapphire.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/sapphire.html -->
  <auro-badge sapphire><b>one</b>world Sapphire</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/sapphire.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/sapphire.html -->
```html
<auro-badge sapphire><b>one</b>world Sapphire</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### `space`

Use the `space` attribute to allow for pre-defined spacing beteen badges.

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

### `disabled`

Use the `disabled` attribute to render any `<auro-badge>` with a innoperable UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabled.html -->
  <auro-badge disabled>1 stop</auro-badge>
  <auro-badge success disabled>1 stop</auro-badge>
  <auro-badge error disabled>1 stop</auro-badge>
  <auro-badge advisory disabled>1 stop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabled.html -->
```html
<auro-badge disabled>1 stop</auro-badge>
<auro-badge success disabled>1 stop</auro-badge>
<auro-badge error disabled>1 stop</auro-badge>
<auro-badge advisory disabled>1 stop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### `target`

Use the `target` property to aply the clickable feature.

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

### `pill`

Use the `pill` attribute to render a small 'pill size' UI.

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
