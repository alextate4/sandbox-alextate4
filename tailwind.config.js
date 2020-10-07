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
        14: ['14px', '18px'],
        16: ['16px', '24px'],
        20: ['20px', '24px'],
        36: ['36px', '45px'],
      },
      scale: {
        invert: '-1',
      },
    },
    typography: {
      default: {
        css: {
          color: '#eaeaea',
          fontFamily: 'Montserrat',
          fontWeight: '500',
          fontSize: '16px',
          img: {
            marginTop: '2.5rem',
            marginRight: 'auto',
            marginBottom: '0',
            marginLeft: 'auto',
          },
          p: {
            marginTop: '1.75rem',
            marginBottom: '0',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
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
