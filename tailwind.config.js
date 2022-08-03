/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {
          colors: {
            'light-purple': '#E2E7FD',
            'dark-purple': '#2A2961',
          },
          flexBasis: {
            '1/8': '12.5%',
            '2/8': '25%',
            '5/8': '62.5%',
          },
          aspectRatio: {
            '7/4': '7/4',
          },
          spacing: {
            '120': '30rem',
            '128': '32rem',
            '136': '34rem',
            '144': '36rem',
            '152': '38rem',
            '160': '40rem',
          }
        }
    },
  plugins: [],
}
