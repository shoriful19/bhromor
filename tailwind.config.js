module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mid-box-grad-top': '#049abd',
        'mid-box-grad-bot': '#85c3ea',
        'mid-btn': '#5c41dc',
        'mid-box-grad-bot-tr': '#2f8ce1',
        'mid-box-grad-bot-br': '#b45fbc',
        'bg-top-hdr-bar-right': '#43d7b5',
        'bg-top-hdr-bar-left': '#049cbc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
