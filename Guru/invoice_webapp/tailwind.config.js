/** @type {import('tailwindcss').Config} */
export default {
  content: ['*', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tab: '768px',
        laptop: '1024px',
        desk: '1536px',
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
