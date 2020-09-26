module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          BGDarkBlue: '#0a0e28',
          earthBlue: '#4b97d2',
          neptuneBlue: '#4469b1',
          uranusBlue: '#2a9bb8',
        },
        brown: {
          plutoBrown: '#876d67',
          saturnBrown: '#c5a95c',
        },
        grey: {
          VeryLightGrey: '#eaeaea',
        },
        lavender: {
          MercuryLavender: '#7a65ac',
        },
        orange: {
          jupiterOrange: '#c86a28',
          venusOrange: '#d99822',
        },
        red: {
          marsRed: '#ad2524',
        },
        yellow: {
          sunflowerYellow: '#dcb13c',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
