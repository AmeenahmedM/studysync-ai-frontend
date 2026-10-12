/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 30px rgba(15, 23, 42, 0.08)'
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dfeaff',
          200: '#bfd6ff',
          300: '#90b8ff',
          400: '#5a8fff',
          500: '#3b6ef5',
          600: '#2d57cf',
          700: '#2849a7',
          800: '#243f86',
          900: '#1d2d5e'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
