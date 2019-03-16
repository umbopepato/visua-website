---
name: "CSSNumericValue"
kindString: Class
kind: 128
modelUrl: ./_cssom_css_numeric_value_.cssnumericvalue.md
moduleUrl: _cssom_css_numeric_value_
title: Class CSSNumericValue
---


<section class="pt-2 tsd-panel tsd-hierarchy">
<div class="lead">Hierarchy</div>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<span class="target">CSSNumericValue</span>

<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<a href="../_cssom_css_numeric_value_.cssmathvalue/" class="tsd-signature-type">CSSMathValue</a>
</li>
<li>
<a href="../_cssom_css_unit_value_.cssunitvalue/" class="tsd-signature-type">CSSUnitValue</a>
</li>
</ul>
</li>
</ul>
</li>
</ul>

</section>





<section >
<div class="lead pb-2">Index</div>
<section class="tsd-panel tsd-index-panel">
<div class="tsd-index-content">
<section class="tsd-index-section ">
<strong>Properties</strong>
<ul>
<li class="tsd-kind-property tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#type" class="tsd-kind-icon">type</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Methods</strong>
<ul>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#add" class="tsd-kind-icon">add</a></li>
<li class="tsd-kind-method tsd-parent-kind-class tsd-is-protected"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#createtype" class="tsd-kind-icon">create<wbr>Type</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#div" class="tsd-kind-icon">div</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#equals" class="tsd-kind-icon">equals</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#max" class="tsd-kind-icon">max</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#min" class="tsd-kind-icon">min</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#mul" class="tsd-kind-icon">mul</a></li>
<li class="tsd-kind-method tsd-parent-kind-class tsd-is-protected"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#multiplyunitmaps" class="tsd-kind-icon">multiply<wbr>Unit<wbr>Maps</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#solve" class="tsd-kind-icon">solve</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#sub" class="tsd-kind-icon">sub</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#to" class="tsd-kind-icon">to</a></li>
<li class="tsd-kind-method tsd-parent-kind-class tsd-is-static"><a href="../_cssom_css_numeric_value_.cssnumericvalue/#rectifynumberishvalue" class="tsd-kind-icon">rectify<wbr>Numberish<wbr>Value</a></li>
</ul>
</section>
</div>
</section>
</section>
<section>
<div class="lead">Properties</div>
<section class="pb-4 pt-2 tsd-kind-property tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="type">type</h4>
</div>

<code class="tsd-signature tsd-kind-icon">type<span class="tsd-signature-symbol">:</span> <span class="tsd-signature-type">CSSNumericType</span><span class="tsd-signature-symbol"> =&nbsp;new Map()</span></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L24">cssom/css-numeric-value.ts:24</a></small>
</div>
</aside>




</section>
</section>
<section>
<div class="lead">Methods</div>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="add">add</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">add<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L26">cssom/css-numeric-value.ts:26</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class tsd-is-protected">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Protected</span></div>
<h4 id="createtype">create<wbr>Type</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class tsd-is-protected">
<li class="tsd-signature tsd-kind-icon">create<wbr>Type<span class="tsd-signature-symbol">(</span>unit<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">CSSNumericType</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L327">cssom/css-numeric-value.ts:327</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">unit: <span class="tsd-signature-type">string</span></div>


</li>
</ul>

<strong>Returns <span class="tsd-signature-type">CSSNumericType</span></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="div">div</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">div<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L76">cssom/css-numeric-value.ts:76</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="equals">equals</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">equals<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">boolean</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L123">cssom/css-numeric-value.ts:123</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span></div>


</li>
</ul>

<strong>Returns <span class="tsd-signature-type">boolean</span></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="max">max</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">max<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L102">cssom/css-numeric-value.ts:102</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="min">min</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">min<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L81">cssom/css-numeric-value.ts:81</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="mul">mul</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">mul<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L52">cssom/css-numeric-value.ts:52</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class tsd-is-protected">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Protected</span></div>
<h4 id="multiplyunitmaps">multiply<wbr>Unit<wbr>Maps</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class tsd-is-protected">
<li class="tsd-signature tsd-kind-icon">multiply<wbr>Unit<wbr>Maps<span class="tsd-signature-symbol">(</span>u1<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssunitmap/" class="tsd-signature-type">CSSUnitMap</a>, u2<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssunitmap/" class="tsd-signature-type">CSSUnitMap</a><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssunitmap/" class="tsd-signature-type">CSSUnitMap</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L434">cssom/css-numeric-value.ts:434</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">u1: <a href="../_cssom_css_numeric_value_.cssunitmap/" class="tsd-signature-type">CSSUnitMap</a></div>


</li>
<li>
<div class="h6 mb-0">u2: <a href="../_cssom_css_numeric_value_.cssunitmap/" class="tsd-signature-type">CSSUnitMap</a></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_numeric_value_.cssunitmap/" class="tsd-signature-type">CSSUnitMap</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="solve">solve</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">solve<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L162">cssom/css-numeric-value.ts:162</a></small>
</div>
</aside>



<strong>Returns <a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="sub">sub</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">sub<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L47">cssom/css-numeric-value.ts:47</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">[]</span></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">

<h4 id="to">to</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">to<span class="tsd-signature-symbol">(</span>unit<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_unit_value_.cssunitvalue/" class="tsd-signature-type">CSSUnitValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L152">cssom/css-numeric-value.ts:152</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">unit: <span class="tsd-signature-type">string</span></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_unit_value_.cssunitvalue/" class="tsd-signature-type">CSSUnitValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class tsd-is-static">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Static</span></div>
<h4 id="rectifynumberishvalue">rectify<wbr>Numberish<wbr>Value</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class tsd-is-static">
<li class="tsd-signature tsd-kind-icon">rectify<wbr>Numberish<wbr>Value<span class="tsd-signature-symbol">(</span>num<span class="tsd-signature-symbol">: </span><a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_unit_value_.cssunitvalue/" class="tsd-signature-type">CSSUnitValue</a><span class="tsd-signature-symbol"> | </span><a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/cssom/css-numeric-value.ts#L174">cssom/css-numeric-value.ts:174</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">num: <a href="../_cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_unit_value_.cssunitvalue/" class="tsd-signature-type">CSSUnitValue</a>
<span class="tsd-signature-symbol"> | </span>
<a href="../_cssom_css_numeric_value_.cssnumericvalue/" class="tsd-signature-type">CSSNumericValue</a>
</strong>


</li>
</ul>

</section>
</section>
