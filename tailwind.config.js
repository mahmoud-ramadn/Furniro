/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '900px', 
      },
      colors:{
        primary:'#FFF3E3',
        secondry:'#B88E2F',
        third:'#333333',
         pragrph:'#666666',
         cardTitel:'#3A3A3A',
         cardSubtite:'#898989',
         cardhover:'#3A3A3A',
        darkgray:'#616161',
        lightBlack:'#3A3A3A',
         success:'#2EC1AC',
         danger:'#E97171'
      }
    },
  },
  plugins: [],
}