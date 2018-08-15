const colors = [
  {transparent: 'transparent'},
  require('./bw'),
  require('./_blue'),
  require('./_green'),
  require('./_indigo'),
  require('./_orange'),
  require('./_pink'),
  require('./_purple'),
  require('./_red'),
  require('./_teal'),
  require('./_yellow')
];

module.exports =  Object.assign(...colors);
