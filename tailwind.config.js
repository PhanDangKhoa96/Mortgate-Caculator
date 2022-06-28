/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#383F50'
      },
      screens: {
        'xs': '480px'
      }
    },
  },
  plugins: [],
}
