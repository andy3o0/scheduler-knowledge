module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        14: "repeat(14, minmax(0, 1fr))",
        13: "repeat(13, minmax(0, 1fr))",
        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [],
};
