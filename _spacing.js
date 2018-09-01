// https://github.com/tailwindcss/tailwindcss/blob/master/defaultConfig.stub.js#L630

/*
|-----------------------------------------------------------------------------
| Padding                                https://tailwindcss.com/docs/padding
|-----------------------------------------------------------------------------
|
| Here is where you define your padding utility sizes. These can be
| percentage based, pixels, rems, or any other units. By default we
| provide a sensible rem based numeric scale plus a couple other
| common use-cases like "1px". You can, of course, modify these
| values as needed.
|
| Class name: .p{side?}-{size}
|
*/

/*
|-----------------------------------------------------------------------------
| Margin                                  https://tailwindcss.com/docs/margin
|-----------------------------------------------------------------------------
|
| Here is where you define your margin utility sizes. These can be
| percentage based, pixels, rems, or any other units. By default we
| provide a sensible rem based numeric scale plus a couple other
| common use-cases like "1px". You can, of course, modify these
| values as needed.
|
| Class name: .m{side?}-{size}
|
*/

/*
|-----------------------------------------------------------------------------
| Negative margin                https://tailwindcss.com/docs/negative-margin
|-----------------------------------------------------------------------------
|
| Here is where you define your negative margin utility sizes. These can
| be percentage based, pixels, rems, or any other units. By default we
| provide matching values to the padding scale since these utilities
| generally get used together. You can, of course, modify these
| values as needed.
|
| Class name: .-m{side?}-{size}
|
*/

const spacing = {
  'px': '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem'
};

module.exports = spacing;
