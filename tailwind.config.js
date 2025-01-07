/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',

      // Custom Colors from Figma
      primary: {
        100: '#FFF9F0',
        200: '#FFEEDC',
        300: '#FFE5CC',
        400: '#FFD8B8',
        500: '#FFF3E3', // Base color
        600: '#FFCEA0',
        700: '#F3C089',
        800: '#D1A757',
        900: '#B88E2F',
      },

      secondary: {
        100: '#FAF7F5',
        200: '#F1E8E1',
        300: '#EAD7CD',
        400: '#D5C2B8',
        500: '#B88E2F', // Base color
        600: '#977324',
        700: '#745A1A',
        800: '#523F11',
        900: '#3A2C0B',
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
        100: '#D6F8F2',
        200: '#AEEFE3',
        300: '#62DAC7',
        400: '#31C9B4',
        500: '#2EC1AC', // Base color
        600: '#24A591',
        700: '#1A8876',
        800: '#106A5B',
        900: '#084E42',
      },
      Cardeatios: {
        500: '#F4F5F7',
      },

      danger: {
        100: '#FBE8E8',
        200: '#F5C7C7',
        300: '#F39B9B',
        400: '#EE7A7A',
        500: '#E97171', // Base color
        600: '#C25A5A',
        700: '#993C3C',
        800: '#732929',
        900: '#521A1A',
      },
    },
    extend:{
       container:{
        center:true,
       }
    }
  },
  plugins: [],
};
