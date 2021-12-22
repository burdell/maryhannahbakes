const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      height: {
        logoHeight: '278px',
      },
      fontFamily: {
        sans: ['Poppins', 'Georgia', 'sans-serif'],
        serif: ['Spectral', 'Georgia', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
