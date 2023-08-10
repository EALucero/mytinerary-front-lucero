/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {},
      fontFamily: {
        sans: ['Segoe UI','sans-serif'],
      }
  },
  variants: {},
  plugins: []
}