/** @type {import('tailwindcss').Config} */
export const mode = 'jit';
export const content = [
  './src/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  extend: {
    colors: {
      primary: '#4F46E5',
    },
  },
  fontFamily: {
    sans: ['Segoe UI', 'sans-serif'],
  }
};
export const variants = {};
export const plugins = [];