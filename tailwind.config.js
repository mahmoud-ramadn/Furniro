/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      primary: {
        500: '#FFF3E3',
      },
      secondary: {
        500: '#B88E2F',
      },
      text: {
        primary: '#333333',
        secondary: '#666666',
        cardTitle: '#3A3A3A',
        cardSubtitle: '#898989',
        dark: '#3A3A3A',
        phargraph: '#616161',
        links: '#9F9F9F',
      },
      success: {
        500: '#2EC1AC',
      },
      cardBackground: {
        500: '#F4F5F7',
      },
      danger: {
        500: '#E97171',
      },
    },
    extend: {
      container:{
        center:true
      }
    },
  },
  plugins: [],
};
