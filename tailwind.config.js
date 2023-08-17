/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-base': '#BE1E2D',
        'black-base': '#151515',
      },
      height: {
        screen: '100svh',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      metropolis: ['Metropolis'],
      helvetica: ['Helvetica'],
      poppins: ['Poppins'],
      inter: ['Inter'],
    },
  },
  plugins: [],
};
