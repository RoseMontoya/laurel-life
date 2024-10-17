/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/*.{js,jsx,ts,tsx}`,
    `./src/components/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#132043',
        medBlue: '#1F4172',
        pink: '#F1B4BB',
        lightPink: '#FDF0F0'
      },
      minHeight: {
        vh: '100vh'
      },
      textColor: {
        DEFAULT: '#132043'
      }
    },
  },
  plugins: [],
}
