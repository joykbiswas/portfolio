/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'btn-grad': 'linear-gradient(to right, #ff0f7b, #f89b29)',
      },
    },
  },
  plugins: [require("daisyui")],
}

