---
---
[visua](../README.md) > ["cssom/css-color-value"](../modules/_cssom_css_color_value_.md) > [CSSColorValue](../classes/_cssom_css_color_value_.csscolorvalue.md)

# Class: CSSColorValue

## Hierarchy

 [CSSStyleValue](_cssom_css_style_value_.cssstylevalue.md)

**↳ CSSColorValue**

↳  [CSSHexColor](_cssom_css_color_value_.csshexcolor.md)

↳  [CSSRgbaColor](_cssom_css_color_value_.cssrgbacolor.md)

↳  [CSSHslaColor](_cssom_css_color_value_.csshslacolor.md)

## Index

### Methods

* [isOpaque](_cssom_css_color_value_.csscolorvalue.md#isopaque)
* [to](_cssom_css_color_value_.csscolorvalue.md#to)
* [hslToRgbNumeric](_cssom_css_color_value_.csscolorvalue.md#hsltorgbnumeric)
* [resolveNumericAlpha](_cssom_css_color_value_.csscolorvalue.md#resolvenumericalpha)
* [rgbToHslNumeric](_cssom_css_color_value_.csscolorvalue.md#rgbtohslnumeric)

### Object literals

* [x11ColorsMap](_cssom_css_color_value_.csscolorvalue.md#x11colorsmap)

---

## Methods

<a id="isopaque"></a>

### `<Abstract>` isOpaque

▸ **isOpaque**(): `boolean`

*Defined in [cssom/css-color-value.ts:223](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L223)*

**Returns:** `boolean`

___
<a id="to"></a>

### `<Abstract>` to

▸ **to**(notation: *`string`*): [CSSColorValue](_cssom_css_color_value_.csscolorvalue.md)

*Defined in [cssom/css-color-value.ts:160](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L160)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| notation | `string` |

**Returns:** [CSSColorValue](_cssom_css_color_value_.csscolorvalue.md)

___
<a id="hsltorgbnumeric"></a>

### `<Static>``<Protected>` hslToRgbNumeric

▸ **hslToRgbNumeric**(h: *`number`*, s: *`number`*, l: *`number`*): `number`[]

*Defined in [cssom/css-color-value.ts:198](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L198)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| h | `number` |
| s | `number` |
| l | `number` |

**Returns:** `number`[]

___
<a id="resolvenumericalpha"></a>

### `<Static>``<Protected>` resolveNumericAlpha

▸ **resolveNumericAlpha**(alpha?: * `number` &#124; [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)*): `number`

*Defined in [cssom/css-color-value.ts:215](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L215)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` alpha |  `number` &#124; [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)|

**Returns:** `number`

___
<a id="rgbtohslnumeric"></a>

### `<Static>``<Protected>` rgbToHslNumeric

▸ **rgbToHslNumeric**(r: *`number`*, g: *`number`*, b: *`number`*): `number`[]

*Defined in [cssom/css-color-value.ts:162](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L162)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | `number` |
| g | `number` |
| b | `number` |

**Returns:** `number`[]

___

## Object literals

<a id="x11colorsmap"></a>

### `<Static>` x11ColorsMap

**x11ColorsMap**: *`object`*

*Defined in [cssom/css-color-value.ts:10](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L10)*

<a id="x11colorsmap.aliceblue"></a>

####  aliceblue

**● aliceblue**: *`string`* = "#f0f8ff"

*Defined in [cssom/css-color-value.ts:11](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L11)*

___
<a id="x11colorsmap.antiquewhite"></a>

####  antiquewhite

**● antiquewhite**: *`string`* = "#faebd7"

*Defined in [cssom/css-color-value.ts:12](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L12)*

___
<a id="x11colorsmap.aqua"></a>

####  aqua

**● aqua**: *`string`* = "#00ffff"

*Defined in [cssom/css-color-value.ts:13](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L13)*

___
<a id="x11colorsmap.aquamarine"></a>

####  aquamarine

**● aquamarine**: *`string`* = "#7fffd4"

*Defined in [cssom/css-color-value.ts:14](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L14)*

___
<a id="x11colorsmap.azure"></a>

####  azure

**● azure**: *`string`* = "#f0ffff"

*Defined in [cssom/css-color-value.ts:15](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L15)*

___
<a id="x11colorsmap.beige"></a>

####  beige

**● beige**: *`string`* = "#f5f5dc"

*Defined in [cssom/css-color-value.ts:16](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L16)*

___
<a id="x11colorsmap.bisque"></a>

####  bisque

**● bisque**: *`string`* = "#ffe4c4"

*Defined in [cssom/css-color-value.ts:17](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L17)*

___
<a id="x11colorsmap.black"></a>

####  black

**● black**: *`string`* = "#000000"

*Defined in [cssom/css-color-value.ts:18](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L18)*

___
<a id="x11colorsmap.blanchedalmond"></a>

####  blanchedalmond

**● blanchedalmond**: *`string`* = "#ffebcd"

*Defined in [cssom/css-color-value.ts:19](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L19)*

___
<a id="x11colorsmap.blue"></a>

####  blue

**● blue**: *`string`* = "#0000ff"

*Defined in [cssom/css-color-value.ts:20](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L20)*

___
<a id="x11colorsmap.blueviolet"></a>

####  blueviolet

**● blueviolet**: *`string`* = "#8a2be2"

*Defined in [cssom/css-color-value.ts:21](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L21)*

___
<a id="x11colorsmap.brown"></a>

####  brown

**● brown**: *`string`* = "#a52a2a"

*Defined in [cssom/css-color-value.ts:22](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L22)*

___
<a id="x11colorsmap.burlywood"></a>

####  burlywood

**● burlywood**: *`string`* = "#deb887"

*Defined in [cssom/css-color-value.ts:23](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L23)*

___
<a id="x11colorsmap.cadetblue"></a>

####  cadetblue

**● cadetblue**: *`string`* = "#5f9ea0"

*Defined in [cssom/css-color-value.ts:24](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L24)*

___
<a id="x11colorsmap.chartreuse"></a>

####  chartreuse

**● chartreuse**: *`string`* = "#7fff00"

*Defined in [cssom/css-color-value.ts:25](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L25)*

___
<a id="x11colorsmap.chocolate"></a>

####  chocolate

**● chocolate**: *`string`* = "#d2691e"

*Defined in [cssom/css-color-value.ts:26](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L26)*

___
<a id="x11colorsmap.coral"></a>

####  coral

**● coral**: *`string`* = "#ff7f50"

*Defined in [cssom/css-color-value.ts:27](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L27)*

___
<a id="x11colorsmap.cornflowerblue"></a>

####  cornflowerblue

**● cornflowerblue**: *`string`* = "#6495ed"

*Defined in [cssom/css-color-value.ts:28](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L28)*

___
<a id="x11colorsmap.cornsilk"></a>

####  cornsilk

**● cornsilk**: *`string`* = "#fff8dc"

*Defined in [cssom/css-color-value.ts:29](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L29)*

___
<a id="x11colorsmap.crimson"></a>

####  crimson

**● crimson**: *`string`* = "#dc143c"

*Defined in [cssom/css-color-value.ts:30](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L30)*

___
<a id="x11colorsmap.cyan"></a>

####  cyan

**● cyan**: *`string`* = "#00ffff"

*Defined in [cssom/css-color-value.ts:31](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L31)*

___
<a id="x11colorsmap.darkblue"></a>

####  darkblue

**● darkblue**: *`string`* = "#00008b"

*Defined in [cssom/css-color-value.ts:32](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L32)*

___
<a id="x11colorsmap.darkcyan"></a>

####  darkcyan

**● darkcyan**: *`string`* = "#008b8b"

*Defined in [cssom/css-color-value.ts:33](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L33)*

___
<a id="x11colorsmap.darkgoldenrod"></a>

####  darkgoldenrod

**● darkgoldenrod**: *`string`* = "#b8860b"

*Defined in [cssom/css-color-value.ts:34](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L34)*

___
<a id="x11colorsmap.darkgray"></a>

####  darkgray

**● darkgray**: *`string`* = "#a9a9a9"

*Defined in [cssom/css-color-value.ts:35](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L35)*

___
<a id="x11colorsmap.darkgreen"></a>

####  darkgreen

**● darkgreen**: *`string`* = "#006400"

*Defined in [cssom/css-color-value.ts:36](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L36)*

___
<a id="x11colorsmap.darkgrey"></a>

####  darkgrey

**● darkgrey**: *`string`* = "#a9a9a9"

*Defined in [cssom/css-color-value.ts:37](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L37)*

___
<a id="x11colorsmap.darkkhaki"></a>

####  darkkhaki

**● darkkhaki**: *`string`* = "#bdb76b"

*Defined in [cssom/css-color-value.ts:38](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L38)*

___
<a id="x11colorsmap.darkmagenta"></a>

####  darkmagenta

**● darkmagenta**: *`string`* = "#8b008b"

*Defined in [cssom/css-color-value.ts:39](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L39)*

___
<a id="x11colorsmap.darkolivegreen"></a>

####  darkolivegreen

**● darkolivegreen**: *`string`* = "#556b2f"

*Defined in [cssom/css-color-value.ts:40](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L40)*

___
<a id="x11colorsmap.darkorange"></a>

####  darkorange

**● darkorange**: *`string`* = "#ff8c00"

*Defined in [cssom/css-color-value.ts:41](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L41)*

___
<a id="x11colorsmap.darkorchid"></a>

####  darkorchid

**● darkorchid**: *`string`* = "#9932cc"

*Defined in [cssom/css-color-value.ts:42](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L42)*

___
<a id="x11colorsmap.darkred"></a>

####  darkred

**● darkred**: *`string`* = "#8b0000"

*Defined in [cssom/css-color-value.ts:43](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L43)*

___
<a id="x11colorsmap.darksalmon"></a>

####  darksalmon

**● darksalmon**: *`string`* = "#e9967a"

*Defined in [cssom/css-color-value.ts:44](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L44)*

___
<a id="x11colorsmap.darkseagreen"></a>

####  darkseagreen

**● darkseagreen**: *`string`* = "#8fbc8f"

*Defined in [cssom/css-color-value.ts:45](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L45)*

___
<a id="x11colorsmap.darkslateblue"></a>

####  darkslateblue

**● darkslateblue**: *`string`* = "#483d8b"

*Defined in [cssom/css-color-value.ts:46](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L46)*

___
<a id="x11colorsmap.darkslategray"></a>

####  darkslategray

**● darkslategray**: *`string`* = "#2f4f4f"

*Defined in [cssom/css-color-value.ts:47](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L47)*

___
<a id="x11colorsmap.darkslategrey"></a>

####  darkslategrey

**● darkslategrey**: *`string`* = "#2f4f4f"

*Defined in [cssom/css-color-value.ts:48](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L48)*

___
<a id="x11colorsmap.darkturquoise"></a>

####  darkturquoise

**● darkturquoise**: *`string`* = "#00ced1"

*Defined in [cssom/css-color-value.ts:49](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L49)*

___
<a id="x11colorsmap.darkviolet"></a>

####  darkviolet

**● darkviolet**: *`string`* = "#9400d3"

*Defined in [cssom/css-color-value.ts:50](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L50)*

___
<a id="x11colorsmap.deeppink"></a>

####  deeppink

**● deeppink**: *`string`* = "#ff1493"

*Defined in [cssom/css-color-value.ts:51](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L51)*

___
<a id="x11colorsmap.deepskyblue"></a>

####  deepskyblue

**● deepskyblue**: *`string`* = "#00bfff"

*Defined in [cssom/css-color-value.ts:52](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L52)*

___
<a id="x11colorsmap.dimgray"></a>

####  dimgray

**● dimgray**: *`string`* = "#696969"

*Defined in [cssom/css-color-value.ts:53](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L53)*

___
<a id="x11colorsmap.dimgrey"></a>

####  dimgrey

**● dimgrey**: *`string`* = "#696969"

*Defined in [cssom/css-color-value.ts:54](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L54)*

___
<a id="x11colorsmap.dodgerblue"></a>

####  dodgerblue

**● dodgerblue**: *`string`* = "#1e90ff"

*Defined in [cssom/css-color-value.ts:55](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L55)*

___
<a id="x11colorsmap.firebrick"></a>

####  firebrick

**● firebrick**: *`string`* = "#b22222"

*Defined in [cssom/css-color-value.ts:56](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L56)*

___
<a id="x11colorsmap.floralwhite"></a>

####  floralwhite

**● floralwhite**: *`string`* = "#fffaf0"

*Defined in [cssom/css-color-value.ts:57](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L57)*

___
<a id="x11colorsmap.forestgreen"></a>

####  forestgreen

**● forestgreen**: *`string`* = "#228b22"

*Defined in [cssom/css-color-value.ts:58](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L58)*

___
<a id="x11colorsmap.fuchsia"></a>

####  fuchsia

**● fuchsia**: *`string`* = "#ff00ff"

*Defined in [cssom/css-color-value.ts:59](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L59)*

___
<a id="x11colorsmap.gainsboro"></a>

####  gainsboro

**● gainsboro**: *`string`* = "#dcdcdc"

*Defined in [cssom/css-color-value.ts:60](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L60)*

___
<a id="x11colorsmap.ghostwhite"></a>

####  ghostwhite

**● ghostwhite**: *`string`* = "#f8f8ff"

*Defined in [cssom/css-color-value.ts:61](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L61)*

___
<a id="x11colorsmap.gold"></a>

####  gold

**● gold**: *`string`* = "#ffd700"

*Defined in [cssom/css-color-value.ts:62](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L62)*

___
<a id="x11colorsmap.goldenrod"></a>

####  goldenrod

**● goldenrod**: *`string`* = "#daa520"

*Defined in [cssom/css-color-value.ts:63](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L63)*

___
<a id="x11colorsmap.gray"></a>

####  gray

**● gray**: *`string`* = "#808080"

*Defined in [cssom/css-color-value.ts:64](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L64)*

___
<a id="x11colorsmap.green"></a>

####  green

**● green**: *`string`* = "#008000"

*Defined in [cssom/css-color-value.ts:65](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L65)*

___
<a id="x11colorsmap.greenyellow"></a>

####  greenyellow

**● greenyellow**: *`string`* = "#adff2f"

*Defined in [cssom/css-color-value.ts:66](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L66)*

___
<a id="x11colorsmap.grey"></a>

####  grey

**● grey**: *`string`* = "#808080"

*Defined in [cssom/css-color-value.ts:67](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L67)*

___
<a id="x11colorsmap.honeydew"></a>

####  honeydew

**● honeydew**: *`string`* = "#f0fff0"

*Defined in [cssom/css-color-value.ts:68](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L68)*

___
<a id="x11colorsmap.hotpink"></a>

####  hotpink

**● hotpink**: *`string`* = "#ff69b4"

*Defined in [cssom/css-color-value.ts:69](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L69)*

___
<a id="x11colorsmap.indianred"></a>

####  indianred

**● indianred**: *`string`* = "#cd5c5c"

*Defined in [cssom/css-color-value.ts:70](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L70)*

___
<a id="x11colorsmap.indigo"></a>

####  indigo

**● indigo**: *`string`* = "#4b0082"

*Defined in [cssom/css-color-value.ts:71](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L71)*

___
<a id="x11colorsmap.ivory"></a>

####  ivory

**● ivory**: *`string`* = "#fffff0"

*Defined in [cssom/css-color-value.ts:72](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L72)*

___
<a id="x11colorsmap.khaki"></a>

####  khaki

**● khaki**: *`string`* = "#f0e68c"

*Defined in [cssom/css-color-value.ts:73](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L73)*

___
<a id="x11colorsmap.lavender"></a>

####  lavender

**● lavender**: *`string`* = "#e6e6fa"

*Defined in [cssom/css-color-value.ts:74](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L74)*

___
<a id="x11colorsmap.lavenderblush"></a>

####  lavenderblush

**● lavenderblush**: *`string`* = "#fff0f5"

*Defined in [cssom/css-color-value.ts:75](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L75)*

___
<a id="x11colorsmap.lawngreen"></a>

####  lawngreen

**● lawngreen**: *`string`* = "#7cfc00"

*Defined in [cssom/css-color-value.ts:76](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L76)*

___
<a id="x11colorsmap.lemonchiffon"></a>

####  lemonchiffon

**● lemonchiffon**: *`string`* = "#fffacd"

*Defined in [cssom/css-color-value.ts:77](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L77)*

___
<a id="x11colorsmap.lightblue"></a>

####  lightblue

**● lightblue**: *`string`* = "#add8e6"

*Defined in [cssom/css-color-value.ts:78](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L78)*

___
<a id="x11colorsmap.lightcoral"></a>

####  lightcoral

**● lightcoral**: *`string`* = "#f08080"

*Defined in [cssom/css-color-value.ts:79](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L79)*

___
<a id="x11colorsmap.lightcyan"></a>

####  lightcyan

**● lightcyan**: *`string`* = "#e0ffff"

*Defined in [cssom/css-color-value.ts:80](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L80)*

___
<a id="x11colorsmap.lightgoldenrodyellow"></a>

####  lightgoldenrodyellow

**● lightgoldenrodyellow**: *`string`* = "#fafad2"

*Defined in [cssom/css-color-value.ts:81](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L81)*

___
<a id="x11colorsmap.lightgray"></a>

####  lightgray

**● lightgray**: *`string`* = "#d3d3d3"

*Defined in [cssom/css-color-value.ts:82](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L82)*

___
<a id="x11colorsmap.lightgreen"></a>

####  lightgreen

**● lightgreen**: *`string`* = "#90ee90"

*Defined in [cssom/css-color-value.ts:83](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L83)*

___
<a id="x11colorsmap.lightgrey"></a>

####  lightgrey

**● lightgrey**: *`string`* = "#d3d3d3"

*Defined in [cssom/css-color-value.ts:84](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L84)*

___
<a id="x11colorsmap.lightpink"></a>

####  lightpink

**● lightpink**: *`string`* = "#ffb6c1"

*Defined in [cssom/css-color-value.ts:85](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L85)*

___
<a id="x11colorsmap.lightsalmon"></a>

####  lightsalmon

**● lightsalmon**: *`string`* = "#ffa07a"

*Defined in [cssom/css-color-value.ts:86](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L86)*

___
<a id="x11colorsmap.lightseagreen"></a>

####  lightseagreen

**● lightseagreen**: *`string`* = "#20b2aa"

*Defined in [cssom/css-color-value.ts:87](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L87)*

___
<a id="x11colorsmap.lightskyblue"></a>

####  lightskyblue

**● lightskyblue**: *`string`* = "#87cefa"

*Defined in [cssom/css-color-value.ts:88](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L88)*

___
<a id="x11colorsmap.lightslategray"></a>

####  lightslategray

**● lightslategray**: *`string`* = "#778899"

*Defined in [cssom/css-color-value.ts:89](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L89)*

___
<a id="x11colorsmap.lightslategrey"></a>

####  lightslategrey

**● lightslategrey**: *`string`* = "#778899"

*Defined in [cssom/css-color-value.ts:90](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L90)*

___
<a id="x11colorsmap.lightsteelblue"></a>

####  lightsteelblue

**● lightsteelblue**: *`string`* = "#b0c4de"

*Defined in [cssom/css-color-value.ts:91](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L91)*

___
<a id="x11colorsmap.lightyellow"></a>

####  lightyellow

**● lightyellow**: *`string`* = "#ffffe0"

*Defined in [cssom/css-color-value.ts:92](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L92)*

___
<a id="x11colorsmap.lime"></a>

####  lime

**● lime**: *`string`* = "#00ff00"

*Defined in [cssom/css-color-value.ts:93](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L93)*

___
<a id="x11colorsmap.limegreen"></a>

####  limegreen

**● limegreen**: *`string`* = "#32cd32"

*Defined in [cssom/css-color-value.ts:94](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L94)*

___
<a id="x11colorsmap.linen"></a>

####  linen

**● linen**: *`string`* = "#faf0e6"

*Defined in [cssom/css-color-value.ts:95](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L95)*

___
<a id="x11colorsmap.magenta"></a>

####  magenta

**● magenta**: *`string`* = "#ff00ff"

*Defined in [cssom/css-color-value.ts:96](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L96)*

___
<a id="x11colorsmap.maroon"></a>

####  maroon

**● maroon**: *`string`* = "#800000"

*Defined in [cssom/css-color-value.ts:97](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L97)*

___
<a id="x11colorsmap.mediumaquamarine"></a>

####  mediumaquamarine

**● mediumaquamarine**: *`string`* = "#66cdaa"

*Defined in [cssom/css-color-value.ts:98](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L98)*

___
<a id="x11colorsmap.mediumblue"></a>

####  mediumblue

**● mediumblue**: *`string`* = "#0000cd"

*Defined in [cssom/css-color-value.ts:99](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L99)*

___
<a id="x11colorsmap.mediumorchid"></a>

####  mediumorchid

**● mediumorchid**: *`string`* = "#ba55d3"

*Defined in [cssom/css-color-value.ts:100](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L100)*

___
<a id="x11colorsmap.mediumpurple"></a>

####  mediumpurple

**● mediumpurple**: *`string`* = "#9370db"

*Defined in [cssom/css-color-value.ts:101](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L101)*

___
<a id="x11colorsmap.mediumseagreen"></a>

####  mediumseagreen

**● mediumseagreen**: *`string`* = "#3cb371"

*Defined in [cssom/css-color-value.ts:102](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L102)*

___
<a id="x11colorsmap.mediumslateblue"></a>

####  mediumslateblue

**● mediumslateblue**: *`string`* = "#7b68ee"

*Defined in [cssom/css-color-value.ts:103](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L103)*

___
<a id="x11colorsmap.mediumspringgreen"></a>

####  mediumspringgreen

**● mediumspringgreen**: *`string`* = "#00fa9a"

*Defined in [cssom/css-color-value.ts:104](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L104)*

___
<a id="x11colorsmap.mediumturquoise"></a>

####  mediumturquoise

**● mediumturquoise**: *`string`* = "#48d1cc"

*Defined in [cssom/css-color-value.ts:105](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L105)*

___
<a id="x11colorsmap.mediumvioletred"></a>

####  mediumvioletred

**● mediumvioletred**: *`string`* = "#c71585"

*Defined in [cssom/css-color-value.ts:106](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L106)*

___
<a id="x11colorsmap.midnightblue"></a>

####  midnightblue

**● midnightblue**: *`string`* = "#191970"

*Defined in [cssom/css-color-value.ts:107](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L107)*

___
<a id="x11colorsmap.mintcream"></a>

####  mintcream

**● mintcream**: *`string`* = "#f5fffa"

*Defined in [cssom/css-color-value.ts:108](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L108)*

___
<a id="x11colorsmap.mistyrose"></a>

####  mistyrose

**● mistyrose**: *`string`* = "#ffe4e1"

*Defined in [cssom/css-color-value.ts:109](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L109)*

___
<a id="x11colorsmap.moccasin"></a>

####  moccasin

**● moccasin**: *`string`* = "#ffe4b5"

*Defined in [cssom/css-color-value.ts:110](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L110)*

___
<a id="x11colorsmap.navajowhite"></a>

####  navajowhite

**● navajowhite**: *`string`* = "#ffdead"

*Defined in [cssom/css-color-value.ts:111](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L111)*

___
<a id="x11colorsmap.navy"></a>

####  navy

**● navy**: *`string`* = "#000080"

*Defined in [cssom/css-color-value.ts:112](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L112)*

___
<a id="x11colorsmap.oldlace"></a>

####  oldlace

**● oldlace**: *`string`* = "#fdf5e6"

*Defined in [cssom/css-color-value.ts:113](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L113)*

___
<a id="x11colorsmap.olive"></a>

####  olive

**● olive**: *`string`* = "#808000"

*Defined in [cssom/css-color-value.ts:114](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L114)*

___
<a id="x11colorsmap.olivedrab"></a>

####  olivedrab

**● olivedrab**: *`string`* = "#6b8e23"

*Defined in [cssom/css-color-value.ts:115](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L115)*

___
<a id="x11colorsmap.orange"></a>

####  orange

**● orange**: *`string`* = "#ffa500"

*Defined in [cssom/css-color-value.ts:116](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L116)*

___
<a id="x11colorsmap.orangered"></a>

####  orangered

**● orangered**: *`string`* = "#ff4500"

*Defined in [cssom/css-color-value.ts:117](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L117)*

___
<a id="x11colorsmap.orchid"></a>

####  orchid

**● orchid**: *`string`* = "#da70d6"

*Defined in [cssom/css-color-value.ts:118](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L118)*

___
<a id="x11colorsmap.palegoldenrod"></a>

####  palegoldenrod

**● palegoldenrod**: *`string`* = "#eee8aa"

*Defined in [cssom/css-color-value.ts:119](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L119)*

___
<a id="x11colorsmap.palegreen"></a>

####  palegreen

**● palegreen**: *`string`* = "#98fb98"

*Defined in [cssom/css-color-value.ts:120](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L120)*

___
<a id="x11colorsmap.paleturquoise"></a>

####  paleturquoise

**● paleturquoise**: *`string`* = "#afeeee"

*Defined in [cssom/css-color-value.ts:121](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L121)*

___
<a id="x11colorsmap.palevioletred"></a>

####  palevioletred

**● palevioletred**: *`string`* = "#db7093"

*Defined in [cssom/css-color-value.ts:122](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L122)*

___
<a id="x11colorsmap.papayawhip"></a>

####  papayawhip

**● papayawhip**: *`string`* = "#ffefd5"

*Defined in [cssom/css-color-value.ts:123](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L123)*

___
<a id="x11colorsmap.peachpuff"></a>

####  peachpuff

**● peachpuff**: *`string`* = "#ffdab9"

*Defined in [cssom/css-color-value.ts:124](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L124)*

___
<a id="x11colorsmap.peru"></a>

####  peru

**● peru**: *`string`* = "#cd853f"

*Defined in [cssom/css-color-value.ts:125](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L125)*

___
<a id="x11colorsmap.pink"></a>

####  pink

**● pink**: *`string`* = "#ffc0cb"

*Defined in [cssom/css-color-value.ts:126](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L126)*

___
<a id="x11colorsmap.plum"></a>

####  plum

**● plum**: *`string`* = "#dda0dd"

*Defined in [cssom/css-color-value.ts:127](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L127)*

___
<a id="x11colorsmap.powderblue"></a>

####  powderblue

**● powderblue**: *`string`* = "#b0e0e6"

*Defined in [cssom/css-color-value.ts:128](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L128)*

___
<a id="x11colorsmap.purple"></a>

####  purple

**● purple**: *`string`* = "#800080"

*Defined in [cssom/css-color-value.ts:129](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L129)*

___
<a id="x11colorsmap.red"></a>

####  red

**● red**: *`string`* = "#ff0000"

*Defined in [cssom/css-color-value.ts:130](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L130)*

___
<a id="x11colorsmap.rosybrown"></a>

####  rosybrown

**● rosybrown**: *`string`* = "#bc8f8f"

*Defined in [cssom/css-color-value.ts:131](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L131)*

___
<a id="x11colorsmap.royalblue"></a>

####  royalblue

**● royalblue**: *`string`* = "#4169e1"

*Defined in [cssom/css-color-value.ts:132](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L132)*

___
<a id="x11colorsmap.saddlebrown"></a>

####  saddlebrown

**● saddlebrown**: *`string`* = "#8b4513"

*Defined in [cssom/css-color-value.ts:133](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L133)*

___
<a id="x11colorsmap.salmon"></a>

####  salmon

**● salmon**: *`string`* = "#fa8072"

*Defined in [cssom/css-color-value.ts:134](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L134)*

___
<a id="x11colorsmap.sandybrown"></a>

####  sandybrown

**● sandybrown**: *`string`* = "#f4a460"

*Defined in [cssom/css-color-value.ts:135](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L135)*

___
<a id="x11colorsmap.seagreen"></a>

####  seagreen

**● seagreen**: *`string`* = "#2e8b57"

*Defined in [cssom/css-color-value.ts:136](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L136)*

___
<a id="x11colorsmap.seashell"></a>

####  seashell

**● seashell**: *`string`* = "#fff5ee"

*Defined in [cssom/css-color-value.ts:137](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L137)*

___
<a id="x11colorsmap.sienna"></a>

####  sienna

**● sienna**: *`string`* = "#a0522d"

*Defined in [cssom/css-color-value.ts:138](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L138)*

___
<a id="x11colorsmap.silver"></a>

####  silver

**● silver**: *`string`* = "#c0c0c0"

*Defined in [cssom/css-color-value.ts:139](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L139)*

___
<a id="x11colorsmap.skyblue"></a>

####  skyblue

**● skyblue**: *`string`* = "#87ceeb"

*Defined in [cssom/css-color-value.ts:140](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L140)*

___
<a id="x11colorsmap.slateblue"></a>

####  slateblue

**● slateblue**: *`string`* = "#6a5acd"

*Defined in [cssom/css-color-value.ts:141](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L141)*

___
<a id="x11colorsmap.slategray"></a>

####  slategray

**● slategray**: *`string`* = "#708090"

*Defined in [cssom/css-color-value.ts:142](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L142)*

___
<a id="x11colorsmap.slategrey"></a>

####  slategrey

**● slategrey**: *`string`* = "#708090"

*Defined in [cssom/css-color-value.ts:143](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L143)*

___
<a id="x11colorsmap.snow"></a>

####  snow

**● snow**: *`string`* = "#fffafa"

*Defined in [cssom/css-color-value.ts:144](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L144)*

___
<a id="x11colorsmap.springgreen"></a>

####  springgreen

**● springgreen**: *`string`* = "#00ff7f"

*Defined in [cssom/css-color-value.ts:145](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L145)*

___
<a id="x11colorsmap.steelblue"></a>

####  steelblue

**● steelblue**: *`string`* = "#4682b4"

*Defined in [cssom/css-color-value.ts:146](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L146)*

___
<a id="x11colorsmap.tan"></a>

####  tan

**● tan**: *`string`* = "#d2b48c"

*Defined in [cssom/css-color-value.ts:147](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L147)*

___
<a id="x11colorsmap.teal"></a>

####  teal

**● teal**: *`string`* = "#008080"

*Defined in [cssom/css-color-value.ts:148](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L148)*

___
<a id="x11colorsmap.thistle"></a>

####  thistle

**● thistle**: *`string`* = "#d8bfd8"

*Defined in [cssom/css-color-value.ts:149](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L149)*

___
<a id="x11colorsmap.tomato"></a>

####  tomato

**● tomato**: *`string`* = "#ff6347"

*Defined in [cssom/css-color-value.ts:150](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L150)*

___
<a id="x11colorsmap.turquoise"></a>

####  turquoise

**● turquoise**: *`string`* = "#40e0d0"

*Defined in [cssom/css-color-value.ts:151](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L151)*

___
<a id="x11colorsmap.violet"></a>

####  violet

**● violet**: *`string`* = "#ee82ee"

*Defined in [cssom/css-color-value.ts:152](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L152)*

___
<a id="x11colorsmap.wheat"></a>

####  wheat

**● wheat**: *`string`* = "#f5deb3"

*Defined in [cssom/css-color-value.ts:153](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L153)*

___
<a id="x11colorsmap.white"></a>

####  white

**● white**: *`string`* = "#ffffff"

*Defined in [cssom/css-color-value.ts:154](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L154)*

___
<a id="x11colorsmap.whitesmoke"></a>

####  whitesmoke

**● whitesmoke**: *`string`* = "#f5f5f5"

*Defined in [cssom/css-color-value.ts:155](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L155)*

___
<a id="x11colorsmap.yellow"></a>

####  yellow

**● yellow**: *`string`* = "#ffff00"

*Defined in [cssom/css-color-value.ts:156](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L156)*

___
<a id="x11colorsmap.yellowgreen"></a>

####  yellowgreen

**● yellowgreen**: *`string`* = "#9acd32"

*Defined in [cssom/css-color-value.ts:157](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-color-value.ts#L157)*

___

___

