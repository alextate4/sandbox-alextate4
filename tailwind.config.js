module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'blue',
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
