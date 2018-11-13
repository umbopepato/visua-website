---
title: Get started
index: 0
---
#### Prerequisites

Visua is compatible with nodejs versions greater than ...  
This guide assumes your environment is already set up with [node.js](https://nodejs.org) and [npm](https://npmjs.org).

#### Install

Install visua globally

```bash
$ npm install -g visua
```

or locally if you plan to use it in you CI/CD pipelines

```bash
$ npm install --save visua
```

#### Create your first identity file

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
`visua-bootstrap` is a basic plugin that maps a set of commonly used variables to bootstrap scss variables and creates
for you a `variables.scss` file that you can later use to build your themed bootstrap.

First install the plugin:

```bash
$ npm install --save visua-bootstrap
```

note that all visua plugins are npm packages that start with `visua-`.

Now run the plugin using the visua CLI (be sure of being in the same directory where `identity.css` is, otherwise `cd` there):

```bash
$ visua run bootstrap
```

This should have created a `variables.scss` file in the same directory that looks like this:

```scss
$primary-color: #EFEFEF;
$secondary-color: #4F4F4F;
$font-family-base: 'Raleway', sans-serif;
$headings-font-family: 'Montserrat', sans-serif;
$spacer: 1.2em;
```