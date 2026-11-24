<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-badge

Draws attention to a short piece of information, such as a status, a count, or a loyalty tier.

**Key capabilities**
- **Color variants**: Set `variant` to color the badge for a status, such as `error`, or a tier, such as `gold`.
- **Dark backgrounds**: Set `appearance="inverse"` to use colors made for dark backgrounds.
- **Rounded shapes**: Set `pill` or `label` for a badge with fully rounded ends.
- **Dismissible**: Set `target` to turn the badge into a button that removes it when clicked.

### Properties and attributes

| Properties | Attributes | Modifiers | Type                                                                                                                                                                                                                                                                                                                                                                                                | Default   | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | `default` \| `inverse`                                                                                                                                                                                                                                                                                                                                                                              | `default` | Sets the badge's colors for the background it sits on. Use `inverse` on dark backgrounds.                                                                                                                                                                                                                                                                                         |
| disabled   | disabled   |           | boolean                                                                                                                                                                                                                                                                                                                                                                                             |           | Shows the badge in a muted style. When `target` is set, also turns off the dismiss button, so it can't be clicked or reached with the keyboard.                                                                                                                                                                                                                                   |
| label      | label      |           | boolean                                                                                                                                                                                                                                                                                                                                                                                             |           | Shows the badge with fully rounded ends and smaller text.                                                                                                                                                                                                                                                                                                                         |
| pill       | pill       |           | boolean                                                                                                                                                                                                                                                                                                                                                                                             |           | Shows the badge with fully rounded ends and less vertical padding.                                                                                                                                                                                                                                                                                                                |
| space      | space      |           | boolean                                                                                                                                                                                                                                                                                                                                                                                             |           | Adds default spacing to the left of badges.                                                                                                                                                                                                                                                                                                                                       |
| target     | target     |           | boolean                                                                                                                                                                                                                                                                                                                                                                                             |           | Turns the badge into a button with an x icon that removes the badge from the page when clicked. Screen readers announce the badge's text followed by "Dismiss".                                                                                                                                                                                                                   |
| variant    | variant    |           | `accent1` \| `accent2` \| `accent3` \| `accent4` \| `bronze` \| `cobalt` \| `copper` \| `gold` \| `nickel` \| `platinum` \| `silver` \| `titanium` \| `transparent` \| `transparent-inverse` \| `info` \| `error` \| `success` \| `warning` \| `emerald` \| `sapphire` \| `ruby` \| `lounge` \| `loungeplus` \| `fare-saver` \| `fare-economy` \| `fare-premium` \| `fare-business` \| `fare-first` |           | Sets the badge's color to match what it shows. Use a status (`info`, `error`, `success`, or `warning`), a fare class (values starting with `fare-`), a loyalty, oneworld, or lounge tier (such as `gold`, `emerald`, or `lounge`), or an accent (`accent1`–`accent4`). Use `transparent` for a semi-transparent background, or `transparent-inverse` for one on dark backgrounds. |
| onDark     | onDark     |           | boolean                                                                                                                                                                                                                                                                                                                                                                                             |           | Deprecated: Use `appearance="inverse"` instead.<br>Shows the badge in colors for dark backgrounds.                                                                                                                                                                                                                                                                                |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | The badge's content, such as short text, an `<auro-icon>`, or both. For a badge that shows only an icon, describe the icon with text in the icon's default slot. |

### CSS custom properties

| Name                            | Description                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| --ds-auro-badge-border-color    | Border color of the badge. Badges with `target` don't show a border.                                                           |
| --ds-auro-badge-boxshadow-color | Color of the ring drawn around the dismiss button of a badge with `target` when it has keyboard focus. Transparent by default. |
| --ds-auro-badge-container-color | Background color of the badge.                                                                                                 |
| --ds-auro-badge-text-color      | Color of the badge's text.                                                                                                     |
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

<pre class="language-html"><code class="language-html">&lt;auro-badge&gt;Nonstop&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Appearance on dark backgrounds

Use `appearance="inverse"` on dark backgrounds.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge appearance="inverse"&gt;Nonstop&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Use the `disabled` attribute to show a badge in a muted style. On a badge with `target`, it also turns off the dismiss button.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge disabled&gt;1 stop&lt;/auro-badge&gt;
&lt;auro-badge variant="success" disabled&gt;1 stop&lt;/auro-badge&gt;
&lt;auro-badge variant="error" disabled&gt;1 stop&lt;/auro-badge&gt;
&lt;auro-badge variant="warning" disabled&gt;1 stop&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Label

