# katex-elements
Custom elements for easily using [KaTeX][katex]

[katex]: https://github.com/Khan/KaTeX

##Usage

### 1. Import the elements

```html
<link rel="import" href="../katex-elements/katex-elements.html">
```

### 2. Use the elements!

## &lt;katex-inline&gt;

Renders its text content in inline mode.

###markup:

```html
<katex-inline>c = \pm\sqrt{a^2 + b^2}</katex-inline>
```

###output:
<img src="readme-katex-inline.png">

##&lt;katex-display&gt;

Renders its text content in display mode, which will put the math in display style (so `\int` and `\sum` are large, for example), and will center the math in a block element.

###markup:

```html
<katex-display>c = \pm\sqrt{a^2 + b^2}</katex-display>
```

###output:
<img src="readme-katex-display.png">
