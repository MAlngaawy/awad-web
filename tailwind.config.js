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
      // keyframes: {
      //   navbar: {
      //     '0%': { transform: '-translate-Y(100%)' },
      //     '100%': { transform: 'translate-Y(0)' }
      //   }
      // }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
