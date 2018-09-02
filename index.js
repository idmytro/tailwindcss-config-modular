// https://github.com/tailwindcss/tailwindcss/blob/master/defaultConfig.stub.js

const colors = require('./_colors');
const spacing = require('./_spacing');
const modules = require('./modules');

module.exports = {
  colors,
  screens: require('./_screens'),
  fonts: require('./_fonts'),
  textSizes: require('./_textSizes'),
  fontWeights: require('./_fontWeights'),
  leading: require('./_leading'),
  tracking: require('./_tracking'),
  textColors: colors,
  backgroundColors: colors,
  backgroundSize: require('./_backgroundSize'),
  borderWidths: require('./_borderWidths'),
  borderColors: global.Object.assign({
    current: 'currentColor',
    default: colors['grey-light']
  }, colors),
  borderRadius: require('./_borderRadius'),
  width: require('./_width'),
  height: require('./_height'),
  minWidth: require('./_minWidth'),
  minHeight: require('./_minHeight'),
  maxWidth: require('./_maxWidth'),
  maxHeight: require('./_maxHeight'),
  padding: spacing,
  margin: global.Object.assign({auto: 'auto'}, spacing),
  negativeMargin: spacing,
  shadows: require('./_shadows'),
  zIndex: require('./_zIndex'),
  opacity: require('./_opacity'),
  svgFill: require('./_svg').svgFill,
  svgStroke: require('./_svg').svgStroke,

  modules,

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require('tailwindcss/plugins/container')({
    // center: true,
    // padding: '1rem',
    })
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':'
  }

};
