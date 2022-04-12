module.exports = {
  purge: [],
  theme: {
    extend: {},
    screens: {
      'sm': { 'max': '480px' },
      'md': { 'min': '481px', 'max': '768px' },
      'lg': { 'min': '769px', 'max': '1024px' },
      'xl': { 'min': '1025px' },
    },
    colors: {
      'transparent': 'transparent',
      'black': '#000',
      'semi-black': "#111",
      'white': '#fff',
      'orange': '#fd7e14',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
