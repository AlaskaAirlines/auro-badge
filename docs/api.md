# auro-badge

HTML custom element for the use of drawing attention to additional interface information.

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `label`   | `Boolean` | Enables label UI option                          |
| `ondark`  | `Boolean` | Enables styles for dark backgrounds              |
| `pill`    | `Boolean` | Enables pill UI option                           |
| `space`   | `Boolean` | Adds default spacing spec to badges              |
| `variant` | `String`  | Sets the variant of the badge, can be one of: "accent1", "accent2", "accent3", "accent4", "bronze", "cobalt", "copper", "gold", "nickel", "platinum", "silver", "titanium", "transparent", "info", "error", "success", "warning", "emerald", "sapphire", "ruby", "lounge", "loungeplus". |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | false   | If set to true button will become disabled and not allow for interactions |
| `target`   | `target`   | `Boolean` | false   | Enables the close functionality                  |
