/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", './build/js/*.js'],
  theme: {
    extend: {
      screens: {
        "widescreen": {"raw": "(min-aspect-ratio: 3/2)"},
        "tallscreen": {"raw": "(max-aspect-ratio: 1/2)"},
      },
      keyframes: {
        openMenu: {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
       },
      },
      animation: {
        openMenu: 'openMenu 0.3s ease-in-out forwards',
      },
    },
      plugins: [],
}}

