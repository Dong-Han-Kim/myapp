/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        title_down: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        title_down: "title_down 3s ease",
      },
    },
  },
  plugins: [],
};
