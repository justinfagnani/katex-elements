# katex-elements
Web Components for easily using [KaTeX][katex] in HTML

[katex]: https://github.com/Khan/KaTeX

## Installation

```bash
> npm i katex-elements
```

## Usage

### 1. Import the elements

#### From HTML:
```html
<script type="module" src="./node_modules/katex-elements/katex-display.js"></script>
<script type="module" src="./node_modules/katex-elements/katex-inline.js"></script>
```
> _Note: the path to the JavaScript modules may depend on your npm installation_

#### From JavaScript:
```js
import {KatexDisplay} from './node_modules/katex-elements/katex-display.js';
import {KatexInline} from './node_modules/katex-elements/katex-inline.js';
```


### 2. Use the elements

## &lt;katex-inline&gt;

Renders its text content in inline mode.

### markup:

```html
<katex-inline>c = \pm\sqrt{a^2 + b^2}</katex-inline>
```

### output:
<img src="readme-katex-inline.png">

## &lt;katex-display&gt;

Renders its text content in display mode, which will put the math in display style (so `\int` and `\sum` are large, for example), and will center the math in a block element.

### markup:

```html
<katex-display>c = \pm\sqrt{a^2 + b^2}</katex-display>
```

### output:
<img src="readme-katex-display.png">
