/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#CCCCCC',
        'alto': {
          '50': '#fdfdfd', 
          '100': '#fcfcfc', 
          '200': '#f7f7f7', 
          '300': '#f2f2f2', 
          '400': '#e9e9e9', 
          '500': '#dfdfdf', 
          '600': '#c9c9c9', 
          '700': '#a7a7a7', 
          '800': '#868686', 
          '900': '#6d6d6d'
        },
        'alabaster': {
          '50': '#ffffff', 
          '100': '#ffffff', 
          '200': '#fefefe', 
          '300': '#fdfdfd', 
          '400': '#fcfcfc', 
          '500': '#fafafa', 
          '600': '#e1e1e1', 
          '700': '#bcbcbc', 
          '800': '#969696', 
          '900': '#7b7b7b'
        },
        'turquoise-blue': {
          '50': '#f5feff', 
          '100': '#ebfdff', 
          '200': '#ccf9ff', 
          '300': '#aef5ff', 
          '400': '#71eeff', 
          '500': '#34e7ff', 
          '600': '#2fd0e6', 
          '700': '#27adbf', 
          '800': '#1f8b99', 
          '900': '#19717d'
        }
      }
    },
  },
  plugins: [],
}
