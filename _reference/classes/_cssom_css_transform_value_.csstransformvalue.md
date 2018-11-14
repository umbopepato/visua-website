---
---
[visua](../README.md) > ["cssom/css-transform-value"](../modules/_cssom_css_transform_value_.md) > [CSSTransformValue](../classes/_cssom_css_transform_value_.csstransformvalue.md)

# Class: CSSTransformValue

## Hierarchy

**CSSTransformValue**

## Index

### Constructors

* [constructor](_cssom_css_transform_value_.csstransformvalue.md#constructor)

### Accessors

* [is2D](_cssom_css_transform_value_.csstransformvalue.md#is2d)
* [length](_cssom_css_transform_value_.csstransformvalue.md#length)

### Methods

* [append](_cssom_css_transform_value_.csstransformvalue.md#append)
* [get](_cssom_css_transform_value_.csstransformvalue.md#get)
* [toMatrix](_cssom_css_transform_value_.csstransformvalue.md#tomatrix)
* [toString](_cssom_css_transform_value_.csstransformvalue.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CSSTransformValue**(transforms: *[CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md)[]*): [CSSTransformValue](_cssom_css_transform_value_.csstransformvalue.md)

*Defined in [cssom/css-transform-value.ts:13](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-transform-value.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| transforms | [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md)[] |

**Returns:** [CSSTransformValue](_cssom_css_transform_value_.csstransformvalue.md)

___

## Accessors

<a id="is2d"></a>

###  is2D

getis2D(): `boolean`

*Defined in [cssom/css-transform-value.ts:29](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-transform-value.ts#L29)*

**Returns:** `boolean`

___
<a id="length"></a>

###  length

getlength(): `number`

*Defined in [cssom/css-transform-value.ts:11](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-transform-value.ts#L11)*

**Returns:** `number`

___

## Methods

<a id="append"></a>

###  append

▸ **append**(component: *[CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md)*): `number`

*Defined in [cssom/css-transform-value.ts:25](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-transform-value.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| component | [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md) |

**Returns:** `number`

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md)

*Defined in [cssom/css-transform-value.ts:21](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-transform-value.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [CSSTransformComponent](../interfaces/_cssom_css_transform_value_.csstransformcomponent.md)

___
<a id="tomatrix"></a>

###  toMatrix

▸ **toMatrix**(): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/css-transform-value.ts:33](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-transform-value.ts#L33)*

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [cssom/css-transform-value.ts:39](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-transform-value.ts#L39)*

**Returns:** `string`

___

