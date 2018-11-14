---
---
[visua](../README.md) > ["cssom/style-map"](../modules/_cssom_style_map_.md) > [StyleMap](../classes/_cssom_style_map_.stylemap.md)

# Class: StyleMap

The style map containing all the css variables defined in the parsed identity css files

## Hierarchy

**StyleMap**

## Index

### Methods

* [forEach](_cssom_style_map_.stylemap.md#foreach)
* [get](_cssom_style_map_.stylemap.md#get)
* [getAll](_cssom_style_map_.stylemap.md#getall)
* [getSimilar](_cssom_style_map_.stylemap.md#getsimilar)
* [print](_cssom_style_map_.stylemap.md#print)
* [set](_cssom_style_map_.stylemap.md#set)

---

## Methods

<a id="foreach"></a>

###  forEach

▸ **forEach**(callbackFn: *`function`*): `void`

*Defined in [cssom/style-map.ts:79](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/style-map.ts#L79)*

Runs a callbackFn on each of the properties contained in the style map

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackFn | `function` |  The callback to run against each property |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(property: *`string`*): [CSSStyleValue](_cssom_css_style_value_.cssstylevalue.md)

*Defined in [cssom/style-map.ts:25](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/style-map.ts#L25)*

Gets the CSSStyleValue given the corresponding property name

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| property | `string` |  The name of the property (prepending \`--\` is not necessary but allowed) |

**Returns:** [CSSStyleValue](_cssom_css_style_value_.cssstylevalue.md)
The corresponding style value

___
<a id="getall"></a>

###  getAll

▸ **getAll**(properties: *`string`[]*): `object`

*Defined in [cssom/style-map.ts:37](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/style-map.ts#L37)*

Gets the CSSStyleValues corresponding to the given array of property names

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| properties | `string`[] |  The array of property names |

**Returns:** `object`
The Object of found properties (the names are converted from hyphen-case to camel-case to allow for destructuring declarations)

___
<a id="getsimilar"></a>

###  getSimilar

▸ **getSimilar**(property: *`RegExp`*): [StyleMapEntry](../interfaces/_cssom_style_map_.stylemapentry.md)[]

*Defined in [cssom/style-map.ts:53](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/style-map.ts#L53)*

Gets the CSSStyleValues of the properties matching the given regex

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| property | `RegExp` |  A regular expression to ls against property names |

**Returns:** [StyleMapEntry](../interfaces/_cssom_style_map_.stylemapentry.md)[]
An array of StyleMapEntries

___
<a id="print"></a>

###  print

▸ **print**(): `void`

*Defined in [cssom/style-map.ts:85](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/style-map.ts#L85)*

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**(property: *`string`*, value: *[CSSStyleValue](_cssom_css_style_value_.cssstylevalue.md)*): `void`

*Defined in [cssom/style-map.ts:67](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/style-map.ts#L67)*

Sets (or overwrites) a property in the style map

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| property | `string` |  The name of the property |
| value | [CSSStyleValue](_cssom_css_style_value_.cssstylevalue.md) |  The value of the property |

**Returns:** `void`

___

