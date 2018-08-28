// https://github.com/tailwindcss/tailwindcss/blob/master/defaultConfig.stub.js

const colors = require('./_colors');

module.exports = {
  colors,
  screens: require('./_screens'),
  fonts: require('./_fonts'),
  textSizes: require('./_textSizes'),
  fontWeights: require('./_fontWeights'),
  leading: require('./_leading'),
  // tracking
  textColors: colors,
  backgroundColors: colors
  // backgroundSize
  // borderWidths
  // borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
  // borderRadius
  // width
  // height
  // minWidth
  // minHeight
  // maxWidth
  // maxHeight
  // padding
  // margin
  // negativeMargin
  // shadows
  // zIndex
  // opacity
  // svgFill
  // svgStroke
};