Use the `label` attribute for a badge with fully rounded ends and smaller text.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge label&gt;Default&lt;/auro-badge&gt;
&lt;auro-badge label variant="error"&gt;Danger&lt;/auro-badge&gt;
&lt;auro-badge label variant="success"&gt;Success&lt;/auro-badge&gt;
&lt;auro-badge label variant="warning"&gt;Warning&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Pill

Use the `pill` attribute for a badge with fully rounded ends and less vertical padding. The last example changes the badge's colors with CSS custom properties.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge pill&gt;12&lt;/auro-badge&gt;
&lt;auro-badge variant="error" pill&gt;Danger&lt;/auro-badge&gt;
&lt;auro-badge variant="success" pill&gt;Flight 167&lt;/auro-badge&gt;
&lt;auro-badge variant="warning" pill&gt;99&lt;/auro-badge&gt;
&lt;auro-badge pill style="--ds-auro-badge-text-color: pink; --ds-auro-badge-container-color: purple; --ds-auro-badge-border-color: purple;"&gt;Flight 99&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Spacing

Use the `space` attribute to add space to the left of a badge.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge space&gt;Nonstop&lt;/auro-badge&gt;
&lt;auro-badge space&gt;1 stop&lt;/auro-badge&gt;
&lt;auro-badge space&gt;2+ stops&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Target

Use the `target` attribute to turn the badge into a button that removes the badge when clicked.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge target&gt;Nonstop&lt;/auro-badge&gt;
&lt;auro-badge target disabled&gt;1 stop&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variants

Use the `variant` attribute to color the badge for what it shows, such as a status, a fare class, or a tier.

#### Accents

Use these variants for accent colors: `accent1`, `accent2`, `accent3`, and `accent4`.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge variant="accent1"&gt;Accent 1&lt;/auro-badge&gt;
&lt;auro-badge variant="accent2"&gt;Accent 2&lt;/auro-badge&gt;
&lt;auro-badge variant="accent3"&gt;Accent 3&lt;/auro-badge&gt;
&lt;auro-badge variant="accent4"&gt;Accent 4&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### States

Use these variants for status colors: `info`, `error`, `success`, and `warning`.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge variant="info"&gt;Info&lt;/auro-badge&gt;
&lt;auro-badge variant="error"&gt;Error&lt;/auro-badge&gt;
&lt;auro-badge variant="success"&gt;Success&lt;/auro-badge&gt;
&lt;auro-badge variant="warning"&gt;Warning&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/states-inverse-appearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/states-inverse-appearance.html -->

<pre class="language-html"><code class="language-html">&lt;auro-badge variant="info" appearance="inverse"&gt;Info&lt;/auro-badge&gt;
&lt;auro-badge variant="error" appearance="inverse"&gt;Error&lt;/auro-badge&gt;
&lt;auro-badge variant="success" appearance="inverse"&gt;Success&lt;/auro-badge&gt;
&lt;auro-badge variant="warning" appearance="inverse"&gt;Warning&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Fares

Use these variants for fare class colors: `fare-saver`, `fare-economy`, `fare-premium`, `fare-business`, and `fare-first`.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge variant="fare-saver"&gt;Saver&lt;/auro-badge&gt;
&lt;auro-badge variant="fare-economy"&gt;Economy&lt;/auro-badge&gt;
&lt;auro-badge variant="fare-premium"&gt;Premium&lt;/auro-badge&gt;
&lt;auro-badge variant="fare-business"&gt;Business&lt;/auro-badge&gt;
&lt;auro-badge variant="fare-first"&gt;First&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Transparency

Use `transparent` for a semi-transparent background, or `transparent-inverse` on dark backgrounds.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge variant="transparent"&gt;Saver&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/transparency-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/transparency-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-badge variant="transparent-inverse"&gt;Saver&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Loyalty tiers

