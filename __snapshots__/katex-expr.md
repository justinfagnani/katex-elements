# `katex-expr`

#### `empty element`

```html
<div id="container">
</div>
<div hidden="">
  <slot>
  </slot>
</div>

```

#### `quadratic equation`

```html
<div id="container">
  <span class="katex">
    <span class="katex-mathml">
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <semantics>
          <mrow>
            <mi>
              c
            </mi>
            <mo>
              =
            </mo>
            <mi>
              p
            </mi>
            <mi>
              m
            </mi>
            <mi>
              s
            </mi>
            <mi>
              q
            </mi>
            <mi>
              r
            </mi>
            <mi>
              t
            </mi>
            <mrow>
              <msup>
                <mi>
                  a
                </mi>
                <mn>
                  2
                </mn>
              </msup>
              <mo>
                +
              </mo>
              <msup>
                <mi>
                  b
                </mi>
                <mn>
                  2
                </mn>
              </msup>
            </mrow>
          </mrow>
          <annotation encoding="application/x-tex">
            c = pmsqrt{a^2 + b^2}
          </annotation>
        </semantics>
      </math>
    </span>
    <span
      aria-hidden="true"
      class="katex-html"
    >
      <span class="base">
        <span
          class="strut"
          style="height: 0.43056em; vertical-align: 0em;"
        >
        </span>
        <span class="mathnormal mord">
          c
        </span>
        <span
          class="mspace"
          style="margin-right: 0.277778em;"
        >
        </span>
        <span class="mrel">
          =
        </span>
        <span
          class="mspace"
          style="margin-right: 0.277778em;"
        >
        </span>
      </span>
      <span class="base">
        <span
          class="strut"
          style="height: 1.00855em; vertical-align: -0.19444em;"
        >
        </span>
        <span class="mathnormal mord">
          p
        </span>
        <span class="mathnormal mord">
          m
        </span>
        <span class="mathnormal mord">
          s
        </span>
        <span
          class="mathnormal mord"
          style="margin-right: 0.03588em;"
        >
          q
        </span>
        <span
          class="mathnormal mord"
          style="margin-right: 0.02778em;"
        >
          r
        </span>
        <span class="mathnormal mord">
          t
        </span>
        <span class="mord">
          <span class="mord">
            <span class="mathnormal mord">
              a
            </span>
            <span class="msupsub">
              <span class="vlist-t">
                <span class="vlist-r">
                  <span
                    class="vlist"
                    style="height: 0.814108em;"
                  >
                    <span style="top: -3.063em; margin-right: 0.05em;">
                      <span
                        class="pstrut"
                        style="height: 2.7em;"
                      >
                      </span>
                      <span class="mtight reset-size6 size3 sizing">
                        <span class="mord mtight">
                          2
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span
            class="mspace"
            style="margin-right: 0.222222em;"
          >
          </span>
          <span class="mbin">
            +
          </span>
          <span
            class="mspace"
            style="margin-right: 0.222222em;"
          >
          </span>
          <span class="mord">
            <span class="mathnormal mord">
              b
            </span>
            <span class="msupsub">
              <span class="vlist-t">
                <span class="vlist-r">
                  <span
                    class="vlist"
                    style="height: 0.814108em;"
                  >
                    <span style="top: -3.063em; margin-right: 0.05em;">
                      <span
                        class="pstrut"
                        style="height: 2.7em;"
                      >
                      </span>
                      <span class="mtight reset-size6 size3 sizing">
                        <span class="mord mtight">
                          2
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</div>
<div hidden="">
  <slot>
  </slot>
</div>

```

#### `change text content`

