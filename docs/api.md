# auro-badge

HTML custom element for the use of drawing attention to additional interface information.

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `ondark`  | `Boolean` | Enables styles for dark backgrounds              |
| `pill`    | `Boolean` | Enables pill UI option                           |
| `space`   | `Boolean` | Adds default spacing spec to badges              |
| `variant` | `String`  | Sets the color UI of the badge<br />Possible Values:<br />- `accent1`, `accent2`, `accent3`, `accent4`, `bronze`, `cobalt`, `copper`, `gold`, `nickel`, `platinum`, `silver`, `titanium`, `transparent`, `info`, `error`, `success`, `warning`, `emerald`, `sapphire`, `ruby`, `lounge`, `loungeplus`<br />Deprecated Values:<br />- `mvp`, `mvpgold`, `mvpgold75k` |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | false   | If set to true button will become disabled and not allow for interactions |
| `label`    | `label`    | `Boolean` | false   | Enables label UI option                          |
| `target`   | `target`   | `Boolean` | false   | Enables the close functionality                  |
