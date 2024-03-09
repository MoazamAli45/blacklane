/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-md": "840px",
        "custom-lg": "1200px",
      },
    },
  },
};
