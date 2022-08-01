/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flexBasis: {
        '1/8': '12.5%',
        '2/8': '25%',
        '5/8': '62.5%',
      },
      aspectRatio: {
        '7/4': '7/4',
      }
    },
  },
  plugins: [],
}
