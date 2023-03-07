/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#2644F5",

        },
      },
    ],
  },
  theme: {
    screens: {
      'xs': '100px',
      'sm': '340px',
      'md': '767px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        wave: {
          to: {
            "margin-left": "-51%"
          }
        }
      },
      colors: {
        ultramarine: "#2644F5",
        butter: "#FCF8E5"
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
  plugins: [require("daisyui")],
}