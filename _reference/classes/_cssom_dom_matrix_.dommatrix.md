---
---
[visua](../README.md) > ["cssom/dom-matrix"](../modules/_cssom_dom_matrix_.md) > [DOMMatrix](../classes/_cssom_dom_matrix_.dommatrix.md)

# Class: DOMMatrix

## Hierarchy

 [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md)

**↳ DOMMatrix**

## Index

### Constructors

* [constructor](_cssom_dom_matrix_.dommatrix.md#constructor)

### Properties

* [a](_cssom_dom_matrix_.dommatrix.md#a)
* [b](_cssom_dom_matrix_.dommatrix.md#b)
* [c](_cssom_dom_matrix_.dommatrix.md#c)
* [d](_cssom_dom_matrix_.dommatrix.md#d)
* [e](_cssom_dom_matrix_.dommatrix.md#e)
* [f](_cssom_dom_matrix_.dommatrix.md#f)
* [is2D](_cssom_dom_matrix_.dommatrix.md#is2d)
* [m11](_cssom_dom_matrix_.dommatrix.md#m11)
* [m12](_cssom_dom_matrix_.dommatrix.md#m12)
* [m13](_cssom_dom_matrix_.dommatrix.md#m13)
* [m14](_cssom_dom_matrix_.dommatrix.md#m14)
* [m21](_cssom_dom_matrix_.dommatrix.md#m21)
* [m22](_cssom_dom_matrix_.dommatrix.md#m22)
* [m23](_cssom_dom_matrix_.dommatrix.md#m23)
* [m24](_cssom_dom_matrix_.dommatrix.md#m24)
* [m31](_cssom_dom_matrix_.dommatrix.md#m31)
* [m32](_cssom_dom_matrix_.dommatrix.md#m32)
* [m33](_cssom_dom_matrix_.dommatrix.md#m33)
* [m34](_cssom_dom_matrix_.dommatrix.md#m34)
* [m41](_cssom_dom_matrix_.dommatrix.md#m41)
* [m42](_cssom_dom_matrix_.dommatrix.md#m42)
* [m43](_cssom_dom_matrix_.dommatrix.md#m43)
* [m44](_cssom_dom_matrix_.dommatrix.md#m44)

### Accessors

* [isIdentity](_cssom_dom_matrix_.dommatrix.md#isidentity)

### Methods

* [flipX](_cssom_dom_matrix_.dommatrix.md#flipx)
* [flipY](_cssom_dom_matrix_.dommatrix.md#flipy)
* [multiply](_cssom_dom_matrix_.dommatrix.md#multiply)
* [multiplySelf](_cssom_dom_matrix_.dommatrix.md#multiplyself)
* [preMultiplySelf](_cssom_dom_matrix_.dommatrix.md#premultiplyself)
* [rotate](_cssom_dom_matrix_.dommatrix.md#rotate)
* [rotateAxisAngle](_cssom_dom_matrix_.dommatrix.md#rotateaxisangle)
* [rotateAxisAngleSelf](_cssom_dom_matrix_.dommatrix.md#rotateaxisangleself)
* [rotateFromVector](_cssom_dom_matrix_.dommatrix.md#rotatefromvector)
* [rotateFromVectorSelf](_cssom_dom_matrix_.dommatrix.md#rotatefromvectorself)
* [rotateSelf](_cssom_dom_matrix_.dommatrix.md#rotateself)
* [scale](_cssom_dom_matrix_.dommatrix.md#scale)
* [scale3d](_cssom_dom_matrix_.dommatrix.md#scale3d)
* [scale3dSelf](_cssom_dom_matrix_.dommatrix.md#scale3dself)
* [scaleNonUniform](_cssom_dom_matrix_.dommatrix.md#scalenonuniform)
* [scaleNonUniformSelf](_cssom_dom_matrix_.dommatrix.md#scalenonuniformself)
* [scaleSelf](_cssom_dom_matrix_.dommatrix.md#scaleself)
* [skewX](_cssom_dom_matrix_.dommatrix.md#skewx)
* [skewXSelf](_cssom_dom_matrix_.dommatrix.md#skewxself)
* [skewY](_cssom_dom_matrix_.dommatrix.md#skewy)
* [skewYSelf](_cssom_dom_matrix_.dommatrix.md#skewyself)
* [toArray](_cssom_dom_matrix_.dommatrix.md#toarray)
* [translate](_cssom_dom_matrix_.dommatrix.md#translate)
* [translateSelf](_cssom_dom_matrix_.dommatrix.md#translateself)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DOMMatrix**(arg?: * `number`[] &#124; [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md)*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[constructor](_cssom_dom_matrix_.dommatrixreadonly.md#constructor)*

*Defined in [cssom/dom-matrix.ts:221](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L221)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg |  `number`[] &#124; [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md)|

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___

## Properties

<a id="a"></a>

###  a

**● a**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[a](_cssom_dom_matrix_.dommatrixreadonly.md#a)*

*Defined in [cssom/dom-matrix.ts:201](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L201)*

___
<a id="b"></a>

###  b

**● b**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[b](_cssom_dom_matrix_.dommatrixreadonly.md#b)*

*Defined in [cssom/dom-matrix.ts:200](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L200)*

___
<a id="c"></a>

###  c

**● c**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[c](_cssom_dom_matrix_.dommatrixreadonly.md#c)*

*Defined in [cssom/dom-matrix.ts:202](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L202)*

___
<a id="d"></a>

###  d

**● d**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[d](_cssom_dom_matrix_.dommatrixreadonly.md#d)*

*Defined in [cssom/dom-matrix.ts:203](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L203)*

___
<a id="e"></a>

###  e

**● e**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[e](_cssom_dom_matrix_.dommatrixreadonly.md#e)*

*Defined in [cssom/dom-matrix.ts:204](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L204)*

___
<a id="f"></a>

###  f

**● f**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[f](_cssom_dom_matrix_.dommatrixreadonly.md#f)*

*Defined in [cssom/dom-matrix.ts:205](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L205)*

___
<a id="is2d"></a>

###  is2D

**● is2D**: *`boolean`*

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[is2D](_cssom_dom_matrix_.dommatrixreadonly.md#is2d)*

*Defined in [cssom/dom-matrix.ts:28](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L28)*

___
<a id="m11"></a>

###  m11

**● m11**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m11](_cssom_dom_matrix_.dommatrixreadonly.md#m11)*

*Defined in [cssom/dom-matrix.ts:206](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L206)*

___
<a id="m12"></a>

###  m12

**● m12**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m12](_cssom_dom_matrix_.dommatrixreadonly.md#m12)*

*Defined in [cssom/dom-matrix.ts:207](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L207)*

___
<a id="m13"></a>

###  m13

**● m13**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m13](_cssom_dom_matrix_.dommatrixreadonly.md#m13)*

*Defined in [cssom/dom-matrix.ts:208](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L208)*

___
<a id="m14"></a>

###  m14

**● m14**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m14](_cssom_dom_matrix_.dommatrixreadonly.md#m14)*

*Defined in [cssom/dom-matrix.ts:209](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L209)*

___
<a id="m21"></a>

###  m21

**● m21**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m21](_cssom_dom_matrix_.dommatrixreadonly.md#m21)*

*Defined in [cssom/dom-matrix.ts:210](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L210)*

___
<a id="m22"></a>

###  m22

**● m22**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m22](_cssom_dom_matrix_.dommatrixreadonly.md#m22)*

*Defined in [cssom/dom-matrix.ts:211](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L211)*

___
<a id="m23"></a>

###  m23

**● m23**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m23](_cssom_dom_matrix_.dommatrixreadonly.md#m23)*

*Defined in [cssom/dom-matrix.ts:212](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L212)*

___
<a id="m24"></a>

###  m24

**● m24**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m24](_cssom_dom_matrix_.dommatrixreadonly.md#m24)*

*Defined in [cssom/dom-matrix.ts:213](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L213)*

___
<a id="m31"></a>

###  m31

**● m31**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m31](_cssom_dom_matrix_.dommatrixreadonly.md#m31)*

*Defined in [cssom/dom-matrix.ts:214](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L214)*

___
<a id="m32"></a>

###  m32

**● m32**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m32](_cssom_dom_matrix_.dommatrixreadonly.md#m32)*

*Defined in [cssom/dom-matrix.ts:215](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L215)*

___
<a id="m33"></a>

###  m33

**● m33**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m33](_cssom_dom_matrix_.dommatrixreadonly.md#m33)*

*Defined in [cssom/dom-matrix.ts:216](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L216)*

___
<a id="m34"></a>

###  m34

**● m34**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m34](_cssom_dom_matrix_.dommatrixreadonly.md#m34)*

*Defined in [cssom/dom-matrix.ts:217](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L217)*

___
<a id="m41"></a>

###  m41

**● m41**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m41](_cssom_dom_matrix_.dommatrixreadonly.md#m41)*

*Defined in [cssom/dom-matrix.ts:218](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L218)*

___
<a id="m42"></a>

###  m42

**● m42**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m42](_cssom_dom_matrix_.dommatrixreadonly.md#m42)*

*Defined in [cssom/dom-matrix.ts:219](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L219)*

___
<a id="m43"></a>

###  m43

**● m43**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m43](_cssom_dom_matrix_.dommatrixreadonly.md#m43)*

*Defined in [cssom/dom-matrix.ts:220](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L220)*

___
<a id="m44"></a>

###  m44

**● m44**: *`number`*

*Overrides [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[m44](_cssom_dom_matrix_.dommatrixreadonly.md#m44)*

*Defined in [cssom/dom-matrix.ts:221](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L221)*

___

## Accessors

<a id="isidentity"></a>

###  isIdentity

getisIdentity(): `boolean`

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[isIdentity](_cssom_dom_matrix_.dommatrixreadonly.md#isidentity)*

*Defined in [cssom/dom-matrix.ts:30](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L30)*

**Returns:** `boolean`

___

## Methods

<a id="flipx"></a>

###  flipX

▸ **flipX**(): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[flipX](_cssom_dom_matrix_.dommatrixreadonly.md#flipx)*

*Defined in [cssom/dom-matrix.ts:164](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L164)*

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="flipy"></a>

###  flipY

▸ **flipY**(): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[flipY](_cssom_dom_matrix_.dommatrixreadonly.md#flipy)*

*Defined in [cssom/dom-matrix.ts:170](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L170)*

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="multiply"></a>

###  multiply

▸ **multiply**(other: *[DOMMatrix](_cssom_dom_matrix_.dommatrix.md)*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[multiply](_cssom_dom_matrix_.dommatrixreadonly.md#multiply)*

*Defined in [cssom/dom-matrix.ts:158](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L158)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [DOMMatrix](_cssom_dom_matrix_.dommatrix.md) |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="multiplyself"></a>

###  multiplySelf

▸ **multiplySelf**(other: *[DOMMatrix](_cssom_dom_matrix_.dommatrix.md)*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:233](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L233)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [DOMMatrix](_cssom_dom_matrix_.dommatrix.md) |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="premultiplyself"></a>

###  preMultiplySelf

▸ **preMultiplySelf**(other: *[DOMMatrix](_cssom_dom_matrix_.dommatrix.md)*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:252](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L252)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [DOMMatrix](_cssom_dom_matrix_.dommatrix.md) |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="rotate"></a>

###  rotate

▸ **rotate**(angle: *`number`*, originX?: *`number`*, originY?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[rotate](_cssom_dom_matrix_.dommatrixreadonly.md#rotate)*

*Defined in [cssom/dom-matrix.ts:128](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L128)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| angle | `number` | - |
| `Default value` originX | `number` | 0 |
| `Default value` originY | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="rotateaxisangle"></a>

###  rotateAxisAngle

▸ **rotateAxisAngle**(x: *`number`*, y: *`number`*, z: *`number`*, angle: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[rotateAxisAngle](_cssom_dom_matrix_.dommatrixreadonly.md#rotateaxisangle)*

*Defined in [cssom/dom-matrix.ts:140](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L140)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |
| angle | `number` |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="rotateaxisangleself"></a>

###  rotateAxisAngleSelf

▸ **rotateAxisAngleSelf**(x: *`number`*, y: *`number`*, z: *`number`*, angle: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:316](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L316)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |
| angle | `number` |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="rotatefromvector"></a>

###  rotateFromVector

▸ **rotateFromVector**(x: *`number`*, y: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[rotateFromVector](_cssom_dom_matrix_.dommatrixreadonly.md#rotatefromvector)*

*Defined in [cssom/dom-matrix.ts:134](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L134)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="rotatefromvectorself"></a>

###  rotateFromVectorSelf

▸ **rotateFromVectorSelf**(x: *`number`*, y: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:303](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L303)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="rotateself"></a>

###  rotateSelf

▸ **rotateSelf**(angle: *`number`*, originX?: *`number`*, originY?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:290](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L290)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| angle | `number` | - |
| `Default value` originX | `number` | 0 |
| `Default value` originY | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="scale"></a>

###  scale

▸ **scale**(scale: *`number`*, originX?: *`number`*, originY?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[scale](_cssom_dom_matrix_.dommatrixreadonly.md#scale)*

*Defined in [cssom/dom-matrix.ts:110](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L110)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scale | `number` | - |
| `Default value` originX | `number` | 0 |
| `Default value` originY | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="scale3d"></a>

###  scale3d

▸ **scale3d**(scale: *`number`*, originX?: *`number`*, originY?: *`number`*, originZ?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[scale3d](_cssom_dom_matrix_.dommatrixreadonly.md#scale3d)*

*Defined in [cssom/dom-matrix.ts:116](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L116)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scale | `number` | - |
| `Default value` originX | `number` | 0 |
| `Default value` originY | `number` | 0 |
| `Default value` originZ | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="scale3dself"></a>

###  scale3dSelf

▸ **scale3dSelf**(scale: *`number`*, originX?: *`number`*, originY?: *`number`*, originZ?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:272](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L272)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scale | `number` | - |
| `Default value` originX | `number` | 0 |
| `Default value` originY | `number` | 0 |
| `Default value` originZ | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="scalenonuniform"></a>

###  scaleNonUniform

▸ **scaleNonUniform**(scaleX: *`number`*, scaleY?: *`number`*, scaleZ?: *`number`*, originX?: *`number`*, originY?: *`number`*, originZ?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[scaleNonUniform](_cssom_dom_matrix_.dommatrixreadonly.md#scalenonuniform)*

*Defined in [cssom/dom-matrix.ts:122](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L122)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scaleX | `number` | - |
| `Default value` scaleY | `number` | 1 |
| `Default value` scaleZ | `number` | 1 |
| `Default value` originX | `number` | 0 |
| `Default value` originY | `number` | 0 |
| `Default value` originZ | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="scalenonuniformself"></a>

###  scaleNonUniformSelf

▸ **scaleNonUniformSelf**(scaleX: *`number`*, scaleY?: *`number`*, scaleZ?: *`number`*, originX?: *`number`*, originY?: *`number`*, originZ?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:281](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L281)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scaleX | `number` | - |
| `Default value` scaleY | `number` | 1 |
| `Default value` scaleZ | `number` | 1 |
| `Default value` originX | `number` | 0 |
| `Default value` originY | `number` | 0 |
| `Default value` originZ | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="scaleself"></a>

###  scaleSelf

▸ **scaleSelf**(scale: *`number`*, originX?: *`number`*, originY?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:263](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L263)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scale | `number` | - |
| `Default value` originX | `number` | 0 |
| `Default value` originY | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="skewx"></a>

###  skewX

▸ **skewX**(sx: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[skewX](_cssom_dom_matrix_.dommatrixreadonly.md#skewx)*

*Defined in [cssom/dom-matrix.ts:146](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L146)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sx | `number` |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="skewxself"></a>

###  skewXSelf

▸ **skewXSelf**(sx: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:338](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L338)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sx | `number` |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="skewy"></a>

###  skewY

▸ **skewY**(sy: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[skewY](_cssom_dom_matrix_.dommatrixreadonly.md#skewy)*

*Defined in [cssom/dom-matrix.ts:152](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sy | `number` |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="skewyself"></a>

###  skewYSelf

▸ **skewYSelf**(sy: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:345](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L345)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sy | `number` |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="toarray"></a>

###  toArray

▸ **toArray**(): `number`[]

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[toArray](_cssom_dom_matrix_.dommatrixreadonly.md#toarray)*

*Defined in [cssom/dom-matrix.ts:176](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L176)*

**Returns:** `number`[]

___
<a id="translate"></a>

###  translate

▸ **translate**(tx: *`number`*, ty: *`number`*, tz?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Inherited from [DOMMatrixReadOnly](_cssom_dom_matrix_.dommatrixreadonly.md).[translate](_cssom_dom_matrix_.dommatrixreadonly.md#translate)*

*Defined in [cssom/dom-matrix.ts:104](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L104)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| tx | `number` | - |
| ty | `number` | - |
| `Default value` tz | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___
<a id="translateself"></a>

###  translateSelf

▸ **translateSelf**(tx: *`number`*, ty: *`number`*, tz?: *`number`*): [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

*Defined in [cssom/dom-matrix.ts:256](https://github.com/umbopepato/visua/blob/221e6a0/src/cssom/dom-matrix.ts#L256)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| tx | `number` | - |
| ty | `number` | - |
| `Default value` tz | `number` | 0 |

**Returns:** [DOMMatrix](_cssom_dom_matrix_.dommatrix.md)

___

