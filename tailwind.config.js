/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '8rem',
        lg: '4rem',
        xl: '2rem',
      },
      screens:{
        xl:"1280px"
      },
      center:true,
    },
    extend: {
      colors: {
        'customBlue': '#0F345A',
      },
      fontFamily: {
        'nunitoExtraLight': ['"Nunito Extra Light"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
}

