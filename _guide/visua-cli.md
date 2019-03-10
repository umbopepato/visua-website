---
title: Visua CLI
index: 2
---

Visua's npm package exposes a small CLI under the `visua` command for managing your projects, running and building
plugins.

#### Global options

The following global options can be prepended to `list` and `run` commands:

```
-s or --strict
``` 

Stops visua execution if some error has occurred during parsing.

```
-p or --path [identityFilePath]
```

Tells visua to use `identityFilePath` as main identity file instead of the default `./identity.css`. `identityFilePath`
can also be the path of a directory containing a file exactly called `identity.css`.

#### List

The `list` or `ls` command loads identity files and displays the generated `StyleMap` in a table.

```bash
$ visua list
$ visua ls
```

#### Run

The `run` command is used to run visua cli plugins.

```bash
$ visua run (<plugin-name> [--plugin-option>]...)...
```

More than one plugin can be specified in run:

```bash
$ visua run plugin-one --pluginOneOption plugin-two plugin-three --pluginThreeOption
```

**Options**

Options that contain a value must be specified with `=`, without spaces and strings with whitespaces must be quoted:

```bash
$ visua run plugin-name --optionOne=value --optionTwo="value with spaces"
```

None of the following is valid:

```bash
$ visua run plugin-name --optionOne value --optionTwo = "value with spaces"
```

#### Plugin

The `plugin` or `pl` command starts an interactive shell that will walk you through the creation of a new empty plugin
from the starter template.

```bash
$ visua plugin
$ visua pl
```