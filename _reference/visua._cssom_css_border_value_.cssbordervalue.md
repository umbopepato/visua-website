---
name: "CSSBorderValue"
kindString: Class
kind: 128
modelUrl: visua._cssom_css_border_value_.cssbordervalue.md
moduleUrl: visua._cssom_css_border_value_
title: Class CSSBorderValue
---
<section class="tsd-panel tsd-comment">
<div class="pt-1 tsd-comment">
<div markdown="1">
Represents a CSS border value like the one used in `border` properties.
</div>
<div markdown="1">
**Syntax**
```
[<length>] <identifier> <color>
```

**Examples**
```
--border: 1px solid black;
--border: 4px dotted #CCC;
```

</div>
</div>
</section>


<section class="pt-2 tsd-panel tsd-hierarchy">
<div class="lead">Hierarchy</div>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<a href=".visua._cssom_css_style_value_.cssstylevalue/" class="tsd-signature-type">CSSStyleValue</a>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<span class="target">CSSBorderValue</span>

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
<strong>Constructors</strong>
<ul>
<li class=""><a href=".visua._cssom_css_border_value_.cssbordervalue/#constructor" class="tsd-kind-icon">constructor</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Properties</strong>
<ul>
<li class=""><a href=".visua._cssom_css_border_value_.cssbordervalue/#color" class="tsd-kind-icon">color</a></li>
<li class=""><a href=".visua._cssom_css_border_value_.cssbordervalue/#linestyle" class="tsd-kind-icon">line<wbr>Style</a></li>
<li class=""><a href=".visua._cssom_css_border_value_.cssbordervalue/#linewidth" class="tsd-kind-icon">line<wbr>Width</a></li>
<li class=""><a href=".visua._cssom_css_border_value_.cssbordervalue/#linestylekeywords" class="tsd-kind-icon">line<wbr>Style<wbr>Keywords</a></li>
<li class=""><a href=".visua._cssom_css_border_value_.cssbordervalue/#linewidthkeywords" class="tsd-kind-icon">line<wbr>Width<wbr>Keywords</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Methods</strong>
<ul>
<li class=""><a href=".visua._cssom_css_border_value_.cssbordervalue/#tostring" class="tsd-kind-icon">to<wbr>String</a></li>
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
<li class="tsd-signature tsd-kind-icon">new CSSBorder<wbr>Value<span class="tsd-signature-symbol">(</span>components<span class="tsd-signature-symbol">: </span><a href=".visua._cssom_css_border_value_.cssbordercomponents/" class="tsd-signature-type">CSSBorderComponents</a><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href=".visua._cssom_css_border_value_.cssbordervalue/" class="tsd-signature-type">CSSBorderValue</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-border-value.ts#L50">cssom/css-border-value.ts:50</a></small>
</div>
</aside>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">components: <a href=".visua._cssom_css_border_value_.cssbordercomponents/" class="tsd-signature-type">CSSBorderComponents</a></div>


</li>
</ul>

<strong>Returns <a href=".visua._cssom_css_border_value_.cssbordervalue/" class="tsd-signature-type">CSSBorderValue</a></strong>


</li>
</ul>

</section>
</section>
<section>
<div class="lead">Properties</div>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">

<h4 id="color">color</h4>
</div>

<code class="tsd-signature tsd-kind-icon">color<span class="tsd-signature-symbol">:</span> <a href=".visua._cssom_css_color_value_.csscolorvalue/" class="tsd-signature-type">CSSColorValue</a></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-border-value.ts#L50">cssom/css-border-value.ts:50</a></small>
</div>
</aside>




</section>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">

<h4 id="linestyle">line<wbr>Style</h4>
</div>

<code class="tsd-signature tsd-kind-icon">line<wbr>Style<span class="tsd-signature-symbol">:</span> <a href=".visua._cssom_css_keyword_value_.csskeywordvalue/" class="tsd-signature-type">CSSKeywordValue</a></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-border-value.ts#L37">cssom/css-border-value.ts:37</a></small>
</div>
</aside>




</section>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">

<h4 id="linewidth">line<wbr>Width</h4>
</div>

<code class="tsd-signature tsd-kind-icon">line<wbr>Width<span class="tsd-signature-symbol">:</span> <a href=".visua._cssom_css_unit_value_.cssunitvalue/" class="tsd-signature-type">CSSUnitValue</a><span class="tsd-signature-symbol"> | </span><a href=".visua._cssom_css_keyword_value_.csskeywordvalue/" class="tsd-signature-type">CSSKeywordValue</a></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-border-value.ts#L35">cssom/css-border-value.ts:35</a></small>
</div>
</aside>




</section>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Static</span></div>
<h4 id="linestylekeywords">line<wbr>Style<wbr>Keywords</h4>
</div>

<code class="tsd-signature tsd-kind-icon">line<wbr>Style<wbr>Keywords<span class="tsd-signature-symbol">:</span> <span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol"> =&nbsp;[&#x27;none&#x27;,&#x27;hidden&#x27;,&#x27;dotted&#x27;,&#x27;dashed&#x27;,&#x27;solid&#x27;,&#x27;double&#x27;,&#x27;groove&#x27;,&#x27;ridge&#x27;,&#x27;inset&#x27;,&#x27;outset&#x27;,]</span></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-border-value.ts#L38">cssom/css-border-value.ts:38</a></small>
</div>
</aside>




</section>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Static</span></div>
<h4 id="linewidthkeywords">line<wbr>Width<wbr>Keywords</h4>
</div>

<code class="tsd-signature tsd-kind-icon">line<wbr>Width<wbr>Keywords<span class="tsd-signature-symbol">:</span> <span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol"> =&nbsp;[ &#x27;thin&#x27;, &#x27;medium&#x27;, &#x27;thick&#x27; ]</span></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-border-value.ts#L36">cssom/css-border-value.ts:36</a></small>
</div>
</aside>




</section>
</section>
<section>
<div class="lead">Methods</div>
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
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/cssom/css-border-value.ts#L68">cssom/css-border-value.ts:68</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Serializes the `CSSBorderValue` to standard CSS
</div>
</div>



<strong>Returns <span class="tsd-signature-type">string</span></strong>


</li>
</ul>

</section>
</section>
