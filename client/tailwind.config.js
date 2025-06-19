/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- ADD THIS LINE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primary-blue': '#0052D4',
            'secondary-blue': '#4364F7',
            'light-blue': '#6FB1FC',
        }
    },
  },
  plugins: [],
}
