---
title: Structuring identity files
index: 1
---
#### Base structure

In its simplest form an `identity.css` file is a list of css variables defining various aspects of your design system.

Just create an empty stylesheet and define all the variables you need inside the `:root` pseudo-selector as
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

Brand definitions can be divided across multiple files by using `@import` at-rules:

```css
@import 'colors.css'; /* Single quotes are supported */
@import "fonts.css"; /* as well as double quotes */
@import url(sizes.css); /* and urls */

:root {
    /* Other variables (if needed) */
}
```

The imported paths are considered to be relative to the main identity file. The other
linked stylesheets must follow the same structure described in this page and can import others in turn.

Currently `@import` is the only supported at-rule: others like `@media` or `@keyframes` have no result and will
eventually cause some warnings when using the CLI.

#### Naming variables

Even though you're totally allowed to call the variables as you want, following some naming rules may be of help.
A good starting point is suffixing variable names with the name of the css property which normally holds that value:

```css
:root {
    --headings-font-family: 'Raleway', sans-serif;
}
```
