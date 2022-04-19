module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'tko-purple': '#b561f280',
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}