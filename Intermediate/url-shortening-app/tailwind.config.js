/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '375px'
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-first', '& > *:nth-child(1)');
      addVariant('child-second', '& > *:nth-child(2)');
      addVariant('child-third', '& > *:nth-child(3)');

    }
  ],
}

