/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#cffafe',
          300: '#67e8f9',
        }
      },
      fontFamily: {
        body: ['Lato']
      }
    },
  },
  plugins: [],
}
