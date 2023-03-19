/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      templateTheme: {
        "primary": "#0e7490",
        "secondary": "#10b981",
        "accent": "#f59e0b",
        "neutral": "#3D4451",
        "base-100": "#F7F7F7",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }, ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}