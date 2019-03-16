---
name: "&quot;plugin&quot;"
kindString: External module
kind: 1
modelUrl: ./_plugin_.md
moduleUrl: _plugin_
title: External module &quot;plugin&quot;
---







<section >
<div class="lead pb-2">Index</div>
<section class="tsd-panel tsd-index-panel">
<div class="tsd-index-content">
<section class="tsd-index-section ">
<strong>Classes</strong>
<ul>
<li class="tsd-kind-class tsd-parent-kind-external-module"><a href="../_plugin_.plugin/" class="tsd-kind-icon">Plugin</a></li>
<li class="tsd-kind-class tsd-parent-kind-external-module"><a href="../_plugin_.pluginerror/" class="tsd-kind-icon">Plugin<wbr>Error</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Type aliases</strong>
<ul>
<li class="tsd-kind-type-alias tsd-parent-kind-external-module"><a href="../_plugin_/#options" class="tsd-kind-icon">Options</a></li>
<li class="tsd-kind-type-alias tsd-parent-kind-external-module"><a href="../_plugin_/#optionsmap" class="tsd-kind-icon">Options<wbr>Map</a></li>
<li class="tsd-kind-type-alias tsd-parent-kind-external-module"><a href="../_plugin_/#valueinitializer" class="tsd-kind-icon">Value<wbr>Initializer</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Functions</strong>
<ul>
<li class="tsd-kind-function tsd-parent-kind-external-module"><a href="../_plugin_/#template" class="tsd-kind-icon">template</a></li>
<li class="tsd-kind-function tsd-parent-kind-external-module"><a href="../_plugin_/#templatel" class="tsd-kind-icon">templatel</a></li>
</ul>
</section>
</div>
</section>
</section>
<section>
<div class="lead">Type aliases</div>
<section class="pb-4 pt-2 tsd-kind-type-alias tsd-parent-kind-external-module">
<div class="d-flex flex-row">

<h4 id="options">Options</h4>
</div>

<code class="tsd-signature tsd-kind-icon">Options<span class="tsd-signature-symbol">:</span> <span class="tsd-signature-type">object</span></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/plugin.ts#L17">plugin.ts:17</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
The `string` to `any` map of parsed command line options
</div>
</div>


<div class="tsd-type-declaration">
<strong>Type declaration</strong>
<ul class="tsd-parameters">
<li class="tsd-parameter-index-signature">
<code><span class="tsd-signature-symbol">[</span>key: <span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">]: </span><span class="tsd-signature-type">any</span></code>


</li>
</ul>
</div>


</section>
<section class="pb-4 pt-2 tsd-kind-type-alias tsd-parent-kind-external-module">
<div class="d-flex flex-row">

<h4 id="optionsmap">Options<wbr>Map</h4>
</div>

<code class="tsd-signature tsd-kind-icon">Options<wbr>Map<span class="tsd-signature-symbol">:</span> <span class="tsd-signature-type">object</span></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/plugin.ts#L12">plugin.ts:12</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
An `Object` whose keys are strings corresponding to your options names without the leading “--” and whose values
are either type constructors such as `String` or `Boolean` or `ValueInitializers`
</div>
</div>


<div class="tsd-type-declaration">
<strong>Type declaration</strong>
<ul class="tsd-parameters">
<li class="tsd-parameter-index-signature">
<code><span class="tsd-signature-symbol">[</span>key: <span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">]: </span><span class="tsd-signature-type">Function</span><span class="tsd-signature-symbol"> | </span><a href="../_plugin_/#valueinitializer" class="tsd-signature-type">ValueInitializer</a></code>


</li>
</ul>
</div>


</section>
<section class="pb-4 pt-2 tsd-kind-type-alias tsd-parent-kind-external-module">
<div class="d-flex flex-row">

<h4 id="valueinitializer">Value<wbr>Initializer</h4>
</div>

<code class="tsd-signature tsd-kind-icon">Value<wbr>Initializer<span class="tsd-signature-symbol">:</span> <span class="tsd-signature-type">function</span></code>

<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/plugin.ts#L6">plugin.ts:6</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
A function that takes a textual option value and deserializes it
</div>
</div>


<div class="tsd-type-declaration">
<strong>Type declaration</strong>
<ul class="tsd-parameters">
<li class="tsd-parameter-siganture">
<ul class="tsd-signatures tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported">
<code class="tsd-kind-icon"><span class="tsd-signature-symbol">(</span>value<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">any</span></code>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">value: <span class="tsd-signature-type">string</span></div>


</li>
</ul>

<strong>Returns <span class="tsd-signature-type">any</span></strong>


</li>
</ul>
</li>
</ul>
</div>


</section>
</section>
<section>
<div class="lead">Functions</div>
<section class="pb-4 pt-2 tsd-kind-function tsd-parent-kind-external-module">
<div class="d-flex flex-row">

<h4 id="template">template</h4>
</div>

<ul class="tsd-signatures tsd-kind-function tsd-parent-kind-external-module">
<li class="tsd-signature tsd-kind-icon">template<span class="tsd-signature-symbol">(</span>strings<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">TemplateStringsArray</span>, <span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">Array</span><span class="tsd-signature-symbol">&lt;</span><span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">&gt;</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/plugin.ts#L126">plugin.ts:126</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
A utility template literal tag for writing templates that corrects indentation
and prevents `null` and `undefined` values from showing.
</div>
<div markdown="1">
Unlike `templatel` this doesn't remove entire lines that contain null or undefined expressions.

</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">strings: <span class="tsd-signature-type">TemplateStringsArray</span></div>


</li>
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <span class="tsd-signature-type">Array</span><span class="tsd-signature-symbol">&lt;</span><span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">&gt;</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">


</div>
</div>

</li>
</ul>

<strong>Returns <span class="tsd-signature-type">string</span></strong>


</li>
</ul>

</section>
<section class="pb-4 pt-2 tsd-kind-function tsd-parent-kind-external-module">
<div class="d-flex flex-row">

<h4 id="templatel">templatel</h4>
</div>

<ul class="tsd-signatures tsd-kind-function tsd-parent-kind-external-module">
<li class="tsd-signature tsd-kind-icon">templatel<span class="tsd-signature-symbol">(</span>strings<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">TemplateStringsArray</span>, <span class="tsd-signature-symbol">...</span>values<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">any</span><span class="tsd-signature-symbol">[]</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">string</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/6f68f03/src/plugin.ts#L78">plugin.ts:78</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
A utility template literal tag for writing string templates that corrects indentation
and removes lines where at least one interpolation expression is `null` or `undefined`.
</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">strings: <span class="tsd-signature-type">TemplateStringsArray</span></div>


</li>
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Rest</span> <span class="tsd-signature-symbol">...</span>values: <span class="tsd-signature-type">any</span><span class="tsd-signature-symbol">[]</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">


</div>
</div>

</li>
</ul>

<strong>Returns <span class="tsd-signature-type">string</span></strong>


</li>
</ul>

</section>
</section>
