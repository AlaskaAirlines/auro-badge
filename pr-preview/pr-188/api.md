<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-badge

The `auro-badge` element is for the use of drawing attention to additional interface information.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                                                                                                                                                                                                                                                                                                                                       | Default   | Description                                                                                            |
| ---------- | ---------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| appearance | appearance |           | `default` \| `inverse`                                                                                                                                                                                                                                                                                                                                                     | `default` | Defines whether the component will be on lighter or darker backgrounds.                                |
| disabled   | disabled   |           | boolean                                                                                                                                                                                                                                                                                                                                                                    |           | If set to true button will become disabled and not allow for interactions.                             |
| label      | label      |           | boolean                                                                                                                                                                                                                                                                                                                                                                    |           | Enables label UI option.                                                                               |
| onDark     | onDark     |           | boolean                                                                                                                                                                                                                                                                                                                                                                    |           | DEPRECATED - use `appearance` instead.                                                                 |
| pill       | pill       |           | boolean                                                                                                                                                                                                                                                                                                                                                                    |           | Enables pill UI option.                                                                                |
| space      | space      |           | boolean                                                                                                                                                                                                                                                                                                                                                                    |           | Adds default spacing to the left of badges.                                                            |
| target     | target     |           | boolean                                                                                                                                                                                                                                                                                                                                                                    |           | Adds functionality to the badge that displays a "target" icon, which dismisses the badge when clicked. |
| variant    | variant    |           | `accent1` \| `accent2` \| `accent3` \| `accent4` \| `bronze` \| `cobalt` \| `copper` \| `gold` \| `nickel` \| `platinum` \| `silver` \| `titanium` \| `transparent` \| `info` \| `error` \| `success` \| `warning` \| `emerald` \| `sapphire` \| `ruby` \| `lounge` \| `loungeplus` \| `fare-saver` \| `fare-economy` \| `fare-premium` \| `fare-business` \| `fare-first` |           | Defines the color variant of the badge.                                                                |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-badge>Nonstop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-badge>Nonstop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Appearance on Dark Backgrounds

Use the `appearance="inverse"` attribute to render colors appropriate for darker backgrounds.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inverse-appearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/inverse-appearance.html -->
  <auro-badge appearance="inverse">Nonstop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inverse-appearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inverse-appearance.html -->

```html
<auro-badge appearance="inverse">Nonstop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Use the `disabled` attribute to render any `<auro-badge>` with a inoperable UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabled.html -->
  <auro-badge disabled>1 stop</auro-badge>
  <auro-badge variant="success" disabled>1 stop</auro-badge>
  <auro-badge variant="error" disabled>1 stop</auro-badge>
  <auro-badge variant="warning" disabled>1 stop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled.html -->

```html
<auro-badge disabled>1 stop</auro-badge>
<auro-badge variant="success" disabled>1 stop</auro-badge>
<auro-badge variant="error" disabled>1 stop</auro-badge>
<auro-badge variant="warning" disabled>1 stop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Label

Use the `label` attribute for a text label experience.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/label.html) -->
  <!-- The below content is automatically added from ./../apiExamples/label.html -->
  <auro-badge label>Default</auro-badge>
  <auro-badge label variant="error">Danger</auro-badge>
  <auro-badge label variant="success">Success</auro-badge>
  <auro-badge label variant="warning">Warning</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/label.html -->

```html
<auro-badge label>Default</auro-badge>
<auro-badge label variant="error">Danger</auro-badge>
<auro-badge label variant="success">Success</auro-badge>
<auro-badge label variant="warning">Warning</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Pill

Use the `pill` attribute for a pill-shaped badge. The last example illustrates a customized version of the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pill.html) -->
  <!-- The below content is automatically added from ./../apiExamples/pill.html -->
  <auro-badge pill>12</auro-badge>
  <auro-badge variant="error" pill>Danger</auro-badge>
  <auro-badge variant="success" pill>Flight 167</auro-badge>
  <auro-badge variant="warning" pill>99</auro-badge>
  <auro-badge pill style="--ds-auro-badge-text-color: pink; --ds-auro-badge-container-color: purple; --ds-auro-badge-border-color: purple;">Flight 99</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pill.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/pill.html -->

```html
<auro-badge pill>12</auro-badge>
<auro-badge variant="error" pill>Danger</auro-badge>
<auro-badge variant="success" pill>Flight 167</auro-badge>
<auro-badge variant="warning" pill>99</auro-badge>
<auro-badge pill style="--ds-auro-badge-text-color: pink; --ds-auro-badge-container-color: purple; --ds-auro-badge-border-color: purple;">Flight 99</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Spacing

Use the `space` attribute to allow for default spacing between elements.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/space.html) -->
  <!-- The below content is automatically added from ./../apiExamples/space.html -->
  <auro-badge space>Nonstop</auro-badge>
  <auro-badge space>1 stop</auro-badge>
  <auro-badge space>2+ stops</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/space.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/space.html -->

