---
title: Get started
index: 0
---
#### Prerequisites

Be sure to have a recent version of [node.js](https://nodejs.org) and [npm](https://npmjs.org) installed.

#### Identity files

Visua is built around the concept of **identity files**: CSS files used as a "config" to store all the characteristics
of a brand identity in the form of CSS variables. Something like this:

```css
:root {
    --primary-color: #276FFF;
    --secondary-color: #00DBFF;
    --font-family: 'Raleway', sans-serif;
    --headings-font-family: 'Montserrat', sans-serif;
    --spacer: 1.2em;
}
```

Use these files to store an abstraction of your brand identity. Everything platform-specific or component-specific
should not be specified here but instead _derive_ from these variables.

The package itself consists of a set of tools to work with this type of files, from parsing them to running code
generation tasks.

#### Install

If you want to use visua API in your node project, install it as a normal dependency:

```bash
$ npm i visua
```

and use it in your module:

```typescript
import {visua} from 'visua';

const styleMap = visua({
    path: 'identity/',
});
```

If you plan to use it to only run code generation plugins, consider installing it as a devDependency:

```bash
$ npm i -D visua
```

#### Running plugins

Plugins are small tasks run by the CLI to perform operations on the parsed identity files such as generating themes
and assets. `visua-bootstrap` is a basic plugin that maps a set of common variables to bootstrap scss variables and
creates for you a `variables.scss` file that you can later use to build your [themed bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming).

Install it by running:

```bash
$ npm i -D visua-bootstrap

# Visua plugins are npm packages whose names start with visua-
```

Now run the plugin (be sure to be in the same directory where `identity.css` is, otherwise `cd` there):

```bash
$ npx visua run bootstrap

# The `npx` prefix is necessary to run binaries from local installations
# in the terminal (but not in package.json scripts).
# More here: https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner.
```

This should have created a `variables.scss` file in the same directory that looks like this:

```scss
$primary-color: #276FFF;
$secondary-color: #00DBFF;
$font-family-base: 'Raleway', sans-serif;
$headings-font-family: 'Montserrat', sans-serif;
$spacer: 1.2em;
```

#### Design tokens

Although variables in identity files and plugins may be used as an alternative to design tokens, the aims are different:
design tokens are mostly used to store design systems configurations while visua is intended to describe brand
identities and facilitate their application to existing design systems (i.e. Material Design).

If you are developing a whole design system dedicated to your brand and want to build platform-specific design
**resources** for your custom components then design tokens may be better for you.

Instead use visua if you want a simple way to easily apply your brand identity to existing design systems on multiple
platforms and frameworks by directly building **themes**. Also, visua is not limited to builds: although building themes
is the most obvious application for plugins, they can perform any kind of operation with the parsed styles.
