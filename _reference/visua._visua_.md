---
name: "&quot;visua&quot;"
kindString: External module
kind: 1
modelUrl: visua._visua_.md
moduleUrl: visua._visua_
title: External module &quot;visua&quot;
---







<section >
<div class="lead pb-2">Index</div>
<section class="tsd-panel tsd-index-panel">
<div class="tsd-index-content">
<section class="tsd-index-section ">
<strong>Interfaces</strong>
<ul>
<li class=""><a href=".visua._visua_.visuaoptions/" class="tsd-kind-icon">Visua<wbr>Options</a></li>
</ul>
</section>
<section class="tsd-index-section ">
<strong>Functions</strong>
<ul>
<li class=""><a href=".visua._visua_/#visua" class="tsd-kind-icon">visua</a></li>
</ul>
</section>
</div>
</section>
</section>
<section>
<div class="lead">Functions</div>
<section class="pb-4 pt-2 ">
<div class="d-flex flex-row">
<div class="h4 pr-1"><span class="badge badge-primary">Const</span></div>
<h4 id="visua">visua</h4>
</div>

<ul class="tsd-signatures ">
<li class="tsd-signature tsd-kind-icon">visua<span class="tsd-signature-symbol">(</span>options<span class="tsd-signature-symbol">?: </span><a href=".visua._visua_.visuaoptions/" class="tsd-signature-type">VisuaOptions</a><span class="tsd-signature-symbol">)</span><span class="tsd-signature-symbol">: </span><a href=".visua._cssom_style_map_.stylemap/" class="tsd-signature-type">StyleMap</a></li>
</ul>

<ul class="tsd-descriptions">
<li class="tsd-description">
<aside class="tsd-sources pb-2">
<div class="d-flex flex-column">
<small class="text-muted">Defined in <a href="https://github.com/umbopepato/visua/blob/dbefde1/src/visua.ts#L88">visua.ts:88</a></small>
</div>
</aside>
<div class="pt-1 tsd-comment">
<div markdown="1">
Builds a StyleMap from the provided identity stylesheets.
</div>
<div markdown="1">
If called without options, the `visua` method searches for a file named exactly
identity.css in the current working directory:

```typescript
const styleMap = visua();
```

The path option can be used to specify a relative path to a directory containing
the file identity.css or to a specific file.

The following example searches for a file named identity.css in cwd/subdir:
```typescript
const styleMap = visua({
    path: 'subdir',
});
```

The following example loads a file named main.css in subdir subdirectory:
```typescript
const styleMap = visua({
    path: 'subdir/main.css',
});
```

The strict option can be used to terminate the process on parse errors,
otherwise Visua will try to recover from soft errors in the css:
```typescript
const styleMap = visua({
    path: 'subdir/main.css',
    strict: true,
});
```

</div>
</div>


<strong>Parameters</strong>
<ul class="pl-3 pb-2 list-style-initial">
<li>
<div class="h6 mb-0"><span class="badge badge-primary">Optional</span> options: <a href=".visua._visua_.visuaoptions/" class="tsd-signature-type">VisuaOptions</a></div>

<div class="pt-1 tsd-comment">
<div markdown="1">
Visua options
</div>
</div>

</li>
</ul>

<strong>Returns <a href=".visua._cssom_style_map_.stylemap/" class="tsd-signature-type">StyleMap</a></strong>

<div class="pt-1" markdown="1">
The generated StyleMap

</div>

</li>
</ul>

</section>
</section>
