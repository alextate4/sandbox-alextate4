module.exports = {
  theme: {
    extend: {
      colors: {
        bgIndigo: '#0a0e28',
        DarkTeal: '#1a95a4',
        earthBlue: '#4b97d2',
        'greeny-blue': '#57bda2',
        jupiterOrange: '#c86a28',
        marsRed: '#ad2524',
        mercuryLavender: '#7a65ac',
        neptuneBlue: '#4469b1',
        plutoBrown: '#876d67',
        saturnYellow: '#c5a95c',
        slateGray: '#7c7d8b',
        sunflowerYellow: '#dcb13c',
        UranusBlue: '#2a9bb8',
        venusOrange: '#d99822',
        veryLightBlue: '#d3e1e6',
        veryLightGray: '#eaeaea',
      },
      fontFamily: {
        montserrat: 'Montserrat',
        voyager: 'Voyager',
      },
      fontSize: {
        14: ['14px', '1.125'],
        16: ['16px', '1.5'],
        20: ['20px', '1.5'],
        36: ['36px', '1.2'],
      },
      scale: {
        invert: '-1',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
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
