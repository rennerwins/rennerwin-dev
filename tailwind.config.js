module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#667EEA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#EDEFFC',
          300: '#C0CAF6',
          400: '#93A4F0',
          500: '#667EEA',
          600: '#3958E4',
          700: '#1C3DCE',
          800: '#162FA1',
          900: '#102274',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
