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

The provided paths are considered to be relative to the main `identity.css` and can be nested in folders. The other
linked stylesheets must have the same structure of the main one and can import others in turn.

Currently the `@import` is the only supported at-rule: others like `@media` of `@keyframes` have no result on the
behavior of your visua environment and will eventually cause some warnings when using the CLI.

#### Naming variables

Even though you're totally allowed to call the variables as you want, following some rules in doing so is highly
recommended for two main reasons:

- Visua is almost always able to infer the type of the variables from the content except in some particular
cases where it needs a hint in the name to be able to eliminate ambiguity and correctly parse the value;
- if you plan to use plugins made by the community then following a common lexicon will give you a wider compatibility
thus more complete results (more in the next page).

Because of this, is considered a best practice suffixing variables names with the name of the css property which
normally hosts that value:

```css
:root {
    /*
    font-family is an example of value which
    is not recognizable only based on the content.
    In this case the -font-family suffix helps Visua
    parsing the value correctly.
    */
    --headings-font-family: 'Raleway', sans-serif;
}
```

#### Values

The following is the list of all the values Visua is capable of understanding and their suffixes:

|Value/Definition|Corresponding CSSStyleValue|Required suffix|
|---|---|---|
|`<number>`|`CSSNumericValue`|none|
|`<percentage>`|`CSSUnitValue`|none|
|`<length>`|`CSSUnitValue`|none|
|`<angle>`|`CSSUnitValue`|none|
|`<time>`|`CSSUnitValue`|none|
|`<frequency>`|`CSSUnitValue`|none|
|`<resolution>`|`CSSUnitValue`|none|
|`<flex>`|`CSSUnitValue`|none|
|`<color>`|`CSSColorValue`|none|
|`<identifier>`|`CSSKeywordValue`|none|
|`<string>`|`CSSStringValue`|none|
|`<position>`|`CSSPositionValue`|none|
|`<transform>`|`CSSTransformValue`|none|
|`<url>`|`CSSUrlValue`|none|
|`<font-family>`|`CSSFontFamilyValue`|`font-family`|












