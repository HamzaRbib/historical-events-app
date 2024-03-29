/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1e1e1e",
      },
      spacing: {
        'popup-larg': '26rem',
      }
    },
  },
  plugins: [],
};
