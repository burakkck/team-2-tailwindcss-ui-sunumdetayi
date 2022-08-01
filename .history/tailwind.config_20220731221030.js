/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    extend: {
      theme: {
        colors: {
          'light-purple': '#E3E8FE',
          'dark-purple': '#222222',
        },
      flexBasis: {
        '1/8': '12.5%',
        '2/8': '25%',
        '5/8': '62.5%',
      }
    },
  },
  plugins: [],
}
