---
title: Structuring identity files
index: 1
---
#### Base structure

In its simplest form an `identity.css` file is a list of css variables defining various aspects of your design system.

Just create and empty stylesheet and define all the variables you'll want to use inside the `:root` pseudo-selector as
you would normally do for the web. Also like in the web you can reference other variables by using the `var()` function
as well as perform operations on numeric values using `calc()`.

```css
:root {
    --primary-logo: url(img/logo.png);
    --secondary-logo: url(img/logo-secondary.png);
    --logo-size: 14px;
    --secondary-logo-size: calc(var(--logo-size) / 2);
}
```

#### External stylesheets

When your brand definition becomes too voluminous for a single stylesheet you'll certainly want to divide some parts of
it into dedicated css files. You can do so by using `@import` at-rules, typically at the beginning of `identity.css`.

```css
@import 'colors.css'; /* Single quotes are supported */
@import "fonts.css"; /* as well as double quotes */
@import url(sizes.css); /* and urls */

:root {
    /* Other variables (if needed) */
}
```

The provided paths are considered to be relative to the main `identity.css`. The other
linked stylesheets must follow the same structure described in this page and can import others in turn.

Currently the `@import` is the only supported at-rule: others like `@media` of `@keyframes` have no result on the
behavior of your visua environment and will eventually cause some warnings when using the CLI.

#### Naming variables

Even though you're totally allowed to call the variables as you want, following some rules in doing so is recommended:
if you plan to use plugins made by the community then following a common lexicon will give you a wider compatibility
thus more complete results (more in the next page).

A good starting point is suffixing variable names with the name of the css property which normally hosts that value:

```css
:root {
    --headings-font-family: 'Raleway', sans-serif;
}
```


#### Values

The following is the list of all the values Visua is capable of understanding along with their corresponding `CSSStyleValue` instance:

|Value|CSSStyleValue instance|
|---|---|
|`<number>`|`CSSNumericValue`|
|`<percentage>`|`CSSUnitValue`|
|`<length>`|`CSSUnitValue`|
|`<angle>`|`CSSUnitValue`|
|`<time>`|`CSSUnitValue`|
|`<frequency>`|`CSSUnitValue`|
|`<resolution>`|`CSSUnitValue`|
|`<flex>`|`CSSUnitValue`|
|`<color>`|`CSSColorValue`|
|`<identifier>`|`CSSKeywordValue`|
|`<identifier>#`|`CSSKeywordsValue`|
|`<string>`|`CSSStringValue`|
|`<position>`|`CSSPositionValue`|
|`<transform>`|`CSSTransformValue`|
|`<url>`|`CSSUrlValue`|
|`<border>`|`CSSBorderValue`|
|`<font>`|`CSSFontValue`|
|`<font-family>`|`CSSFontFamilyValue`|
|`<gradient>`|`CSSGradientValue`|
|`<box-shadow>`|`CSSBoxShadowValue`|












