<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-badge

HTML custom element for the use of drawing attention to additional interface information.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type    | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ---------- | --------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appearance | appearance |           | string  | `default` | Defines whether the component will be on lighter or darker backgrounds.<br> Possible Values: `default`, `inverse`                                                                                                                                                                                                                                                                                                        |
| disabled   | disabled   |           | boolean | `false`   | If set to true button will become disabled and not allow for interactions.                                                                                                                                                                                                                                                                                                                                               |
| label      | label      |           | boolean | `false`   | Enables label UI option                                                                                                                                                                                                                                                                                                                                                                                                  |
| target     | target     |           | boolean | `false`   | Enables the close functionality                                                                                                                                                                                                                                                                                                                                                                                          |
|            | ondark     |           | Boolean |           | DEPRECATED - use `appearance` instead.                                                                                                                                                                                                                                                                                                                                                                                   |
|            | pill       |           | Boolean |           | Enables pill UI option                                                                                                                                                                                                                                                                                                                                                                                                   |
|            | space      |           | Boolean |           | Adds default spacing spec to badges                                                                                                                                                                                                                                                                                                                                                                                      |
|            | variant    |           | String  |           | Sets the color UI of the badge Possible Values: `accent1`, `accent2`, `accent3`, `accent4`, `bronze`, `cobalt`, `copper`, `gold`, `nickel`, `platinum`, `silver`, `titanium`, `transparent`, `info`, `error`, `success`, `warning`, `emerald`, `sapphire`, `ruby`, `lounge`, `loungeplus`, `fare-saver`, `fare-economy`, `fare-premium`, `fare-business`, `fare-first` Deprecated Values: `mvp`, `mvpgold`, `mvpgold75k` |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |
<!-- AURO-GENERATED-CONTENT:END -->

## Badge API Examples

### Variants

Use the `variant` attribute to apply pre-defined styles to the badge.

#### Accents

Use these variants to apply pre-defined accent colors to the badge: `accent1`, `accent2`, `accent3`, `accent4`.

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

Use these variants to apply pre-defined state styles to the badge: `info`, `error`, `success`, `warning`.

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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/statesInverseAppearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/statesInverseAppearance.html -->
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
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/statesInverseAppearance.html) -->
<!-- The below content is automatically added from ./../apiExamples/statesInverseAppearance.html -->
<auro-badge variant="info" appearance="inverse">Info</auro-badge>
<auro-badge variant="error" appearance="inverse">Error</auro-badge>
<auro-badge variant="success" appearance="inverse">Success</auro-badge>
<auro-badge variant="warning" appearance="inverse">Warning</auro-badge>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Fares

Use these variants to apply pre-defined fare colors to the badge: `fare-saver`, `fare-economy`, `fare-premium`, `fare-business`, `fare-first`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fares.html) -->
  <!-- The below content is automatically added from ./../apiExamples/fares.html -->
  <auro-badge variant="fare-saver">saver</auro-badge>
  <auro-badge variant="fare-economy">economy</auro-badge>
  <auro-badge variant="fare-premium">premium</auro-badge>
  <auro-badge variant="fare-business">business</auro-badge>
  <auro-badge variant="fare-first">first</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fares.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/fares.html -->

```html
<auro-badge variant="fare-saver">saver</auro-badge>
<auro-badge variant="fare-economy">economy</auro-badge>
<auro-badge variant="fare-premium">premium</auro-badge>
<auro-badge variant="fare-business">business</auro-badge>
<auro-badge variant="fare-first">first</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Transparency

Use these variants to apply pre-defined transparency colors to the badge: `transparent`, `transparent-inverse`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/transparency.html) -->
  <!-- The below content is automatically added from ./../apiExamples/transparency.html -->
  <auro-badge variant="transparent">saver</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/transparency-inverse.html) -->
  <!-- The below content is automatically added from ./../apiExamples/transparency-inverse.html -->
  <auro-badge variant="transparent-inverse">saver</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/transparency.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/transparency.html -->

```html
<auro-badge variant="transparent">saver</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/transparency-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/transparency-inverse.html -->

```html
<auro-badge variant="transparent-inverse">saver</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Loyalty Tiers

Use these variants to apply pre-defined loyalty tier colors to the badge: `bronze`, `cobalt`, `copper`, `gold`, `nickel`, `platinum`, `silver`, `titanium`.

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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loyaltyInverseAppearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loyaltyInverseAppearance.html -->
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
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loyaltyInverseAppearance.html) -->
<!-- The below content is automatically added from ./../apiExamples/loyaltyInverseAppearance.html -->
<auro-badge pill appearance="inverse" variant="bronze">Bronze</auro-badge>
<auro-badge pill appearance="inverse" variant="cobalt">Cobalt</auro-badge>
<auro-badge pill appearance="inverse" variant="copper">Copper</auro-badge>
<auro-badge pill appearance="inverse" variant="gold">Gold</auro-badge>
<auro-badge pill appearance="inverse" variant="nickel">Nickel</auro-badge>
<auro-badge pill appearance="inverse" variant="platinum">Platinum</auro-badge>
<auro-badge pill appearance="inverse" variant="silver">Silver</auro-badge>
<auro-badge pill appearance="inverse" variant="titanium">Titanium</auro-badge>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Oneworld Tiers

Use these variants to apply pre-defined oneworld brand colors to the badge: `emerald`, `sapphire`, `ruby`.

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

Use these variants to apply pre-defined lounge tier colors to the badge: `lounge`, `loungeplus`.

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

### `space`

Use the `space` attribute to allow for pre-defined spacing beteen badges.

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

### `disabled`

Use the `disabled` attribute to render any `<auro-badge>` with a innoperable UI.

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

### `target`

Use the `target` property to aply the clickable feature.

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

### `pill`

Use the `pill` attribute to render a small 'pill size' UI.

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

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

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
