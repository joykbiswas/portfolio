/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'btn-grad': 'linear-gradient(to right, #022f2e, #0b6ba2)',
      },
    },
  },
  plugins: [require("daisyui")],
}

