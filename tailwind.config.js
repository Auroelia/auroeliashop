/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'apollo': ['apollo', 'sans-serif'],
        'inter': ['inter', 'sans-serif'],
        'bloverly': ['bloverly', 'sans-serif'],
        'bonita': ['bonita', 'sans-serif'],
        'shipporiMinchoB': ['shipporiMinchoB', 'sans-serif'],
        'shipporiMincho': ['shipporiMincho', 'sans-serif'],
      },
      boxShadow: {
        'popular': '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [],
};
