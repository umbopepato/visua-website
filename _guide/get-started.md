---
title: Get started
index: 0
---
#### Prerequisites

Be sure to have a recent version of [node.js](https://nodejs.org) and [npm](https://npmjs.org) installed.

#### Install

Install visua as a devDependency in your project:

```bash
$ npm i -D visua
```

(if necessary, initialize an npm package with `npm init`).

#### Identity files

The first step in using visua is creating an `identity.css` file in your project root.
A visua identity file is nothing more than a standard css file made of only css variables, possibly combined.
  
Let's say you want to use visua to describe colors, fonts and sizing of your brand and use that information to build a
bootstrap scss theme for your website. A basic identity file could be the following:

```css
:root {
    --primary-color: #EFEFEF;
    --secondary-color: #4F4F4F;
    --font-family: 'Raleway', sans-serif;
    --headings-font-family: 'Montserrat', sans-serif;
    --spacer: 1.2em;
}
```

#### Run a plugin

Now that you have a basic set of variables it's time to run a plugin to build the theme starting from that file.  
`visua-bootstrap` is a basic plugin that maps a set of variables to bootstrap scss variables and creates
for you a `variables.scss` file that you can later use to build your themed bootstrap.

First install the plugin:

```bash
$ npm i -D visua-bootstrap
```

Now run the plugin using the visua CLI (be sure to be in the same directory where `identity.css` is, otherwise `cd` there):

```bash
$ npx visua run bootstrap
```

This should have created a `variables.scss` file in the same directory that looks like this:

```scss
$primary-color: #EFEFEF;
$secondary-color: #4F4F4F;
$font-family-base: 'Raleway', sans-serif;
$headings-font-family: 'Montserrat', sans-serif;
$spacer: 1.2em;
```
