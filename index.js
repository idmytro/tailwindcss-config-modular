// https://github.com/tailwindcss/tailwindcss/blob/master/defaultConfig.stub.js

const colors = require('./_colors');

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
  // width
  // height
  // minWidth
  // minHeight
  // maxWidth
  // maxHeight
  // padding
  // margin
  // negativeMargin
  shadows: require('./_shadows'),
  zIndex: require('./_zIndex'),
  opacity: require('./_opacity'),
  svgFill: require('./_svg').svgFill,
  svgStroke: require('./_svg').svgStroke
};
