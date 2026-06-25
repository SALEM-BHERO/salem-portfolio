/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1e40af", // blue-800
        "primary-light": "#3b82f6", // blue-500
        "background-light": "#ffffff",
        "background-dark": "#f8fafc", // slate-50 (very light gray instead of dark mode)
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
