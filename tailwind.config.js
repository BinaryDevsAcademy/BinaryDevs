/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        bd: {
          primary: "#165A81",
          primarySoft: "#A5D4F5",

          // Secondary
          secondary: "#F29F05",
          secondarySoft: "#F8D49B",

          // Dark Shades
          black: "#1C1C1C",
          charcoal: "#2A2A2A",
          graphite: "#3C3C3C",

          // Silver
          silver: {
            light: "#D9D9D9",
            medium: "#BDBDBD",
            dark: "#808080",
          },

          // Basic
          white: "#FFFFFF",

          // Status
          success: "#4CAF50",
          warning: "#F5B82E",
          error: "#E53935",
        },
      },

      /* ---------------------------------------- */
      /* 🎨 BACKGROUND GRADIENTS (Tailwind Ready) */
      /* ---------------------------------------- */
      backgroundImage: {
        // Existing ones
        "bd-hero": "linear-gradient(to bottom, #1C1C1C, #2A2A2A)",
        "bd-blue-gradient": "linear-gradient(to right, #165A81, #0E3F5D)",
        "bd-silver-gradient": "linear-gradient(to right, #D9D9D9, #BDBDBD)",

        // NEW — Using your brand system

        // 1. Primary Blue Gradient
        "bd-primary": "linear-gradient(135deg, #165A81 0%, #A5D4F5 100%)",

        // 2. Brand Blue → Orange
        "bd-brand": "linear-gradient(135deg, #165A81 0%, #F29F05 100%)",

        // 3. Warm Orange Gradient
        "bd-warm": "linear-gradient(135deg, #F29F05 0%, #F8D49B 100%)",

        // 4. Dark Mode Gradient
        "bd-dark": "linear-gradient(135deg, #1C1C1C 0%, #3C3C3C 100%)",

        // 5. Silver Metallic Gradient
        "bd-silver-metal": "linear-gradient(135deg, #808080 0%, #D9D9D9 100%)",

        // 6. Glass Blue Gradient
        "bd-glass": "linear-gradient(135deg, rgba(22,90,129,0.9) 0%, rgba(165,212,245,0.8) 100%)",

        // 7. Premium Tri-Color Gradient
        "bd-premium": "linear-gradient(135deg, #165A81 0%, #A5D4F5 40%, #F29F05 100%)",

        // 8. Soft Section Gradient
        "bd-soft": "linear-gradient(160deg, #A5D4F5 0%, #FFFFFF 50%, #F8D49B 100%)",

        // 9. White → Transparent Blue
        "bd-subtle": "linear-gradient(180deg, #FFFFFF 0%, rgba(22,90,129,0.1) 100%)",
      },
    },
  },
  plugins: [],
};
