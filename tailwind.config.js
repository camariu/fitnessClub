/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        reddit: ["Reddit"],
        sans: ["Sans"],
        poetsen: ["Poetsen One"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
