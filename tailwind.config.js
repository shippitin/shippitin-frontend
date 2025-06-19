module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),         // Forms plugin
    require('@tailwindcss/typography'),    // Typography plugin
    require('@tailwindcss/aspect-ratio'),  // Aspect ratio plugin,
  ],
};