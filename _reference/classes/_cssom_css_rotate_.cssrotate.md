---
---
[visua](../README.md) > ["cssom/css-rotate"](../modules/_cssom_css_rotate_.md) > [CSSRotate](../classes/_cssom_css_rotate_.cssrotate.md)

# Class: CSSRotate

## Hierarchy

**CSSRotate**

## Implements

* [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md)

## Index

### Constructors

* [constructor](_cssom_css_rotate_.cssrotate.md#constructor)

### Properties

* [angle](_cssom_css_rotate_.cssrotate.md#angle)

### Accessors

* [is2D](_cssom_css_rotate_.cssrotate.md#is2d)
* [x](_cssom_css_rotate_.cssrotate.md#x)
* [y](_cssom_css_rotate_.cssrotate.md#y)
* [z](_cssom_css_rotate_.cssrotate.md#z)

### Methods

* [toMatrix](_cssom_css_rotate_.cssrotate.md#tomatrix)
* [toString](_cssom_css_rotate_.cssrotate.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CSSRotate**(angle: *[CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)*, x?: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*, y?: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*, z?: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*): [CSSRotate](_cssom_css_rotate_.cssrotate.md)

*Defined in [cssom/css-rotate.ts:48](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| angle | [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md) |
| `Optional` x | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |
| `Optional` y | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |
| `Optional` z | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |

**Returns:** [CSSRotate](_cssom_css_rotate_.cssrotate.md)

___

## Properties

<a id="angle"></a>

###  angle

**● angle**: *[CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)*

*Defined in [cssom/css-rotate.ts:9](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L9)*

___

## Accessors

<a id="is2d"></a>

###  is2D

getis2D(): `boolean`

*Defined in [cssom/css-rotate.ts:38](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L38)*

**Returns:** `boolean`

___
<a id="x"></a>

###  x

getx():  `number` &#124; [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)setx(val: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*): `void`

*Defined in [cssom/css-rotate.ts:14](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L14)*

**Returns:**  `number` &#124; [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Defined in [cssom/css-rotate.ts:18](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |

**Returns:** `void`

___
<a id="y"></a>

###  y

gety():  `number` &#124; [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)sety(val: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*): `void`

*Defined in [cssom/css-rotate.ts:22](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L22)*

**Returns:**  `number` &#124; [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Defined in [cssom/css-rotate.ts:26](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |

**Returns:** `void`

___
<a id="z"></a>

###  z

getz():  `number` &#124; [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)setz(val: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*): `void`

*Defined in [cssom/css-rotate.ts:30](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L30)*

**Returns:**  `number` &#124; [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Defined in [cssom/css-rotate.ts:34](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |

**Returns:** `void`

___

## Methods

<a id="tomatrix"></a>

###  toMatrix

▸ **toMatrix**(): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Implementation of [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md).[toMatrix](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md#tomatrix)*

*Defined in [cssom/css-rotate.ts:42](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L42)*

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [cssom/css-rotate.ts:69](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-rotate.ts#L69)*

**Returns:** `string`

___