Use these variants for loyalty tier colors: `bronze`, `cobalt`, `copper`, `gold`, `nickel`, `platinum`, `silver`, and `titanium`.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge pill variant="bronze"&gt;Bronze&lt;/auro-badge&gt;
&lt;auro-badge pill variant="cobalt"&gt;Cobalt&lt;/auro-badge&gt;
&lt;auro-badge pill variant="copper"&gt;Copper&lt;/auro-badge&gt;
&lt;auro-badge pill variant="gold"&gt;Gold&lt;/auro-badge&gt;
&lt;auro-badge pill variant="nickel"&gt;Nickel&lt;/auro-badge&gt;
&lt;auro-badge pill variant="platinum"&gt;Platinum&lt;/auro-badge&gt;
&lt;auro-badge pill variant="silver"&gt;Silver&lt;/auro-badge&gt;
&lt;auro-badge pill variant="titanium"&gt;Titanium&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loyalty-inverse-appearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loyalty-inverse-appearance.html -->

<pre class="language-html"><code class="language-html">&lt;auro-badge pill appearance="inverse" variant="bronze"&gt;Bronze&lt;/auro-badge&gt;
&lt;auro-badge pill appearance="inverse" variant="cobalt"&gt;Cobalt&lt;/auro-badge&gt;
&lt;auro-badge pill appearance="inverse" variant="copper"&gt;Copper&lt;/auro-badge&gt;
&lt;auro-badge pill appearance="inverse" variant="gold"&gt;Gold&lt;/auro-badge&gt;
&lt;auro-badge pill appearance="inverse" variant="nickel"&gt;Nickel&lt;/auro-badge&gt;
&lt;auro-badge pill appearance="inverse" variant="platinum"&gt;Platinum&lt;/auro-badge&gt;
&lt;auro-badge pill appearance="inverse" variant="silver"&gt;Silver&lt;/auro-badge&gt;
&lt;auro-badge pill appearance="inverse" variant="titanium"&gt;Titanium&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Oneworld tiers

Use these variants for oneworld tier colors: `emerald`, `sapphire`, and `ruby`.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge pill variant="emerald"&gt;&lt;b&gt;one&lt;/b&gt;world Emerald&lt;/auro-badge&gt;
&lt;auro-badge pill variant="sapphire"&gt;&lt;b&gt;one&lt;/b&gt;world Sapphire&lt;/auro-badge&gt;
&lt;auro-badge pill variant="ruby"&gt;&lt;b&gt;one&lt;/b&gt;world Ruby&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Lounge tiers

Use these variants for lounge tier colors: `lounge` and `loungeplus`.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge pill variant="lounge"&gt;Lounge&lt;/auro-badge&gt;
&lt;auro-badge pill variant="loungeplus"&gt;Lounge+&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### MVP tiers (deprecated)

Deprecated: Use the Atmos loyalty tier variants, listed under Loyalty tiers, instead. The `mvp`, `mvpgold`, and `mvpgold75k` values of `variant` still show the MVP tier colors.

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

<pre class="language-html"><code class="language-html">&lt;auro-badge pill variant="mvp"&gt;MVP&lt;/auro-badge&gt;
&lt;auro-badge pill variant="mvpgold"&gt;MVP Gold&lt;/auro-badge&gt;
&lt;auro-badge pill variant="mvpgold75k"&gt;MVP Gold 75k&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Icons

Put an icon in the badge's default slot, as in this example, which uses `<auro-icon>`. `<auro-icon>` loads its SVG from a CDN, so for critical UIs, consider including the icon from the Auro icon library in your bundle instead.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
<!-- The below content is automatically added from ./../apiExamples/icon.html -->
<auro-badge>
<auro-icon appearance="inverse" category="health" name="air" label>Air</auro-icon>
</auro-badge>
<auro-badge>
<auro-icon appearance="inverse" category="health" name="covid-test-stroke" label>Covid test</auro-icon>
</auro-badge>
<auro-badge>
<auro-icon appearance="inverse" category="health" name="medical-stroke" label>Medical</auro-icon>
</auro-badge>
<auro-badge>
<auro-icon appearance="inverse" category="health" name="mask-stroke" label>Mask</auro-icon>
</auro-badge>
<auro-badge>
<auro-icon appearance="inverse" category="health" name="clean-stroke" label>Cleaning</auro-icon>
</auro-badge>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/icon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/icon.html -->

<pre class="language-html"><code class="language-html">&lt;auro-badge&gt;
  &lt;auro-icon appearance="inverse" category="health" name="air" label&gt;Air&lt;/auro-icon&gt;
