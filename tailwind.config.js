module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'mn': '400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
