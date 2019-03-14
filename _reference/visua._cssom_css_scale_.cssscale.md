---
name: "CSSScale"
kindString: Class
kind: 128
modelUrl: visua._cssom_css_scale_.cssscale.md
moduleUrl: visua._cssom_css_scale_
title: Class CSSScale
---


<section class="pt-2 tsd-panel tsd-hierarchy">
<div class="lead">Hierarchy</div>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<span class="target">CSSScale</span>

</li>
</ul>

</section>

<section class="pt-2 tsd-panel">
<div class="lead">Implements</div>
<ul class="pl-3 tsd-hierarchy">
<li><a href=".visua._cssom_css_transform_value_.csstransformcomponent/" class="tsd-signature-type">CSSTransformComponent</a></li>
</ul>
</section>




<section >
<div class="lead pb-2">Index</div>
<section class="tsd-panel tsd-index-panel">
<div class="tsd-index-content">
<section class="tsd-index-section ">
<strong>Constructors</strong>
<ul>
<li class=""><a href=".visua._cssom_css_scale_.cssscale/#constructor" class="tsd-kind-icon">constructor</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Accessors</strong>
<ul>
<li class=""><a href=".visua._cssom_css_scale_.cssscale/#is2d" class="tsd-kind-icon">is2D</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Methods</strong>
<ul>
<li class=""><a href=".visua._cssom_css_scale_.cssscale/#tomatrix" class="tsd-kind-icon">to<wbr>Matrix</a></li>
<li class=""><a href=".visua._cssom_css_scale_.cssscale/#tostring" class="tsd-kind-icon">to<wbr>String</a></li>
</ul>
</section>
</div>
</section>
</section>
<section>
<div class="lead">Constructors</div>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">

<h4 id="constructor">constructor</h4>
</div>

<ul class="tsd-signatures ">
<li class="tsd-signature tsd-kind-icon">new CSSScale<span class="tsd-signature-symbol">(</span>x<span class="tsd-signature-symbol">: </span><a href=".visua._cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a>, y<span class="tsd-signature-symbol">: </span><a href=".visua._cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a>, z<span class="tsd-signature-symbol">?: </span><a href=".visua._cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href=".visua._cssom_css_scale_.cssscale/" class="tsd-signature-type">CSSScale</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-scale.ts#L22">cssom/css-scale.ts:22</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">x: <a href=".visua._cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a></div>


</li>
<li>
<div class="h6 mb-0">y: <a href=".visua._cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a></div>


</li>
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Optional</span> z: <a href=".visua._cssom_css_numeric_value_/#cssnumberish" class="tsd-signature-type">CSSNumberish</a></div>


</li>
</ul>

<strong>Returns <a href=".visua._cssom_css_scale_.cssscale/" class="tsd-signature-type">CSSScale</a></strong>


</li>
</ul>

</section>
</section>
<section>
<div class="lead">Accessors</div>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">

<h4 id="is2d">is2D</h4>
</div>


<ul class="tsd-signatures ">
<li class="tsd-signature tsd-kind-icon"><span class="tsd-signature-symbol">get</span> is2D<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">boolean</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-scale.ts#L13">cssom/css-scale.ts:13</a></small>
</div>
</aside>



<strong>Returns <span class="tsd-signature-type">boolean</span></strong>


</li>
</ul>

</section>
</section>
<section>
<div class="lead">Methods</div>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">

<h4 id="tomatrix">to<wbr>Matrix</h4>
</div>

<ul class="tsd-signatures ">
<li class="tsd-signature tsd-kind-icon">to<wbr>Matrix<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href=".visua._cssom_dom_matrix_.dommatrix/" class="tsd-signature-type">DOMMatrix</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div>Implementation of <a href=".visua._cssom_css_transform_value_.csstransformcomponent/#tomatrix">toMatrix</a>.toMatrix</div>
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-scale.ts#L17">cssom/css-scale.ts:17</a></small>
</div>
</aside>



<strong>Returns <a href=".visua._cssom_dom_matrix_.dommatrix/" class="tsd-signature-type">DOMMatrix</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">

<h4 id="tostring">to<wbr>String</h4>
</div>

<ul class="tsd-signatures ">
<li class="tsd-signature tsd-kind-icon">to<wbr>String<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-scale.ts#L34">cssom/css-scale.ts:34</a></small>
</div>
</aside>



<strong>Returns <span class="tsd-signature-type">string</span></strong>


</li>
</ul>

</section>
</section>