&lt;/auro-badge&gt;
&lt;auro-badge&gt;
  &lt;auro-icon appearance="inverse" category="health" name="covid-test-stroke" label&gt;Covid test&lt;/auro-icon&gt;
&lt;/auro-badge&gt;
&lt;auro-badge&gt;
  &lt;auro-icon appearance="inverse" category="health" name="medical-stroke" label&gt;Medical&lt;/auro-icon&gt;
&lt;/auro-badge&gt;
&lt;auro-badge&gt;
  &lt;auro-icon appearance="inverse" category="health" name="mask-stroke" label&gt;Mask&lt;/auro-icon&gt;
&lt;/auro-badge&gt;
&lt;auro-badge&gt;
  &lt;auro-icon appearance="inverse" category="health" name="clean-stroke" label&gt;Cleaning&lt;/auro-icon&gt;
&lt;/auro-badge&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Pill with icons

Use the `pill` attribute with an `<auro-icon>` in the badge.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pill-with-icons.html) -->
<!-- The below content is automatically added from ./../apiExamples/pill-with-icons.html -->
<div style="display: inline-flex; gap: 0.25rem; flex-wrap: wrap">
<auro-badge pill>
<auro-icon appearance="inverse" label category="health" name="air" style="--ds-auro-icon-size: var(--ds-size-250)">Air</auro-icon>
</auro-badge>
<auro-badge pill>
<auro-icon appearance="inverse" label category="health" name="covid-test-stroke" style="--ds-auro-icon-size: var(--ds-size-250)">Covid test</auro-icon>
</auro-badge>
<auro-badge pill>
<auro-icon appearance="inverse" label category="health" name="medical-stroke" style="--ds-auro-icon-size: var(--ds-size-250)">Medical</auro-icon>
</auro-badge>
<auro-badge pill>
<auro-icon appearance="inverse" label category="health" name="mask-stroke" style="--ds-auro-icon-size: var(--ds-size-250)">Mask</auro-icon>
</auro-badge>
<auro-badge pill>
<auro-icon appearance="inverse" label category="health" name="clean-stroke" style="--ds-auro-icon-size: var(--ds-size-250)">Cleaning</auro-icon>
</auro-badge>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pill-with-icons.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/pill-with-icons.html -->

<pre class="language-html"><code class="language-html">&lt;div style="display: inline-flex; gap: 0.25rem; flex-wrap: wrap"&gt;
  &lt;auro-badge pill&gt;
    &lt;auro-icon appearance="inverse" label category="health" name="air" style="--ds-auro-icon-size: var(--ds-size-250)"&gt;Air&lt;/auro-icon&gt;
  &lt;/auro-badge&gt;
  &lt;auro-badge pill&gt;
    &lt;auro-icon appearance="inverse" label category="health" name="covid-test-stroke" style="--ds-auro-icon-size: var(--ds-size-250)"&gt;Covid test&lt;/auro-icon&gt;
  &lt;/auro-badge&gt;
  &lt;auro-badge pill&gt;
    &lt;auro-icon appearance="inverse" label category="health" name="medical-stroke" style="--ds-auro-icon-size: var(--ds-size-250)"&gt;Medical&lt;/auro-icon&gt;
  &lt;/auro-badge&gt;
  &lt;auro-badge pill&gt;
    &lt;auro-icon appearance="inverse" label category="health" name="mask-stroke" style="--ds-auro-icon-size: var(--ds-size-250)"&gt;Mask&lt;/auro-icon&gt;
  &lt;/auro-badge&gt;
  &lt;auro-badge pill&gt;
    &lt;auro-icon appearance="inverse" label category="health" name="clean-stroke" style="--ds-auro-icon-size: var(--ds-size-250)"&gt;Cleaning&lt;/auro-icon&gt;
  &lt;/auro-badge&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-badge-border-color: var(--ds-basic-color-brand-primary, #{v.$ds-basic-color-brand-primary});
  --ds-auro-badge-boxshadow-color: transparent;
  --ds-auro-badge-container-color: var(--ds-basic-color-brand-primary, #{v.$ds-basic-color-brand-primary});
  --ds-auro-badge-text-color: var(--ds-basic-color-texticon-inverse, #{v.$ds-basic-color-texticon-inverse});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
