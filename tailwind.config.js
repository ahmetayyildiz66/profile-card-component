module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)'
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif']
      }
    },
    screens: {
      'sm': '375px',
      'lg': '1440px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
