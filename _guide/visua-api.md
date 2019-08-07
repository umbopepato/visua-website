---
title: Visua API
index: 4
---

#### Parsing identity files

The `visua` function is used to parse identity configurations. It returns a [`StyleMap`](#stylemap), an object model
representing the CSS variables. 

```typescript
import {visua} from 'visua';

const styleMap = visua({
    path: 'identity/main.css',
});
```

[`visua` reference <i class="fas fa-arrow-right"></i>](../../reference/_visua_/)

#### StyleMap

When identity configuration files are parsed, visua converts them to a `StyleMap`. Each entry of the map corresponds to
a variable. Values can be retrieved with the methods `get()`, `getAll()` and `getSimilar()` and set with the `set()`
method.

[`StyleMap` reference <i class="fas fa-arrow-right"></i>](../../reference/_cssom_style_map_/)

#### Style values

The StyleMap contains instances of `CSSStyleValue`. These objects are very similar to the ones used in
[CSS Typed OM](https://www.w3.org/TR/css-typed-om-1/), a new web API used to represent and manipulate CSS values.
Visua in fact contains a partial implementation of this specification.

The following is the list of all the values visua is capable of understanding along with their corresponding
`CSSStyleValue` instances:

|Value|CSSStyleValue instance|
|---|---|
|`<number>`|[`CSSNumericValue`](../../reference/_cssom_css_numeric_value_/)|
|`<percentage>`|[`CSSUnitValue`](../../reference/_cssom_css_unit_value_/)|
|`<length>`|[`CSSUnitValue`](../../reference/_cssom_css_unit_value_/)|
|`<angle>`|[`CSSUnitValue`](../../reference/_cssom_css_unit_value_/)|
|`<time>`|[`CSSUnitValue`](../../reference/_cssom_css_unit_value_/)|
|`<frequency>`|[`CSSUnitValue`](../../reference/_cssom_css_unit_value_/)|
|`<resolution>`|[`CSSUnitValue`](../../reference/_cssom_css_unit_value_/)|
|`<flex>`|[`CSSUnitValue`](../../reference/_cssom_css_unit_value_/)|
|`<color>`|[`CSSColorValue`](../../reference/_cssom_css_color_value_/)|
|`<identifier>`|[`CSSKeywordValue`](../../reference/_cssom_css_keyword_value_/)|
|`<identifier>#`|[`CSSKeywordsValue`](../../reference/_cssom_css_keyword_value_/)|
|`<string>`|[`CSSStringValue`](../../reference/_cssom_css_string_value_/)|
|`<position>`|[`CSSPositionValue`](../../reference/_cssom_css_position_value_/)|
|`<transform>`|[`CSSTransformValue`](../../reference/_cssom_css_transform_value_/)|
|`<url>`|[`CSSUrlValue`](../../reference/_cssom_css_url_value_/)|
|`<border>`|[`CSSBorderValue`](../../reference/_cssom_css_border_value_/)|
|`<font>`|[`CSSFontValue`](../../reference/_cssom_css_font_value_/)|
|`<font-family>`|[`CSSFontFamilyValue`](../../reference/_cssom_css_font_family_value_/)|
|`<gradient>`|[`CSSGradientValue`](../../reference/_cssom_css_gradient_value_/)|
|`<box-shadow>`|[`CSSBoxShadowValue`](../../reference/_cssom_css_box_shadow_value_/)|
|`<filter>`|[`CSSFilterValue`](../../reference/_cssom_css_filter_value_/)|

<br>

Visua doesn't have specific values for a lot of css properties which are composed of one or more keywords 
such as `display`, `cursor` or `overflow`. All those values are interpreted as `CSSKeyword(s)Value`





