/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "standard-grey": "#B1B1B1",
        "dark-green": "#668B86",
        "standard-red": "#D4A1A9",
        "light-red": "#FFEDF0",
        "sand": "#FDF1E5",
        "light-green": "#C7CEB7",
        "extra-light-green": "#EBF0DF",
        "mid-green": "#7EADA7",
        "standard-blue": "#90A4AE",
        "light-blue": "#BFEAFF",
        "dust-blue": "#CFDCDA",
        "button-grey": "#3E3E3E",
        "gold": "#E3B968",
        "light-gold": "#F0E3CB",
        "orange": "#F69C3B"
      },
      fontFamily: {
        sans: ["Nunito Sans", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
