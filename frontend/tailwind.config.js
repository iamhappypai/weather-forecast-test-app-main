/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'green',
          300: 'blue' // Replace with your desired color value
          // Add other shades if necessary
        },
      },
    },
  },
  // Ensure the 'focus' variant is enabled for ring utilities
  variants: {
    extend: {
      ringWidth: ['focus'],
      ringColor: ['focus'],
    },
  },
  plugins: [],
}
