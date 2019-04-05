---
name: "StyleMap"
kindString: Class
kind: 128
modelUrl: ./_cssom_style_map_.stylemap.md
moduleUrl: _cssom_style_map_
title: Class StyleMap
---
<section class="tsd-panel tsd-comment">
<div class="pt-1 tsd-comment">
<div markdown="1">
The style map containing all the css variables defined in the parsed identity css files
</div>
</div>
</section>


<section class="pt-2 tsd-panel tsd-hierarchy">
<div class="lead">Hierarchy</div>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<span class="target">StyleMap</span>

</li>
</ul>

</section>





<section >
<div class="lead pb-2">Index</div>
<section class="tsd-panel tsd-index-panel">
<div class="tsd-index-content">
<section class="tsd-index-section ">
<strong>Methods</strong>
<ul>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_style_map_.stylemap/#foreach" class="tsd-kind-icon">for<wbr>Each</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_style_map_.stylemap/#get" class="tsd-kind-icon">get</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_style_map_.stylemap/#getall" class="tsd-kind-icon">get<wbr>All</a></li>
<li class="tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter"><a href="../_cssom_style_map_.stylemap/#getbytype" class="tsd-kind-icon">get<wbr>ByType</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_style_map_.stylemap/#getsimilar" class="tsd-kind-icon">get<wbr>Similar</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_style_map_.stylemap/#print" class="tsd-kind-icon">print</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_style_map_.stylemap/#set" class="tsd-kind-icon">set</a></li>
</ul>
</section>
</div>
</section>
</section>
<section>
<div class="lead">Methods</div>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="foreach">for<wbr>Each</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">for<wbr>Each<span class="tsd-signature-symbol">(</span>callbackFn<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">function</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">void</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/style-map.ts#L111">cssom/style-map.ts:111</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Runs a callbackFn on each of the properties contained in the style map
</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">callbackFn: <span class="tsd-signature-type">function</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
The callback to run against each property

</div>
</div>

<ul class="tsd-parameters">
<li class="tsd-parameter-siganture">
<ul class="tsd-signatures tsd-kind-type-literal tsd-is-not-exported">
<code class="tsd-kind-icon"><span class="tsd-signature-symbol">(</span>property<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span>, value<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">void</span></code>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">property: <span class="tsd-signature-type">string</span></div>


</li>
<li>
<div class="h6 mb-0">value: <a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a></div>


</li>
</ul>

<strong>Returns <span class="tsd-signature-type">void</span></strong>


</li>
</ul>
</li>
</ul>
</li>
</ul>

<strong>Returns <span class="tsd-signature-type">void</span></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="get">get</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">get<span class="tsd-signature-symbol">(</span>property<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/style-map.ts#L29">cssom/style-map.ts:29</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Gets the CSSStyleValue given the corresponding property name
</div>
<div markdown="1">
```typescript
const primaryColor: CSSColorValue = styleMap.get('primary-color');
```

</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">property: <span class="tsd-signature-type">string</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
The name of the property (prepending `--` is not necessary but allowed)
</div>
</div>

</li>
</ul>

<strong>Returns <a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a></strong>

<div class="pt-1" markdown="1">
The corresponding style value

</div>

</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="getall">get<wbr>All</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">get<wbr>All<span class="tsd-signature-symbol">(</span>properties<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">object</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/style-map.ts#L52">cssom/style-map.ts:52</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Gets the CSSStyleValues corresponding to the given array of property names
</div>
<div markdown="1">
```typescript
const values = styleMap.getAll(['primary-color', 'accent-color']);

// In the values Object the keys correspond to the names of the variables
// found in the styleMap. These are converted from hyphen-case to camel-case
// so you don't have to use the bracket notation to access values and can
// use destructuring declarations:

const {primaryColor, secondaryColor} = styleMap.getAll(['primary-color', 'accent-color']);
```

</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">properties: <span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">[]</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
The array of property names
</div>
</div>

</li>
</ul>

<strong>Returns <span class="tsd-signature-type">object</span></strong>

<div class="pt-1" markdown="1">
The Object of found properties

</div>

<ul class="tsd-parameters">
<li class="tsd-parameter-index-signature">
<code><span class="tsd-signature-symbol">[</span>key: <span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">]: </span><a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a></code>


</li>
</ul>
</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter">
<div class="d-flex flex-row">

<h4 id="getbytype">get<wbr>ByType</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter">
<li class="tsd-signature tsd-kind-icon">get<wbr>ByType&lt;T&gt;<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">...</span>types<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">T</span><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_style_map_.stylemapentry/" class="tsd-signature-type">StyleMapEntry</a><span class="tsd-signature-symbol">[]</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/style-map.ts#L90">cssom/style-map.ts:90</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Gets the CSSStyleValues of the properties extending `types`
</div>
<div markdown="1">
```typescript
const values = styleMap.getByType(CSSHexColor, CSSRgbaColor);
```

</div>
</div>

<strong>Type parameters</strong>
<ul class="tsd-type-parameters">
<li>
<code>T<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a></code>
</li>
</ul>
<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>types: <span class="tsd-signature-type">T</span><span class="tsd-signature-symbol">[]</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
The instances of CSSStyleValue
</div>
</div>

</li>
</ul>

<strong>Returns <a href="../_cssom_style_map_.stylemapentry/" class="tsd-signature-type">StyleMapEntry</a><span class="tsd-signature-symbol">[]</span></strong>

<div class="pt-1" markdown="1">
An array of StyleMapEntries

</div>

</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="getsimilar">get<wbr>Similar</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">get<wbr>Similar<span class="tsd-signature-symbol">(</span>regExp<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">RegExp</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_style_map_.stylemapentry/" class="tsd-signature-type">StyleMapEntry</a><span class="tsd-signature-symbol">[]</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/style-map.ts#L74">cssom/style-map.ts:74</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Gets the CSSStyleValues of the properties matching the given regex
</div>
<div markdown="1">
```typescript
const values = styleMap.getSimilar(/color$/);

// All the variables with names ending with "color"
```

</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">regExp: <span class="tsd-signature-type">RegExp</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
A regular expression to ls against property names
</div>
</div>

</li>
</ul>

<strong>Returns <a href="../_cssom_style_map_.stylemapentry/" class="tsd-signature-type">StyleMapEntry</a><span class="tsd-signature-symbol">[]</span></strong>

<div class="pt-1" markdown="1">
An array of StyleMapEntries

</div>

</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="print">print</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">print<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">void</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/style-map.ts#L118">cssom/style-map.ts:118</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Prints the StyleMap in a table
</div>
</div>



<strong>Returns <span class="tsd-signature-type">void</span></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="set">set</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">set<span class="tsd-signature-symbol">(</span>property<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span>, value<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">void</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/style-map.ts#L102">cssom/style-map.ts:102</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Sets (or overwrites) a property in the style map
</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">property: <span class="tsd-signature-type">string</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
The name of the property
</div>
</div>

</li>
<li>
<div class="h6 mb-0">value: <a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
The value of the property

</div>
</div>

</li>
</ul>

<strong>Returns <span class="tsd-signature-type">void</span></strong>


</li>
</ul>

</section>
</section>
