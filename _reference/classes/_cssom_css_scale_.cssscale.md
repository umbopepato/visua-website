---
---
[visua](../README.md) > ["cssom/css-scale"](../modules/_cssom_css_scale_.md) > [CSSScale](../classes/_cssom_css_scale_.cssscale.md)

# Class: CSSScale

## Hierarchy

**CSSScale**

## Implements

* [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md)

## Index

### Constructors

* [constructor](_cssom_css_scale_.cssscale.md#constructor)

### Accessors

* [is2D](_cssom_css_scale_.cssscale.md#is2d)

### Methods

* [toMatrix](_cssom_css_scale_.cssscale.md#tomatrix)
* [toString](_cssom_css_scale_.cssscale.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CSSScale**(x: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*, y: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*, z?: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*): [CSSScale](_cssom_css_scale_.cssscale.md)

*Defined in [cssom/css-scale.ts:22](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-scale.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |
| y | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |
| `Optional` z | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |

**Returns:** [CSSScale](_cssom_css_scale_.cssscale.md)

___

## Accessors

<a id="is2d"></a>

###  is2D

getis2D(): `boolean`

*Defined in [cssom/css-scale.ts:13](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-scale.ts#L13)*

**Returns:** `boolean`

___

## Methods

<a id="tomatrix"></a>

###  toMatrix

▸ **toMatrix**(): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Implementation of [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md).[toMatrix](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md#tomatrix)*

*Defined in [cssom/css-scale.ts:17](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-scale.ts#L17)*

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [cssom/css-scale.ts:34](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-scale.ts#L34)*

**Returns:** `string`

___

