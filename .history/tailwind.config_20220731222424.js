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
          dropShadow: {
            '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
            '4xl': [
                '0 35px 35px rgba(0, 0, 0, 0.25)',
                '0 45px 65px rgba(0, 0, 0, 0.15)'
            ]
          }
        }
    },
  plugins: [],
}
