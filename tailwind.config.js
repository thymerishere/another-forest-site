/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['DM Serif Display', 'sans-serif'],
        nav: ['DM Serif Display', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease both',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
