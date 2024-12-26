/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['DM Serif Display', 'sans-serif'],
        nav: ['DM Serif Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
