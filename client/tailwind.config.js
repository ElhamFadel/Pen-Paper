/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      whitesmoke: '#F5F5F5',
      primary: '#1A202C', // a dark blue-gray color for the background and headings
      secondary: '#2D3748', // a slightly lighter shade of the primary color for accents and buttons
      text: '#4A5568', // a medium gray color for body text
      white: '#FFFFFF', // a pure white color for text and backgrounds
      black: '#000000', // a pure black color for the icon and other accents
    },
    extend: {},
  },
  plugins: [],
};
