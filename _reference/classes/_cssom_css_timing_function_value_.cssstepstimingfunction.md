---
---
[visua](../README.md) > ["cssom/css-timing-function-value"](../modules/_cssom_css_timing_function_value_.md) > [CSSStepsTimingFunction](../classes/_cssom_css_timing_function_value_.cssstepstimingfunction.md)

# Class: CSSStepsTimingFunction

## Hierarchy

↳  [CSSTimingFunctionValue](_cssom_css_timing_function_value_.csstimingfunctionvalue.md)

**↳ CSSStepsTimingFunction**

## Index

### Constructors

* [constructor](_cssom_css_timing_function_value_.cssstepstimingfunction.md#constructor)

### Properties

* [position](_cssom_css_timing_function_value_.cssstepstimingfunction.md#position)
* [steps](_cssom_css_timing_function_value_.cssstepstimingfunction.md#steps)
* [type](_cssom_css_timing_function_value_.cssstepstimingfunction.md#type)

### Methods

* [is](_cssom_css_timing_function_value_.cssstepstimingfunction.md#is)
* [toString](_cssom_css_timing_function_value_.cssstepstimingfunction.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CSSStepsTimingFunction**(steps: *`number`*, position?: *[CSSStepPosition](../enums/_cssom_css_timing_function_value_.cssstepposition.md)*): [CSSStepsTimingFunction](_cssom_css_timing_function_value_.cssstepstimingfunction.md)

*Overrides [CSSTimingFunctionValue](_cssom_css_timing_function_value_.csstimingfunctionvalue.md).[constructor](_cssom_css_timing_function_value_.csstimingfunctionvalue.md#constructor)*

*Defined in [cssom/css-timing-function-value.ts:52](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-timing-function-value.ts#L52)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| steps | `number` | - |
| `Default value` position | [CSSStepPosition](../enums/_cssom_css_timing_function_value_.cssstepposition.md) |  CSSStepPosition.end |

**Returns:** [CSSStepsTimingFunction](_cssom_css_timing_function_value_.cssstepstimingfunction.md)

___

## Properties

<a id="position"></a>

###  position

**● position**: *[CSSStepPosition](../enums/_cssom_css_timing_function_value_.cssstepposition.md)*

*Defined in [cssom/css-timing-function-value.ts:54](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-timing-function-value.ts#L54)*

___
<a id="steps"></a>

###  steps

**● steps**: *`number`*

*Defined in [cssom/css-timing-function-value.ts:54](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-timing-function-value.ts#L54)*

___
<a id="type"></a>

###  type

**● type**: *[CSSTimingFunction](../enums/_cssom_css_timing_function_value_.csstimingfunction.md)*

*Inherited from [CSSTimingFunctionValue](_cssom_css_timing_function_value_.csstimingfunctionvalue.md).[type](_cssom_css_timing_function_value_.csstimingfunctionvalue.md#type)*

*Defined in [cssom/css-timing-function-value.ts:24](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-timing-function-value.ts#L24)*

___

## Methods

<a id="is"></a>

###  is

▸ **is**(type: * `string` &#124; [CSSTimingFunction](../enums/_cssom_css_timing_function_value_.csstimingfunction.md)*): `boolean`

*Inherited from [CSSTimingFunctionValue](_cssom_css_timing_function_value_.csstimingfunctionvalue.md).[is](_cssom_css_timing_function_value_.csstimingfunctionvalue.md#is)*

*Defined in [cssom/css-timing-function-value.ts:28](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-timing-function-value.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type |  `string` &#124; [CSSTimingFunction](../enums/_cssom_css_timing_function_value_.csstimingfunction.md)|

**Returns:** `boolean`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Overrides [CSSTimingFunctionValue](_cssom_css_timing_function_value_.csstimingfunctionvalue.md).[toString](_cssom_css_timing_function_value_.csstimingfunctionvalue.md#tostring)*

*Defined in [cssom/css-timing-function-value.ts:59](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/css-timing-function-value.ts#L59)*

**Returns:** `string`

___

