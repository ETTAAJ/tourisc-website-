/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#111111',
        'orange': '#FF6B00',
        'light-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
