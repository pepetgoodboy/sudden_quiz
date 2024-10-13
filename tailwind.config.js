/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#25156E",
        secondary: "#FFD800",
        secondaryhover: "#FFC400",
        tertiary: "#404764",
      },
    },
  },
  plugins: [],
};
