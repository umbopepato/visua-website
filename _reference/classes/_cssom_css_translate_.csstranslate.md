---
---
[visua](../README.md) > ["cssom/css-translate"](../modules/_cssom_css_translate_.md) > [CSSTranslate](../classes/_cssom_css_translate_.csstranslate.md)

# Class: CSSTranslate

## Hierarchy

**CSSTranslate**

## Implements

* [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md)

## Index

### Constructors

* [constructor](_cssom_css_translate_.csstranslate.md#constructor)

### Properties

* [x](_cssom_css_translate_.csstranslate.md#x)
* [y](_cssom_css_translate_.csstranslate.md#y)
* [z](_cssom_css_translate_.csstranslate.md#z)

### Accessors

* [is2D](_cssom_css_translate_.csstranslate.md#is2d)

### Methods

* [toMatrix](_cssom_css_translate_.csstranslate.md#tomatrix)
* [toString](_cssom_css_translate_.csstranslate.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CSSTranslate**(x: *[CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)*, y: *[CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)*, z?: *[CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)*): [CSSTranslate](_cssom_css_translate_.csstranslate.md)

*Defined in [cssom/css-translate.ts:18](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-translate.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md) |
| y | [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md) |
| `Optional` z | [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md) |

**Returns:** [CSSTranslate](_cssom_css_translate_.csstranslate.md)

___

## Properties

<a id="x"></a>

###  x

**● x**: *[CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)*

*Defined in [cssom/css-translate.ts:20](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-translate.ts#L20)*

___
<a id="y"></a>

###  y

**● y**: *[CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)*

*Defined in [cssom/css-translate.ts:20](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-translate.ts#L20)*

___
<a id="z"></a>

### `<Optional>` z

**● z**: *[CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)*

*Defined in [cssom/css-translate.ts:20](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-translate.ts#L20)*

___

## Accessors

<a id="is2d"></a>

###  is2D

getis2D(): `boolean`

*Defined in [cssom/css-translate.ts:9](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-translate.ts#L9)*

**Returns:** `boolean`

___

## Methods

<a id="tomatrix"></a>

###  toMatrix

▸ **toMatrix**(): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Implementation of [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md).[toMatrix](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md#tomatrix)*

*Defined in [cssom/css-translate.ts:13](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-translate.ts#L13)*

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [cssom/css-translate.ts:33](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-translate.ts#L33)*

**Returns:** `string`

___

