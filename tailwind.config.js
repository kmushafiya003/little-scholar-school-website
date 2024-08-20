/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
    },
   
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      red: "#F2184F",
      "red-600": "rgb(239 68 68)",
      "off-white-bg": "#f6f6f6",
      "bg-light": "#f8f9fa",
      "bg-drop": "#363636",
      "dark-blue": "#202C45",
      "dark-grey": "#666",
      "resp-black": "#333",
      "resp-black-2": "#555",
      "light-grey": "#eee",
      "bright-black": "#1a1a1a",
      "neutral-600": "rgb(30 41 59)",
      "light-black": "rgba(0,0,0,0.5)",
      "blue-l": "rgb(59 130 246)",
      "gray-l": "rgb(107 114 128)",
      "border-1": "#dee2e6",
      "border-2": "#bbb",
      "silver-white":"#f6f6f6",
      "dark-light-black": "rgba(187, 187, 182, 1)",
      "gray-100" : "rgb(243 244 246)",
      "gray-200": "rgb(229 231 235)",
      "gray-300": "rgb(209 213 219)",
      "gray-400": "rgb(156 163 175)",
      "blue-600": "rgb(37 99 235)",
      "desaturated-blue" : "rgb(32, 44, 69, 255)",
      "border-black": "rgb(51, 51, 51)",
      "purple-950": " rgb(59, 7, 100)"
      
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
      xxxl: "1485px",
      "2xl": "1505px",
    },
    extend: {
      borderColor: {
        'border-grey':'#e6e6e6',
        'border-black':'#000',
      },
      listStyleType: {
        'upper-roman': 'upper-roman',
      },
      fontSize: {
        "2xl":"2rem",
        xxl: "4rem",
        "3xl": "3rem",
      },

     
   
      borderWidth: {
        '0.2': '0.2px',
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pause-marquee": "none",
        'arrow-hover': 'arrow-hover 0.6s infinite',
        'flip-hover': 'flip-hover 0.6s forwards',
        'flip-back-hover': 'flip-back-hover 0.6s forwards',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      scrollbar: {
        none: 'scrollbar-width: none; -ms-overflow-style: none;', 
      },
    },
    
  },
 
  plugins: [
    function ({ addBase, addComponents, addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Chrome, Safari, and Edge */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For IE and Edge */
          '-ms-overflow-style': 'none',
        },
      });
    },
  ],
};
