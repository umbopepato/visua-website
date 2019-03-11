---
name: "Plugin"
kindString: Class
kind: 128
modelUrl: ./_plugin_.plugin.md
moduleUrl: _plugin_
title: Class Plugin
---
<section class="tsd-panel tsd-comment">
<div class="pt-1 tsd-comment">
<div markdown="1">
A base class to create Visua CLI plugins
</div>
</div>
</section>


<section class="pt-2 tsd-panel tsd-hierarchy">
<div class="lead">Hierarchy</div>
<ul class="pl-3 tsd-hierarchy list-style-initial">
<li>
<span class="target">Plugin</span>

</li>
</ul>

</section>





<section >
<div class="lead pb-2">Index</div>
<section class="tsd-panel tsd-index-panel">
<div class="tsd-index-content">
<section class="tsd-index-section ">
<strong>Accessors</strong>
<ul>
<li class="tsd-kind-get-signature tsd-parent-kind-class tsd-is-static"><a href="../_plugin_.plugin/#options" class="tsd-kind-icon">options</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Methods</strong>
<ul>
<li class="tsd-kind-method tsd-parent-kind-class"><a href="../_plugin_.plugin/#run" class="tsd-kind-icon">run</a></li>
</ul>
</section>
</div>
</section>
</section>
<section>
<div class="lead">Accessors</div>
<section class="pb-4 pt-2 tsd-kind-get-signature tsd-parent-kind-class tsd-is-static">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Static</span></div>
<h4 id="options">options</h4>
</div>


<ul class="tsd-signatures tsd-kind-get-signature tsd-parent-kind-class tsd-is-static">
<li class="tsd-signature tsd-kind-icon"><span class="tsd-signature-symbol">get</span> options<span class="tsd-signature-symbol">(</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href="../_plugin_/#optionsmap" class="tsd-signature-type">OptionsMap</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/098ba6b/src/plugin.ts#L38">plugin.ts:38</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Plugin command line options map
</div>
<div markdown="1">
If your plugin uses some options you should override this accessor to return a non-empty `OptionsMap`.
For example if your plugin accepts two options:

- `optOne`, a boolean flag
- `optTwo`, a comma-separated list of strings

The corresponding implementation of options would be:
```typescript
static get options(): OptionsMap {
    return {
        optOne: Boolean,
        optTwo: (value: string) => value.split(','),
    };
}
```

</div>
</div>



<strong>Returns <a href="../_plugin_/#optionsmap" class="tsd-signature-type">OptionsMap</a></strong>


</li>
</ul>

</section>
</section>
<section>
<div class="lead">Methods</div>
<section class="pb-4 pt-2 tsd-kind-method tsd-parent-kind-class">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Abstract</span></div>
<h4 id="run">run</h4>
</div>

<ul class="tsd-signatures tsd-kind-method tsd-parent-kind-class">
<li class="tsd-signature tsd-kind-icon">run<span class="tsd-signature-symbol">(</span>styleMap<span class="tsd-signature-symbol">: </span><a href="../_cssom_style_map_.stylemap/" class="tsd-signature-type">StyleMap</a>, options<span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">object</span><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><span class="tsd-signature-type">any</span></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/098ba6b/src/plugin.ts#L48">plugin.ts:48</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
The entry point of the plugin called by the CLI after the options have been initialized
</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0">styleMap: <a href="../_cssom_style_map_.stylemap/" class="tsd-signature-type">StyleMap</a></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
The StyleMap Visua generated from the loaded identity css files
</div>
</div>

</li>
<li>
<div class="h6 mb-0">options: <span class="tsd-signature-type">object</span></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
The initialized plugin options

</div>
</div>

<ul class="tsd-parameters">
<li class="tsd-parameter-index-signature">
<code><span class="tsd-signature-symbol">[</span>key: <span class="tsd-signature-type">string</span><span class="tsd-signature-symbol">]: </span><span class="tsd-signature-type">any</span></code>


</li>
</ul>
</li>
</ul>

<strong>Returns <span class="tsd-signature-type">any</span></strong>


</li>
</ul>

</section>
</section>
