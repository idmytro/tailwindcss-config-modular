// https://github.com/tailwindcss/tailwindcss/blob/master/defaultConfig.stub.js#L862

/*
|-----------------------------------------------------------------------------
| Modules                  https://tailwindcss.com/docs/configuration#modules
|-----------------------------------------------------------------------------
|
| Here is where you control which modules are generated and what variants are
| generated for each of those modules.
|
| Currently supported variants:
|   - responsive
|   - hover
|   - focus
|   - active
|   - group-hover
|
| To disable a module completely, use `false` instead of an array.
|
*/

const modules = {
  appearance: ['responsive'],
  backgroundAttachment: ['responsive'],
  backgroundColors: ['responsive', 'hover', 'focus'],
  backgroundPosition: ['responsive'],
  backgroundRepeat: ['responsive'],
  backgroundSize: ['responsive'],
  borderCollapse: [],
  borderColors: ['responsive', 'hover', 'focus'],
  borderRadius: ['responsive'],
  borderStyle: ['responsive'],
  borderWidths: ['responsive'],
  cursor: ['responsive'],
  display: ['responsive'],
  flexbox: ['responsive'],
  float: ['responsive'],
  fonts: ['responsive'],
  fontWeights: ['responsive', 'hover', 'focus'],
  height: ['responsive'],
  leading: ['responsive'],
  lists: ['responsive'],
  margin: ['responsive'],
  maxHeight: ['responsive'],
  maxWidth: ['responsive'],
  minHeight: ['responsive'],
  minWidth: ['responsive'],
  negativeMargin: ['responsive'],
  opacity: ['responsive'],
  outline: ['focus'],
  overflow: ['responsive'],
  padding: ['responsive'],
  pointerEvents: ['responsive'],
  position: ['responsive'],
  resize: ['responsive'],
  shadows: ['responsive', 'hover', 'focus'],
  svgFill: [],
  svgStroke: [],
  tableLayout: ['responsive'],
  textAlign: ['responsive'],
  textColors: ['responsive', 'hover', 'focus'],
  textSizes: ['responsive'],
  textStyle: ['responsive', 'hover', 'focus'],
  tracking: ['responsive'],
  userSelect: ['responsive'],
  verticalAlign: ['responsive'],
  visibility: ['responsive'],
  whitespace: ['responsive'],
  width: ['responsive'],
  zIndex: ['responsive']
};

module.exports = modules;
