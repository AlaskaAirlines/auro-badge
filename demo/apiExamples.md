

# auro-badge

HTML custom element for the use of drawing attention to additional interface information.

## Attributes

| Attribute  | Type      | Description                         |
|------------|-----------|-------------------------------------|
| [advisory](#advisory) | `Boolean` | Enables advisory ui                 |
| [error](#error)    | `Boolean` | Enables error ui                    |
| [fixed](#fixed)    | `Boolean` | Uses px values instead of rem       |
| [label](#label)    | `Boolean` | Enables label ui option             |
| [pill](#pill)     | `Boolean` | Enables pill ui option              |
| [space](#space)    | `Boolean` | Adds default spacing spec to badges |
| [success](#success)  | `Boolean` | Enables success ui                  |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| [disabled](#disabled) | `disabled` | `Boolean` | false   | If set to true button will become disabled and not allow for interactions |
| [target](#target)   | `target`   | `Boolean` | false   | Enables the close functionality                  |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-badge>Nonstop</auro-badge>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge>Nonstop</auro-badge>
```

</auro-accordion>

### Attribute Examples

#### Advisory

<div class="exampleWrapper">
  <auro-badge advisory>2+ stops</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge advisory>2+ stops</auro-badge>
```

</auro-accordion>

#### Error

<div class="exampleWrapper">
  <auro-badge error>2+ stops</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge error>2+ stops</auro-badge>
```

</auro-accordion>

#### Fixed

<div class="exampleWrapper">
  <auro-badge fixed>Nonstop</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge fixed>Nonstop</auro-badge>
```

</auro-accordion>

#### Label

<div class="exampleWrapper">
  <auro-badge label>Hello World</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge label>Hello World</auro-badge>
```

</auro-accordion>

#### Pill option

Use the `pill` property in combination with `error`, `success`, or `advisory` attributes for alternate badge experiences.

<div class="exampleWrapper">
  <auro-badge pill>12</auro-badge>
  <auro-badge error pill>184</auro-badge>
  <auro-badge success pill>34</auro-badge>
  <auro-badge advisory pill>99</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge pill>12</auro-badge>
<auro-badge error pill>184</auro-badge>
<auro-badge success pill>34</auro-badge>
<auro-badge advisory pill>99</auro-badge>
```

</auro-accordion>

#### Space

Use the `space` property to allow for default spacing between elements.

<div class="exampleWrapper">
  <auro-badge space>Nonstop</auro-badge>
  <auro-badge space>1 stop</auro-badge>
  <auro-badge space>2+ stops</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge space>Nonstop</auro-badge>
<auro-badge space>1 stop</auro-badge>
<auro-badge space>2+ stops</auro-badge>
```

</auro-accordion>

#### Success

<div class="exampleWrapper">
  <auro-badge success>2+ stops</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge success>2+ stops</auro-badge>
```

</auro-accordion>

### Property Examples

#### Disabled

Using the `disabled` property with the `target` will disable the interactive aspect of the `target` property effect.

<div class="exampleWrapper">
  <auro-badge target disabled>1 stop</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge target disabled>1 stop</auro-badge>
```

</auro-accordion>

#### Target

Use the `target` property to convert the badge to a functional button. This this property will convert the badge to a clickable button element and the value of the button will be copied to the element's `value` attribute and a custom event will be fired when clicked.

<div class="exampleWrapper">
  <auro-badge target>Nonstop</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge target>Nonstop</auro-badge>
```

</auro-accordion>

### Other Examples

#### Custom color options

The `style` attribute can be used to apply any custom coloring needed to the badge.

<div class="exampleWrapper">
  <auro-badge style="background-color: var(--auro-color-brand-tropical-200); color: var(--auro-color-text-primary-on-light); border-color: var(--auro-color-border-error-on-light);">Hello World</auro-badge>
  <auro-badge disabled style="background-color: var(--auro-color-brand-tropical-200); color: var(--auro-color-text-primary-on-light); border-color: var(--auro-color-border-error-on-light);">Hello World</auro-badge>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-badge style="background-color: var(--auro-color-brand-tropical-200); color: var(--auro-color-text-primary-on-light); border-color: var(--auro-color-border-error-on-light);">Hello World</auro-badge>
<auro-badge disabled style="background-color: var(--auro-color-brand-tropical-200); color: var(--auro-color-text-primary-on-light); border-color: var(--auro-color-border-error-on-light);">Hello World</auro-badge>
```

</auro-accordion>
