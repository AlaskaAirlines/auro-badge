<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-badge

HTML custom element for the use of drawing attention to additional interface information

## Attributes

| Attribute  | Type      | Description                                      |
|------------|-----------|--------------------------------------------------|
| [advisory](#advisory) | `Boolean` | Enables advisory ui                              |
| [emerald](#emerald)  | `Boolean` | Sets the background color of the badge to the oneworld emerald color |
| [error](#error)    | `Boolean` | Enables error ui                                 |
| [fixed](#fixed)    | `Boolean` | Uses px values instead of rem                    |
| [label](#label)    | `Boolean` | Enables label ui option                          |
| [pill](#pill)     | `Boolean` | Enables pill ui option                           |
| [ruby](#ruby)     | `Boolean` | Sets the background color of the badge to the oneworld ruby color |
| [sapphire](#sapphire) | `Boolean` | Sets the background color of the badge to the oneworld sapphire color |
| [space](#space)    | `Boolean` | Adds default spacing spec to badges              |
| [success](#success)  | `Boolean` | Enables success ui                               |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| [disabled](#disabled) | `disabled` | `Boolean` | false   | If set to true button will become disabled and not allow for interactions |
| [target](#target)   | `target`   | `Boolean` | false   | Enables the close functionality                  |
<!-- AURO-GENERATED-CONTENT:END -->

## Badge API Examples

### Colors (`error`, `success`, `advisory`)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/color.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/color.html -->
  <auro-badge space error>Nonstop</auro-badge>
  <auro-badge space success>1 stop</auro-badge>
  <auro-badge space advisory>2+ stops</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/color.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/color.html -->

```html
<auro-badge space error>Nonstop</auro-badge>
<auro-badge space success>1 stop</auro-badge>
<auro-badge space advisory>2+ stops</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Brand (`emerald`, `ruby`, `sapphire`)

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

### fixed

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/fixed.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/fixed.html -->
  <auro-badge fixed>Nonstop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/fixed.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/fixed.html -->

```html
<auro-badge fixed>Nonstop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### space

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

### disabled

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabled.html -->
  <auro-badge disabled>1 stop</auro-badge>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabled.html -->

```html
<auro-badge disabled>1 stop</auro-badge>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### target

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