```html
<auro-badge space>Nonstop</auro-badge>
<auro-badge space>1 stop</auro-badge>
<auro-badge space>2+ stops</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Target

The `target` attribute will convert the badge to a clickable button element, which will provide functionality for the badge to be dismissed upon interaction with the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/target.html) -->
  <!-- The below content is automatically added from ./../apiExamples/target.html -->
  <auro-badge target>Nonstop</auro-badge>
  <auro-badge target disabled>1 stop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/target.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/target.html -->

```html
<auro-badge target>Nonstop</auro-badge>
<auro-badge target disabled>1 stop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variants

Use the `variant` attribute to apply pre-defined styles to the badge.

#### Accents

Use these variants to apply pre-defined `accent` colors to the badge: `accent1`, `accent2`, `accent3`, `accent4`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accents.html) -->
  <!-- The below content is automatically added from ./../apiExamples/accents.html -->
  <auro-badge variant="accent1">Accent 1</auro-badge>
  <auro-badge variant="accent2">Accent 2</auro-badge>
  <auro-badge variant="accent3">Accent 3</auro-badge>
  <auro-badge variant="accent4">Accent 4</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accents.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/accents.html -->

```html
<auro-badge variant="accent1">Accent 1</auro-badge>
<auro-badge variant="accent2">Accent 2</auro-badge>
<auro-badge variant="accent3">Accent 3</auro-badge>
<auro-badge variant="accent4">Accent 4</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### States

Use these variants to apply pre-defined `state` colors to the badge: `info`, `error`, `success`, `warning`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/states.html) -->
  <!-- The below content is automatically added from ./../apiExamples/states.html -->
  <auro-badge variant="info">Info</auro-badge>
  <auro-badge variant="error">Error</auro-badge>
  <auro-badge variant="success">Success</auro-badge>
  <auro-badge variant="warning">Warning</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/states-inverse-appearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/states-inverse-appearance.html -->
  <auro-badge variant="info" appearance="inverse">Info</auro-badge>
  <auro-badge variant="error" appearance="inverse">Error</auro-badge>
  <auro-badge variant="success" appearance="inverse">Success</auro-badge>
  <auro-badge variant="warning" appearance="inverse">Warning</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/states.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/states.html -->

```html
<auro-badge variant="info">Info</auro-badge>
<auro-badge variant="error">Error</auro-badge>
<auro-badge variant="success">Success</auro-badge>
<auro-badge variant="warning">Warning</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/states-inverse-appearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/states-inverse-appearance.html -->

```html
<auro-badge variant="info" appearance="inverse">Info</auro-badge>
<auro-badge variant="error" appearance="inverse">Error</auro-badge>
<auro-badge variant="success" appearance="inverse">Success</auro-badge>
<auro-badge variant="warning" appearance="inverse">Warning</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Fares

Use these variants to apply pre-defined `fare` colors to the badge: `fare-saver`, `fare-economy`, `fare-premium`, `fare-business`, `fare-first`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fares.html) -->
  <!-- The below content is automatically added from ./../apiExamples/fares.html -->
  <auro-badge variant="fare-saver">Saver</auro-badge>
  <auro-badge variant="fare-economy">Economy</auro-badge>
  <auro-badge variant="fare-premium">Premium</auro-badge>
  <auro-badge variant="fare-business">Business</auro-badge>
  <auro-badge variant="fare-first">First</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fares.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/fares.html -->

```html
<auro-badge variant="fare-saver">Saver</auro-badge>
<auro-badge variant="fare-economy">Economy</auro-badge>
<auro-badge variant="fare-premium">Premium</auro-badge>
<auro-badge variant="fare-business">Business</auro-badge>
<auro-badge variant="fare-first">First</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Transparency

Use these variants to apply pre-defined `transparency` colors to the badge: `transparent`, `transparent-inverse`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/transparency.html) -->
  <!-- The below content is automatically added from ./../apiExamples/transparency.html -->
  <auro-badge variant="transparent">Saver</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/transparency-inverse.html) -->
  <!-- The below content is automatically added from ./../apiExamples/transparency-inverse.html -->
  <auro-badge variant="transparent-inverse">Saver</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/transparency.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/transparency.html -->

```html
<auro-badge variant="transparent">Saver</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/transparency-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/transparency-inverse.html -->

```html
<auro-badge variant="transparent-inverse">Saver</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Loyalty Tiers

