// https://github.com/tailwindcss/tailwindcss/blob/master/defaultConfig.stub.js#L30

/*
|-----------------------------------------------------------------------------
| Colors                                  https://tailwindcss.com/docs/colors
|-----------------------------------------------------------------------------
|
| The color palette defined above is also assigned to the "colors" key of
| your Tailwind config. This makes it easy to access them in your CSS
| using Tailwind's config helper. For example:
|
| .error { color: config('colors.red') }
|
*/

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
