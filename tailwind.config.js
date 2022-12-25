/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          to: {
            "margin-left": "-51%"
          }
        }
      },
      colors: {
        ultramarine: "#2644F5"
      }
    },
    animation: {
      wave: "wave 1.5s ease-in-out infinite"
    },
    fontFamily: {
      sans: ['Fredoka One', "cursive"],
      'raleway': ['Raleway', 'sans-serif'],
    },

  },
  plugins: [],
}