# auro-badge

auro-badge provides users a way to ...

## Attributes

| Attribute  | Type     | Description                                  |
|------------|----------|----------------------------------------------|
| `cssClass` | `String` | Applies designated CSS class to DOM element. |

## Properties

| Property | Attribute | Type         | Default      |
|----------|-----------|--------------|--------------|
| `action` | `action`  | `boolean`    |              |
| `dom`    |           |              |              |
| `svg`    |           | `any \| any` | "firstChild" |

## Methods

| Method         | Type               | Description                                      |
|----------------|--------------------|--------------------------------------------------|
| `handleChange` | `(event: *): void` | Fires a custom event and removes the element from the DOM if action is true<br /><br />**event**: interaction event from Badge |
