# Badge

HTML custom element for the use of drawing attention to additional interface information

## Default component

Default non-actionable badge element to display data.

<div class="exampleWrapper">
  <auro-badge>Nonstop</auro-badge>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-badge>Nonstop</auro-badge>
  ```

</auro-accordion>

<div class="exampleWrapper--ondark">
  <auro-badge ondark>Nonstop</auro-badge>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-badge ondark>Nonstop</auro-badge>
  ```

</auro-accordion>

## Element with target property

Use the `target` property to convert the badge to a functional button. This this property will convert the badge to a clickable button element and the value of the button will be copied to the element's `value` attribute and a custom event will be fired when clicked.

<div class="exampleWrapper">
  <auro-badge target>Nonstop</auro-badge>
  <auro-badge target disabled>1 stop</auro-badge>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-badge target>Nonstop</auro-badge>
  <auro-badge target disabled>1 stop</auro-badge>
  ```

</auro-accordion>

## Elements with spacing property

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

## Alert color options

Use the `error`, `success`, or `advisory` attributes for alternate alert experiences.

<div class="exampleWrapper">
  <auro-badge space error>Nonstop</auro-badge>
  <auro-badge space success>1 stop</auro-badge>
  <auro-badge space advisory>2+ stops</auro-badge>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-badge space error>Nonstop</auro-badge>
  <auro-badge space success>1 stop</auro-badge>
  <auro-badge space advisory>2+ stops</auro-badge>
  ```

</auro-accordion>

<div class="exampleWrapper--ondark">
  <auro-badge space ondark error>Nonstop</auro-badge>
  <auro-badge space ondark success>1 stop</auro-badge>
  <auro-badge space ondark advisory>2+ stops</auro-badge>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-badge space ondark error>Nonstop</auro-badge>
  <auro-badge space ondark success>1 stop</auro-badge>
  <auro-badge space ondark advisory>2+ stops</auro-badge>
  ```

</auro-accordion>

## Pill option

Use the `pill` property in combination with `error`, `success`, or `advisory` attributes for alternate badge experiences. The last example illustrates a customized version.

<div class="exampleWrapper">
  <auro-badge space pill>12</auro-badge>
  <auro-badge space error pill>Danger</auro-badge>
  <auro-badge space success pill>Flight 167</auro-badge>
  <auro-badge space advisory pill>99</auro-badge>
  <auro-badge space tropical-300 pill>New!</auro-badge>
  <auro-badge space goldcoast-200 pill>394</auro-badge>
  <auro-badge space breeze-100 pill>Flight 1</auro-badge>
  <auro-badge space atlas-100 pill>Discount</auro-badge>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-badge space pill>12</auro-badge>
  <auro-badge space error pill>Danger</auro-badge>
  <auro-badge space success pill>Flight 167</auro-badge>
  <auro-badge space advisory pill>99</auro-badge>
  <auro-badge space tropical-300 pill>New!</auro-badge>
  <auro-badge space goldcoast-200 pill>394</auro-badge>
  <auro-badge space breeze-100 pill>Flight 1</auro-badge>
  <auro-badge space atlas-100 pill>Discount</auro-badge>
  ```

</auro-accordion>

## Label option

Use the `label` property for a text label experience. The last example illustrates a customized version.

<div class="exampleWrapper">
  <auro-badge label>Hello World</auro-badge>
  <auro-badge label error>Danger</auro-badge>
  <auro-badge label success>Success</auro-badge>
  <auro-badge label advisory>Advisory</auro-badge>
  <auro-badge label tropical-300 pill>New!</auro-badge>
  <auro-badge label goldcoast-200 pill>394</auro-badge>
  <auro-badge label breeze-100 pill>Flight 1</auro-badge>
  <auro-badge label atlas-100 pill>Discount</auro-badge>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-badge label>Hello World</auro-badge>
  <auro-badge label error>Danger</auro-badge>
  <auro-badge label success>Success</auro-badge>
  <auro-badge label advisory>Advisory</auro-badge>
  <auro-badge label tropical-300 pill>New!</auro-badge>
  <auro-badge label goldcoast-200 pill>394</auro-badge>
  <auro-badge label breeze-100 pill>Flight 1</auro-badge>
  <auro-badge label atlas-100 pill>Discount</auro-badge>
  ```

</auro-accordion>
