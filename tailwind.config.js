/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        'purple-deep': '#4a0e4e',
        'pink-electric': '#ff00ff',
        'blue-neon': '#00ffff',
      },
    },
  },
  plugins: [],
}
