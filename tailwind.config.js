/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        ubunto: ["ubunto"],
        ralway: ['ralway'],
        
      },
      spacing: {
        'full-w': "100%",
        'full-h': "100vh",
        'image-w': "50%",
        'text-w': "50%",
        'little-img-w': "50px",
        'little-img-h': "50px",
        'line-height': "2px"
      },
      fontSize: {
        "bozorg": '5rem',
        "mamuli": "1.3rem"
      },
      colors: {
        'tooLow': "#abcd9e",
        'low': '#88b990',
        'medium': "#338275",
        'high': '#1b515e',
        'darkPurple': '#35215f',
        'lightPurple': '#d5caee'

      }
    },
  },
  plugins: [],
}