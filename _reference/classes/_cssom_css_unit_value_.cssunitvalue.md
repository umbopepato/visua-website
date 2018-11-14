---
---
[visua](../README.md) > ["cssom/css-unit-value"](../modules/_cssom_css_unit_value_.md) > [CSSUnitValue](../classes/_cssom_css_unit_value_.cssunitvalue.md)

# Class: CSSUnitValue

## Hierarchy

↳  [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

**↳ CSSUnitValue**

## Index

### Constructors

* [constructor](_cssom_css_unit_value_.cssunitvalue.md#constructor)

### Properties

* [type](_cssom_css_unit_value_.cssunitvalue.md#type)
* [unit](_cssom_css_unit_value_.cssunitvalue.md#unit)
* [value](_cssom_css_unit_value_.cssunitvalue.md#value)

### Methods

* [add](_cssom_css_unit_value_.cssunitvalue.md#add)
* [createType](_cssom_css_unit_value_.cssunitvalue.md#createtype)
* [div](_cssom_css_unit_value_.cssunitvalue.md#div)
* [equals](_cssom_css_unit_value_.cssunitvalue.md#equals)
* [max](_cssom_css_unit_value_.cssunitvalue.md#max)
* [min](_cssom_css_unit_value_.cssunitvalue.md#min)
* [mul](_cssom_css_unit_value_.cssunitvalue.md#mul)
* [multiplyUnitMaps](_cssom_css_unit_value_.cssunitvalue.md#multiplyunitmaps)
* [solve](_cssom_css_unit_value_.cssunitvalue.md#solve)
* [sub](_cssom_css_unit_value_.cssunitvalue.md#sub)
* [to](_cssom_css_unit_value_.cssunitvalue.md#to)
* [toString](_cssom_css_unit_value_.cssunitvalue.md#tostring)
* [toUnit](_cssom_css_unit_value_.cssunitvalue.md#tounit)
* [fromSumValue](_cssom_css_unit_value_.cssunitvalue.md#fromsumvalue)
* [rectifyNumberishValue](_cssom_css_unit_value_.cssunitvalue.md#rectifynumberishvalue)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CSSUnitValue**(value: *`number`*, unit: *`string`*): [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)

*Defined in [cssom/css-unit-value.ts:7](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-unit-value.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |
| unit | `string` |

**Returns:** [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)

___

## Properties

<a id="type"></a>

###  type

**● type**: *`CSSNumericType`* =  new Map()

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[type](_cssom_css_numeric_value_.cssnumericvalue.md#type)*

*Defined in [cssom/css-numeric-value.ts:24](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L24)*

___
<a id="unit"></a>

###  unit

**● unit**: *[CSSUnitData](../modules/_cssom_css_.md#cssunitdata)*

*Defined in [cssom/css-unit-value.ts:7](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-unit-value.ts#L7)*

___
<a id="value"></a>

###  value

**● value**: *`number`*

*Defined in [cssom/css-unit-value.ts:6](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-unit-value.ts#L6)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(...values: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[]*): [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[add](_cssom_css_numeric_value_.cssnumericvalue.md#add)*

*Defined in [cssom/css-numeric-value.ts:26](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[] |

**Returns:** [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

___
<a id="createtype"></a>

### `<Protected>` createType

▸ **createType**(unit: *`string`*): `CSSNumericType`

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[createType](_cssom_css_numeric_value_.cssnumericvalue.md#createtype)*

*Defined in [cssom/css-numeric-value.ts:327](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L327)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| unit | `string` |

**Returns:** `CSSNumericType`

___
<a id="div"></a>

###  div

▸ **div**(...values: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[]*): [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[div](_cssom_css_numeric_value_.cssnumericvalue.md#div)*

*Defined in [cssom/css-numeric-value.ts:76](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[] |

**Returns:** [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

___
<a id="equals"></a>

###  equals

▸ **equals**(...values: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[]*): `boolean`

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[equals](_cssom_css_numeric_value_.cssnumericvalue.md#equals)*

*Defined in [cssom/css-numeric-value.ts:123](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[] |

**Returns:** `boolean`

___
<a id="max"></a>

###  max

▸ **max**(...values: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[]*): [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[max](_cssom_css_numeric_value_.cssnumericvalue.md#max)*

*Defined in [cssom/css-numeric-value.ts:102](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[] |

**Returns:** [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

___
<a id="min"></a>

###  min

▸ **min**(...values: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[]*): [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[min](_cssom_css_numeric_value_.cssnumericvalue.md#min)*

*Defined in [cssom/css-numeric-value.ts:81](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L81)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[] |

**Returns:** [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

___
<a id="mul"></a>

###  mul

▸ **mul**(...values: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[]*): [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[mul](_cssom_css_numeric_value_.cssnumericvalue.md#mul)*

*Defined in [cssom/css-numeric-value.ts:52](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[] |

**Returns:** [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

___
<a id="multiplyunitmaps"></a>

### `<Protected>` multiplyUnitMaps

▸ **multiplyUnitMaps**(u1: *[CSSUnitMap](_cssom_css_numeric_value_.cssunitmap.md)*, u2: *[CSSUnitMap](_cssom_css_numeric_value_.cssunitmap.md)*): [CSSUnitMap](_cssom_css_numeric_value_.cssunitmap.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[multiplyUnitMaps](_cssom_css_numeric_value_.cssnumericvalue.md#multiplyunitmaps)*

*Defined in [cssom/css-numeric-value.ts:434](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L434)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| u1 | [CSSUnitMap](_cssom_css_numeric_value_.cssunitmap.md) |
| u2 | [CSSUnitMap](_cssom_css_numeric_value_.cssunitmap.md) |

**Returns:** [CSSUnitMap](_cssom_css_numeric_value_.cssunitmap.md)

___
<a id="solve"></a>

###  solve

▸ **solve**(): [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[solve](_cssom_css_numeric_value_.cssnumericvalue.md#solve)*

*Defined in [cssom/css-numeric-value.ts:162](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L162)*

**Returns:** [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

___
<a id="sub"></a>

###  sub

▸ **sub**(...values: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[]*): [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[sub](_cssom_css_numeric_value_.cssnumericvalue.md#sub)*

*Defined in [cssom/css-numeric-value.ts:47](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)[] |

**Returns:** [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

___
<a id="to"></a>

###  to

▸ **to**(unit: *`string`*): [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[to](_cssom_css_numeric_value_.cssnumericvalue.md#to)*

*Defined in [cssom/css-numeric-value.ts:152](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| unit | `string` |

**Returns:** [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [cssom/css-unit-value.ts:51](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-unit-value.ts#L51)*

**Returns:** `string`

___
<a id="tounit"></a>

###  toUnit

▸ **toUnit**(unit: *`string`*): [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)

*Defined in [cssom/css-unit-value.ts:39](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-unit-value.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| unit | `string` |

**Returns:** [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)

___
<a id="fromsumvalue"></a>

### `<Static>` fromSumValue

▸ **fromSumValue**(sum: *`Array`<`Array`< `number` &#124; [CSSUnitMap](_cssom_css_numeric_value_.cssunitmap.md)>>*): [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)

*Defined in [cssom/css-unit-value.ts:24](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-unit-value.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sum | `Array`<`Array`< `number` &#124; [CSSUnitMap](_cssom_css_numeric_value_.cssunitmap.md)>> |

**Returns:** [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md)

___
<a id="rectifynumberishvalue"></a>

### `<Static>` rectifyNumberishValue

▸ **rectifyNumberishValue**(num: *[CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish)*):  [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md) &#124; [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

*Inherited from [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md).[rectifyNumberishValue](_cssom_css_numeric_value_.cssnumericvalue.md#rectifynumberishvalue)*

*Defined in [cssom/css-numeric-value.ts:174](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-numeric-value.ts#L174)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| num | [CSSNumberish](../modules/_cssom_css_numeric_value_.md#cssnumberish) |

**Returns:**  [CSSUnitValue](_cssom_css_unit_value_.cssunitvalue.md) &#124; [CSSNumericValue](_cssom_css_numeric_value_.cssnumericvalue.md)

___

