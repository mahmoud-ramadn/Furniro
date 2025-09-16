/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      primary: {
        500: '#FFF3E3',
      },
      secondary: {
        400: '#C99E57',
        500: '#B88E2F',
        600: '#A07C25',
        700: '#886A1B',
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
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
