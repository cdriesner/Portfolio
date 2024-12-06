/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bush-red': '#F95360',
        'bush-orange': '#E76222',
        'dark-brown': '#36312C',
        'light-brown': '#534C43'
      },
      fontFamily: {
        poppins: ['poppins']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
