/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      red: "#F2184F",
      "off-white-bg": "#f6f6f6",
      "bg-light": "#f8f9fa",
      "dark-blue": "#202C45",
      "dark-grey": "#666",
      "bright-black": "#1a1a1a",
      "resp-black": "#333",
      "neutral-600": "rgb(30 41 59)",
      "light-black": "rgba(0,0,0,0.5)",
      "blue-l": "rgb(59 130 246)",
      "gray-l": "rgb(107 114 128)",
      "border-1": "#dee2e6",
      "border-2": "#bbb",
      "dark-light-black": "rgba(187, 187, 182, 1)",
    },
    screens: {
      dxs: "300px",
      xxs: "400px",
      xsm: "458px",
      xs: "500px",
      mdxs: "580px",
      sm: "640px",
      just: "641px",
      md: "768px",
      smd: "800px",
      mmd: "860px",
      xmd: "930px",
      lg: "1024px",
      xlg: "1110px",
      xl: "1280px",
      xxl: "1390px",
      "2xl": "1505px",
    },
    extend: {
      fontSize: {
        xxl: "4rem",
        "3xl": "3rem",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      borderWidth: {
        '0.2': '0.2px',
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "pause-marquee": "none",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
