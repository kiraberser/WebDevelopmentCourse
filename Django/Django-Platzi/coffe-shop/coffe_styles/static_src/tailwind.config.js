module.exports = {
  content: [
    '../templates/**/*.html',
    '../../templates/**/*.html',
    '../../**/templates/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'cafe',
      {
        cafe: {
          primary: "#7b4f2b",
          secondary: "#dac1a3",
          accent: "#c8a07e",
          neutral: "#2e2a26",
          "base-100": "#f5f5f4",
          info: "#9dd7d7",
          success: "#a4d3ae",
          warning: "#facc15",
          error: "#e57373",
        },
      }
    ],
  },
}