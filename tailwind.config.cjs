/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7ae8ce",

          secondary: "#7bf792",

          accent: "#d635d0",

          neutral: "#1D1C31",

          "base-100": "#3D4042",

          info: "#56D0EB",

          success: "#3CD3A8",

          warning: "#EDB25A",

          error: "#F4678A",
        },
      },
    ],
  },
  plugins: [require("tailwindcss"), require("daisyui")],
};