```html
<div id="container">
  <span class="katex">
    <span class="katex-mathml">
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <semantics>
          <mrow>
            <mi>
              c
            </mi>
            <mo>
              =
            </mo>
            <mi>
              p
            </mi>
            <mi>
              m
            </mi>
            <mi>
              s
            </mi>
            <mi>
              q
            </mi>
            <mi>
              r
            </mi>
            <mi>
              t
            </mi>
            <mrow>
              <msup>
                <mi>
                  a
                </mi>
                <mn>
                  2
                </mn>
              </msup>
              <mo>
                +
              </mo>
              <msup>
                <mi>
                  b
                </mi>
                <mn>
                  2
                </mn>
              </msup>
            </mrow>
          </mrow>
          <annotation encoding="application/x-tex">
            c = pmsqrt{a^2 + b^2}
          </annotation>
        </semantics>
      </math>
    </span>
    <span
      aria-hidden="true"
      class="katex-html"
    >
      <span class="base">
        <span
          class="strut"
          style="height: 0.43056em; vertical-align: 0em;"
        >
        </span>
        <span class="mathnormal mord">
          c
        </span>
        <span
          class="mspace"
          style="margin-right: 0.277778em;"
        >
        </span>
        <span class="mrel">
          =
        </span>
        <span
          class="mspace"
          style="margin-right: 0.277778em;"
        >
        </span>
      </span>
      <span class="base">
        <span
          class="strut"
          style="height: 1.00855em; vertical-align: -0.19444em;"
        >
        </span>
        <span class="mathnormal mord">
          p
        </span>
        <span class="mathnormal mord">
          m
        </span>
        <span class="mathnormal mord">
          s
        </span>
        <span
          class="mathnormal mord"
          style="margin-right: 0.03588em;"
        >
          q
        </span>
        <span
          class="mathnormal mord"
          style="margin-right: 0.02778em;"
        >
          r
        </span>
        <span class="mathnormal mord">
          t
        </span>
        <span class="mord">
          <span class="mord">
            <span class="mathnormal mord">
              a
            </span>
            <span class="msupsub">
              <span class="vlist-t">
                <span class="vlist-r">
                  <span
                    class="vlist"
                    style="height: 0.814108em;"
                  >
                    <span style="top: -3.063em; margin-right: 0.05em;">
                      <span
                        class="pstrut"
                        style="height: 2.7em;"
                      >
                      </span>
                      <span class="mtight reset-size6 size3 sizing">
                        <span class="mord mtight">
                          2
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span
            class="mspace"
            style="margin-right: 0.222222em;"
          >
          </span>
          <span class="mbin">
            +
          </span>
          <span
            class="mspace"
            style="margin-right: 0.222222em;"
          >
          </span>
          <span class="mord">
            <span class="mathnormal mord">
              b
            </span>
            <span class="msupsub">
              <span class="vlist-t">
                <span class="vlist-r">
                  <span
                    class="vlist"
                    style="height: 0.814108em;"
                  >
                    <span style="top: -3.063em; margin-right: 0.05em;">
                      <span
                        class="pstrut"
                        style="height: 2.7em;"
                      >
                      </span>
                      <span class="mtight reset-size6 size3 sizing">
                        <span class="mord mtight">
                          2
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</div>
<div hidden="">
  <slot>
  </slot>
</div>

```

```html
<div id="container">
  <span class="katex">
    <span class="katex-mathml">
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <semantics>
          <mrow>
            <mi>
              x
            </mi>
            <mo>
              =
            </mo>
            <mn>
              4
            </mn>
          </mrow>
          <annotation encoding="application/x-tex">
            x = 4
          </annotation>
        </semantics>
      </math>
    </span>
    <span
      aria-hidden="true"
      class="katex-html"
    >
      <span class="base">
        <span
          class="strut"
          style="height: 0.43056em; vertical-align: 0em;"
        >
        </span>
        <span class="mathnormal mord">
          x
        </span>
        <span
          class="mspace"
          style="margin-right: 0.277778em;"
        >
        </span>
        <span class="mrel">
          =
        </span>
        <span
          class="mspace"
          style="margin-right: 0.277778em;"
        >
        </span>
      </span>
      <span class="base">
        <span
          class="strut"
          style="height: 0.64444em; vertical-align: 0em;"
        >
        </span>
        <span class="mord">
          4
        </span>
      </span>
    </span>
  </span>
</div>
<div hidden="">
  <slot>
  </slot>
</div>

```