Use these variants to apply pre-defined `loyalty` tier colors to the badge: `bronze`, `cobalt`, `copper`, `gold`, `nickel`, `platinum`, `silver`, `titanium`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loyalty.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loyalty.html -->
  <auro-badge pill variant="bronze">Bronze</auro-badge>
  <auro-badge pill variant="cobalt">Cobalt</auro-badge>
  <auro-badge pill variant="copper">Copper</auro-badge>
  <auro-badge pill variant="gold">Gold</auro-badge>
  <auro-badge pill variant="nickel">Nickel</auro-badge>
  <auro-badge pill variant="platinum">Platinum</auro-badge>
  <auro-badge pill variant="silver">Silver</auro-badge>
  <auro-badge pill variant="titanium">Titanium</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loyalty-inverse-appearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loyalty-inverse-appearance.html -->
  <auro-badge pill appearance="inverse" variant="bronze">Bronze</auro-badge>
  <auro-badge pill appearance="inverse" variant="cobalt">Cobalt</auro-badge>
  <auro-badge pill appearance="inverse" variant="copper">Copper</auro-badge>
  <auro-badge pill appearance="inverse" variant="gold">Gold</auro-badge>
  <auro-badge pill appearance="inverse" variant="nickel">Nickel</auro-badge>
  <auro-badge pill appearance="inverse" variant="platinum">Platinum</auro-badge>
  <auro-badge pill appearance="inverse" variant="silver">Silver</auro-badge>
  <auro-badge pill appearance="inverse" variant="titanium">Titanium</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loyalty.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loyalty.html -->

```html
<auro-badge pill variant="bronze">Bronze</auro-badge>
<auro-badge pill variant="cobalt">Cobalt</auro-badge>
<auro-badge pill variant="copper">Copper</auro-badge>
<auro-badge pill variant="gold">Gold</auro-badge>
<auro-badge pill variant="nickel">Nickel</auro-badge>
<auro-badge pill variant="platinum">Platinum</auro-badge>
<auro-badge pill variant="silver">Silver</auro-badge>
<auro-badge pill variant="titanium">Titanium</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loyalty-inverse-appearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loyalty-inverse-appearance.html -->

```html
<auro-badge pill appearance="inverse" variant="bronze">Bronze</auro-badge>
<auro-badge pill appearance="inverse" variant="cobalt">Cobalt</auro-badge>
<auro-badge pill appearance="inverse" variant="copper">Copper</auro-badge>
<auro-badge pill appearance="inverse" variant="gold">Gold</auro-badge>
<auro-badge pill appearance="inverse" variant="nickel">Nickel</auro-badge>
<auro-badge pill appearance="inverse" variant="platinum">Platinum</auro-badge>
<auro-badge pill appearance="inverse" variant="silver">Silver</auro-badge>
<auro-badge pill appearance="inverse" variant="titanium">Titanium</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Oneworld Tiers

Use these variants to apply pre-defined `oneworld` brand colors to the badge: `emerald`, `sapphire`, `ruby`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/oneworld.html) -->
  <!-- The below content is automatically added from ./../apiExamples/oneworld.html -->
  <auro-badge pill variant="emerald"><b>one</b>world Emerald</auro-badge>
  <auro-badge pill variant="sapphire"><b>one</b>world Sapphire</auro-badge>
  <auro-badge pill variant="ruby"><b>one</b>world Ruby</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/oneworld.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/oneworld.html -->

```html
<auro-badge pill variant="emerald"><b>one</b>world Emerald</auro-badge>
<auro-badge pill variant="sapphire"><b>one</b>world Sapphire</auro-badge>
<auro-badge pill variant="ruby"><b>one</b>world Ruby</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Lounge Tiers

Use these variants to apply pre-defined `lounge` tier colors to the badge: `lounge`, `loungeplus`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/lounge.html) -->
  <!-- The below content is automatically added from ./../apiExamples/lounge.html -->
  <auro-badge pill variant="lounge">Lounge</auro-badge>
  <auro-badge pill variant="loungeplus">Lounge+</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/lounge.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/lounge.html -->

```html
<auro-badge pill variant="lounge">Lounge</auro-badge>
<auro-badge pill variant="loungeplus">Lounge+</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### MVP Tiers (Deprecated)

Use the `mvp`, `mvpgold` or `mvpgold75k` attributes for tier badges.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/mvp.html) -->
  <!-- The below content is automatically added from ./../apiExamples/mvp.html -->
  <auro-badge pill variant="mvp">MVP</auro-badge>
  <auro-badge pill variant="mvpgold">MVP Gold</auro-badge>
  <auro-badge pill variant="mvpgold75k">MVP Gold 75k</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/mvp.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/mvp.html -->

