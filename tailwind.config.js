module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        test: '#f00'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
      // width: {
      //   logo: '12.5rem'
      // }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
