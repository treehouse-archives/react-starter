/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6dd9f5",
      },
    },
  },
  plugins: [],
};