const plugin = require('tailwindcss/plugin');

const gradientText = plugin(
  function ({ addUtilities, theme, e }) {
    const linearDirections = theme('linearDirections');
    const linearUtilities = Object.entries(linearDirections).map(([key, value]) => {
      return {
        [`.${e(`text-gradient-to-${key}`)}`]: {
          color: 'transparent',
          backgroundClip: 'text',
          backgroundImage: `linear-gradient(${value}, var(--tw-gradient-stops))`
        }
      };
    });

    const radialUtilities = {
      [`.${e(`text-gradient-radial`)}`]: {
        color: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'radial-gradient(circle at center, var(--tw-gradient-stops))'
      }
    };

    addUtilities([linearUtilities, radialUtilities]);
  },
  {
    theme: {
      linearDirections: {
        r: 'to right',
        l: 'to left',
        t: 'to top',
        b: 'to bottom',
        tr: 'to top right',
        tl: 'to top left',
        br: 'to bottom right',
        bl: 'to bottom left'
      }
    }
  }
);

module.exports = gradientText;
