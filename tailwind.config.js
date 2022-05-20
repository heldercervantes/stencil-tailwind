const CustomTheme = require('./src/tailwind/theme.json');

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: CustomTheme,
  },
  plugins: [],
}