```html
<auro-badge pill variant="mvp">MVP</auro-badge>
<auro-badge pill variant="mvpgold">MVP Gold</auro-badge>
<auro-badge pill variant="mvpgold75k">MVP Gold 75k</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Icons

To use icons in your badges, it is preferred that this is added as content within the `<slot>` of the `<auro-badge>` element. In most cases, it is preferred to use the Auro Icons repo and include the icon as part of the bundle. This example illustrates this option using the `<auro-icon>` element. Be aware that the `<auro-icon>` element uses a CDN to render the SVG. Consider this when building app critical UIs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
  <!-- The below content is automatically added from ./../apiExamples/icon.html -->
  <auro-badge>
    <auro-icon appearance="inverse" emphasis category="health" name="air" label>Air</auro-icon>
  </auro-badge>
  <auro-badge>
    <auro-icon appearance="inverse" emphasis category="health" name="covid-test" label>Covid test</auro-icon>
  </auro-badge>
  <auro-badge>
    <auro-icon appearance="inverse" emphasis category="health" name="health" label>Health</auro-icon>
  </auro-badge>
  <auro-badge>
    <auro-icon appearance="inverse" emphasis category="health" name="mask" label>Mask</auro-icon>
  </auro-badge>
  <auro-badge>
    <auro-icon appearance="inverse" emphasis category="health" name="spraybottle" label>Spray bottle</auro-icon>
  </auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/icon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/icon.html -->

```html
<auro-badge>
  <auro-icon appearance="inverse" emphasis category="health" name="air" label>Air</auro-icon>
</auro-badge>
<auro-badge>
  <auro-icon appearance="inverse" emphasis category="health" name="covid-test" label>Covid test</auro-icon>
</auro-badge>
<auro-badge>
  <auro-icon appearance="inverse" emphasis category="health" name="health" label>Health</auro-icon>
</auro-badge>
<auro-badge>
  <auro-icon appearance="inverse" emphasis category="health" name="mask" label>Mask</auro-icon>
</auro-badge>
<auro-badge>
  <auro-icon appearance="inverse" emphasis category="health" name="spraybottle" label>Spray bottle</auro-icon>
</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Pill with Icons

`pill` attribute with `auro-icon` inside your badge.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pill-with-icons.html) -->
  <!-- The below content is automatically added from ./../apiExamples/pill-with-icons.html -->
  <div style="display: inline-flex; gap: 0.25rem; flex-wrap: wrap">
    <auro-badge pill>
      <auro-icon appearance="inverse" label customSize emphasis category="health" name="air" style="--ds-auro-icon-size: var(--ds-size-250)">Air</auro-icon>
    </auro-badge>
    <auro-badge pill>
      <auro-icon appearance="inverse" label customSize emphasis category="health" name="covid-test" style="--ds-auro-icon-size: var(--ds-size-250)">Covid test</auro-icon>
    </auro-badge>
    <auro-badge pill>
      <auro-icon appearance="inverse" label customSize emphasis category="health" name="health" style="--ds-auro-icon-size: var(--ds-size-250)">Health</auro-icon>
    </auro-badge>
    <auro-badge pill>
      <auro-icon appearance="inverse" label customSize emphasis category="health" name="mask" style="--ds-auro-icon-size: var(--ds-size-250)">Mask</auro-icon>
    </auro-badge>
    <auro-badge pill>
      <auro-icon appearance="inverse" label customSize emphasis category="health" name="spraybottle" style="--ds-auro-icon-size: var(--ds-size-250)">Spray bottle</auro-icon>
    </auro-badge>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pill-with-icons.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/pill-with-icons.html -->

```html
<div style="display: inline-flex; gap: 0.25rem; flex-wrap: wrap">
  <auro-badge pill>
    <auro-icon appearance="inverse" label customSize emphasis category="health" name="air" style="--ds-auro-icon-size: var(--ds-size-250)">Air</auro-icon>
  </auro-badge>
  <auro-badge pill>
    <auro-icon appearance="inverse" label customSize emphasis category="health" name="covid-test" style="--ds-auro-icon-size: var(--ds-size-250)">Covid test</auro-icon>
  </auro-badge>
  <auro-badge pill>
    <auro-icon appearance="inverse" label customSize emphasis category="health" name="health" style="--ds-auro-icon-size: var(--ds-size-250)">Health</auro-icon>
  </auro-badge>
  <auro-badge pill>
    <auro-icon appearance="inverse" label customSize emphasis category="health" name="mask" style="--ds-auro-icon-size: var(--ds-size-250)">Mask</auro-icon>
  </auro-badge>
  <auro-badge pill>
    <auro-icon appearance="inverse" label customSize emphasis category="health" name="spraybottle" style="--ds-auro-icon-size: var(--ds-size-250)">Spray bottle</auro-icon>
  </auro-badge>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-badge-border-color: var(--ds-basic-color-brand-primary, #{v.$ds-basic-color-brand-primary});
  --ds-auro-badge-boxshadow-color: transparent;
  --ds-auro-badge-container-color: var(--ds-basic-color-brand-primary, #{v.$ds-basic-color-brand-primary});
  --ds-auro-badge-text-color: var(--ds-basic-color-texticon-inverse, #{v.$ds-basic-color-texticon-inverse});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
