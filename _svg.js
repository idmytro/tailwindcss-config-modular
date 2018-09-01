// https://github.com/tailwindcss/tailwindcss/blob/master/defaultConfig.stub.js#L805

/*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  |
  */

const svgFill = {
  'current': 'currentColor'
};

/*
|-----------------------------------------------------------------------------
| SVG stroke                                 https://tailwindcss.com/docs/svg
|-----------------------------------------------------------------------------
|
| Here is where you define your SVG stroke colors. By default we just provide
| `stroke-current` which sets the stroke to the current text color. This lets
| you specify a stroke color using existing text color utilities and helps
| keep the generated CSS file size down.
|
| Class name: .stroke-{name}
|
*/

const svgStroke = {
  'current': 'currentColor'
};

module.exports = {
  svgFill, svgStroke
};
