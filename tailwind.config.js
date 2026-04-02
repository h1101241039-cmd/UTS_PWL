/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/views/**/*.ejs"],
  safelist: [
    "bg-blue-900",
    "bg-blue-600", 
    "hover:bg-blue-600",
    "hidden",
    "-translate-x-full",
    "translate-x-0",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};