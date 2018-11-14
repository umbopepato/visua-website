---
---
[visua](../README.md) > ["cssom/css-font-value"](../modules/_cssom_css_font_value_.md) > [CSSFontValue](../classes/_cssom_css_font_value_.cssfontvalue.md)

# Class: CSSFontValue

## Hierarchy

 [CSSStyleValue](_cssom_css_style_value_.cssstylevalue.md)

**↳ CSSFontValue**

## Index

### Constructors

* [constructor](_cssom_css_font_value_.cssfontvalue.md#constructor)

### Properties

* [family](_cssom_css_font_value_.cssfontvalue.md#family)
* [lineHeight](_cssom_css_font_value_.cssfontvalue.md#lineheight)
* [size](_cssom_css_font_value_.cssfontvalue.md#size)
* [sizeKeywords](_cssom_css_font_value_.cssfontvalue.md#sizekeywords)
* [stretch](_cssom_css_font_value_.cssfontvalue.md#stretch)
* [style](_cssom_css_font_value_.cssfontvalue.md#style)
* [variant](_cssom_css_font_value_.cssfontvalue.md#variant)
* [weight](_cssom_css_font_value_.cssfontvalue.md#weight)
* [stretchKeywords](_cssom_css_font_value_.cssfontvalue.md#stretchkeywords)
* [styleKeywords](_cssom_css_font_value_.cssfontvalue.md#stylekeywords)
* [variantKeywords](_cssom_css_font_value_.cssfontvalue.md#variantkeywords)
* [weightKeywords](_cssom_css_font_value_.cssfontvalue.md#weightkeywords)

### Methods

* [toString](_cssom_css_font_value_.cssfontvalue.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CSSFontValue**(components: *[CSSFontComponents](../interfaces/_cssom_css_font_value_.cssfontcomponents.md)*): [CSSFontValue](_cssom_css_font_value_.cssfontvalue.md)

*Defined in [cssom/css-font-value.ts:48](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| components | [CSSFontComponents](../interfaces/_cssom_css_font_value_.cssfontcomponents.md) |

**Returns:** [CSSFontValue](_cssom_css_font_value_.cssfontvalue.md)

___

## Properties

<a id="family"></a>

###  family

**● family**: *[CSSFontFamilyValue](_cssom_css_font_family_value_.cssfontfamilyvalue.md)*

*Defined in [cssom/css-font-value.ts:48](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L48)*

___
<a id="lineheight"></a>

###  lineHeight

**● lineHeight**: * [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md) &#124; [CSSKeywordValue](_cssom_css_keyword_value_.csskeywordvalue.md)
*

*Defined in [cssom/css-font-value.ts:47](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L47)*

___
<a id="size"></a>

###  size

**● size**: * [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md) &#124; [CSSKeywordValue](_cssom_css_keyword_value_.csskeywordvalue.md)
*

*Defined in [cssom/css-font-value.ts:37](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L37)*

___
<a id="sizekeywords"></a>

###  sizeKeywords

**● sizeKeywords**: *`string`[]* =  [
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        'xx-large',
    ]

*Defined in [cssom/css-font-value.ts:38](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L38)*

___
<a id="stretch"></a>

###  stretch

**● stretch**: *[CSSKeywordValue](_cssom_css_keyword_value_.csskeywordvalue.md)*

*Defined in [cssom/css-font-value.ts:26](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L26)*

___
<a id="style"></a>

###  style

**● style**: * [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md) &#124; [CSSKeywordValue](_cssom_css_keyword_value_.csskeywordvalue.md)
*

*Defined in [cssom/css-font-value.ts:20](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L20)*

___
<a id="variant"></a>

###  variant

**● variant**: *[CSSKeywordValue](_cssom_css_keyword_value_.csskeywordvalue.md)*

*Defined in [cssom/css-font-value.ts:22](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L22)*

___
<a id="weight"></a>

###  weight

**● weight**: * [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md) &#124; [CSSKeywordValue](_cssom_css_keyword_value_.csskeywordvalue.md)
*

*Defined in [cssom/css-font-value.ts:24](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L24)*

___
<a id="stretchkeywords"></a>

### `<Static>` stretchKeywords

**● stretchKeywords**: *`string`[]* =  [
        'ultra-condensed',
        'extra-condensed',
        'condensed',
        'semi-condensed',
        'semi-expanded',
        'expanded',
        'extra-expanded',
        'ultra-expanded'
    ]

*Defined in [cssom/css-font-value.ts:27](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L27)*

___
<a id="stylekeywords"></a>

### `<Static>` styleKeywords

**● styleKeywords**: *`string`[]* =  ['italic']

*Defined in [cssom/css-font-value.ts:21](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L21)*

___
<a id="variantkeywords"></a>

### `<Static>` variantKeywords

**● variantKeywords**: *`string`[]* =  ['small-caps']

*Defined in [cssom/css-font-value.ts:23](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L23)*

___
<a id="weightkeywords"></a>

### `<Static>` weightKeywords

**● weightKeywords**: *`string`[]* =  ['bold', 'bolder', 'lighter']

*Defined in [cssom/css-font-value.ts:25](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L25)*

___

## Methods

<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [cssom/css-font-value.ts:62](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-font-value.ts#L62)*

**Returns:** `string`

___

