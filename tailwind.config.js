module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        daily: "url('https://picsum.photos/id/987/1366/1024?grayscale')",
        // daily: "url('https://picsum.photos/1366/1024?grayscale')",
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'engineer-black': {
        100: '#d2d2d2',
        200: '#a5a5a5',
        300: '#797979',
        400: '#4c4c4c',
        500: '#1f1f1f',
        600: '#191919',
        700: '#131313',
        800: '#0c0c0c',
        900: '#060606',
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
