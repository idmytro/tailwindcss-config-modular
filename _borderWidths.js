// https://github.com/tailwindcss/tailwindcss/blob/master/defaultConfig.stub.js#L383

/*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

const borderWidths = {
  default: '1px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '8': '8px'
};

module.exports = borderWidths;
