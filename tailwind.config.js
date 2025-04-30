/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E68A00",
          light: "#FF9F00",
          dark: "#CC7A00",
        },
        secondary: {
          DEFAULT: "#2A2A2A",
          light: "#404040",
          dark: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};
