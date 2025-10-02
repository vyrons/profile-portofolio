/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist-regular': ['geits-regular', 'sans-serif'],
        'geist-medium': ['geits-medium', 'sans-serif'],
        'geistmono-regular': ['geistmono-regular', 'monospace'],
        'geistmono-light': ['geitsmono-light', 'monospace'],
      },
    },
  },
  plugins: [],
};
