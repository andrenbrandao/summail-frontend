module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
