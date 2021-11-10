module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        daily: "url('https://picsum.photos/seed/construction/1600/1020')",
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'engineer-black': '#1F1F1F',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
