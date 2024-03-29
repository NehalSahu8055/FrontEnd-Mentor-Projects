/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["*", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // dark mode
        "d-main": "#141625",
        "d-card": "#1e2139",
        "d-input": "#252945",
        "d-side-nav": "#373b53",
        "d-dot": "rgba(223, 227, 250, 0.06)",
        "d-items": "#252945",
        "d-total": "#0c0e16",
        "d-t-bold": "#ffffff",
        "d-t-regular": "#dfe3fa",
        "d-b-form": 0,
        "d-table": "rgb(30, 33, 57)",
        "d-divider": "#494e6e",

        // light mode
        main: "#f2f2f2",
        card: "#ffffff",
        "side-nav": "#373b53",
        input: "transparent",
        dot: "rgba(55, 59, 83, 0.06)",
        items: "#f9fafe",
        total: "#373b53",
        "t-bold": "#0c0e16",
        "t-regular": "#888eb0",
        logo: "rgb(124, 93, 250)",
        "logo-psuedo": "rgb(146, 119, 255)",
        divider: "#494e6e14",
        paid: "#33d69f",
        pending: "#ff8f00",
        draft: "rgb(223, 227, 250)",
        hash: "rgb(126, 136, 195)",
        // "b-form": 1px solid #dfe3fa,
        // "shadow": 0px 10px 20px rgba(72, 84, 159, 0.25),
      },
      fontSize: {
        xxs: "0.7rem",
        "3.5xl": "1.9rem",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      zIndex: {
        header: "500",
        "filter-menu": "400",
      },
      screens: {
        tab: "768px",
        laptop: "1024px",
        desk: "1536px",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },

    function ({ addVariant }) {
      addVariant("child2", "& > *:nth-child(2)");
    },

    function ({ addVariant }) {
      addVariant("child3", "& > *:nth-child(3)");
    },
  ],
};
