// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  // darkMode: 'class', // or false or 'media'
  // important: true,
  // Use JIT instead
  // purge: {},
  theme: {
    colors: {
      gray: colors.fuchsia,
      transparent: colors.transparent,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Work Sans', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'gray': '#ff0000',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      textDecoration: ['active'],
    }
  }
}