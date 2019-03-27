---
name: "CSSColorValue"
kindString: Class
kind: 128
modelUrl: ./_cssom_css_color_value_.csscolorvalue.md
moduleUrl: _cssom_css_color_value_
title: Class CSSColorValue
---


<section class="pt-2 tsd-panel tsd-hierarchy">
<div class="lead">Hierarchy</div>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<a href="../_cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<span class="target">CSSColorValue</span>

<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<a href="../_cssom_css_color_value_.csshexcolor/" class="tsd-signature-type">CSSHexColor</a>
</li>
<li>
<a href="../_cssom_css_color_value_.cssrgbacolor/" class="tsd-signature-type">CSSRgbaColor</a>
</li>
<li>
<a href="../_cssom_css_color_value_.csshslacolor/" class="tsd-signature-type">CSSHslaColor</a>
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
<strong>Methods</strong>
<ul>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_color_value_.csscolorvalue/#isopaque" class="tsd-kind-icon">is<wbr>Opaque</a></li>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_cssom_css_color_value_.csscolorvalue/#to" class="tsd-kind-icon">to</a></li>
<li class="tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static"><a href="../_cssom_css_color_value_.csscolorvalue/#hsltorgbnumeric" class="tsd-kind-icon">hsl<wbr>ToRgb<wbr>Numeric</a></li>
<li class="tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static"><a href="../_cssom_css_color_value_.csscolorvalue/#resolvenumericalpha" class="tsd-kind-icon">resolve<wbr>Numeric<wbr>Alpha</a></li>
<li class="tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static"><a href="../_cssom_css_color_value_.csscolorvalue/#rgbtohslnumeric" class="tsd-kind-icon">rgb<wbr>ToHsl<wbr>Numeric</a></li>
</ul>
</section>
</div>
</section>
</section>
<section>
<div class="lead">Methods</div>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Abstract</span></div>
<h4 id="isopaque">is<wbr>Opaque</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">is<wbr>Opaque<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">boolean</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/css-color-value.ts#L226">cssom/css-color-value.ts:226</a></small>
</div>
</aside>



<strong>Returns <span class="tsd-signature-type">boolean</span></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Abstract</span></div>
<h4 id="to">to</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">to<span class="tsd-signature-symbol">(</span>notation<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_cssom_css_color_value_.csscolorvalue/" class="tsd-signature-type">CSSColorValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/css-color-value.ts#L163">cssom/css-color-value.ts:163</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">notation: <span class="tsd-signature-type">string</span></div>


</li>
</ul>

<strong>Returns <a href="../_cssom_css_color_value_.csscolorvalue/" class="tsd-signature-type">CSSColorValue</a></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Static</span></div><div class="h4 pr-1"><span class="badge badge-primary">Protected</span></div>
<h4 id="hsltorgbnumeric">hsl<wbr>ToRgb<wbr>Numeric</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static">
<li class="tsd-signature tsd-kind-icon">hsl<wbr>ToRgb<wbr>Numeric<span class="tsd-signature-symbol">(</span>h<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span>, s<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span>, l<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span><span class="tsd-signature-symbol">[]</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/css-color-value.ts#L201">cssom/css-color-value.ts:201</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">h: <span class="tsd-signature-type">number</span></div>


</li>
<li>
<div class="h6 mb-0">s: <span class="tsd-signature-type">number</span></div>


</li>
<li>
<div class="h6 mb-0">l: <span class="tsd-signature-type">number</span></div>


</li>
</ul>

<strong>Returns <span class="tsd-signature-type">number</span><span class="tsd-signature-symbol">[]</span></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Static</span></div><div class="h4 pr-1"><span class="badge badge-primary">Protected</span></div>
<h4 id="resolvenumericalpha">resolve<wbr>Numeric<wbr>Alpha</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static">
<li class="tsd-signature tsd-kind-icon">resolve<wbr>Numeric<wbr>Alpha<span class="tsd-signature-symbol">(</span>alpha<span class="tsd-signature-symbol">?: </span><span class="tsd-signature-type">number</span><span class="tsd-signature-symbol"> | </span><a href="../_cssom_css_unit_value_.cssunitvalue/" class="tsd-signature-type">CSSUnitValue</a><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/css-color-value.ts#L218">cssom/css-color-value.ts:218</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Optional</span> alpha: <span class="tsd-signature-type">number</span><span class="tsd-signature-symbol"> | </span><a href="../_cssom_css_unit_value_.cssunitvalue/" class="tsd-signature-type">CSSUnitValue</a></div>


</li>
</ul>

<strong>Returns <span class="tsd-signature-type">number</span></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Static</span></div><div class="h4 pr-1"><span class="badge badge-primary">Protected</span></div>
<h4 id="rgbtohslnumeric">rgb<wbr>ToHsl<wbr>Numeric</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class tsd-is-protected tsd-is-static">
<li class="tsd-signature tsd-kind-icon">rgb<wbr>ToHsl<wbr>Numeric<span class="tsd-signature-symbol">(</span>r<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span>, g<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span>, b<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">number</span><span class="tsd-signature-symbol">[]</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/b2262eb/src/cssom/css-color-value.ts#L165">cssom/css-color-value.ts:165</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">r: <span class="tsd-signature-type">number</span></div>


</li>
<li>
<div class="h6 mb-0">g: <span class="tsd-signature-type">number</span></div>


</li>
<li>
<div class="h6 mb-0">b: <span class="tsd-signature-type">number</span></div>


</li>
</ul>

<strong>Returns <span class="tsd-signature-type">number</span><span class="tsd-signature-symbol">[]</span></strong>


</li>
</ul>

</section>
</section>
