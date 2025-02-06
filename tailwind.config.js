/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    extend: {
      colors: {
        "main-bg": '#111827',
        "nav-bg": '#1f2937',
        "primary-text": '#ffffff',
        "subprimary": '#6b7280',
        "secondry": '#22c55e',
        "card-bg": '#1f2937',
        "card-icon-bg": '#374151',
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {

        ".no-scrollbar::-webkit-scrollbar": {
          display: 'none',
        },

        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }

      }

      addUtilities(newUtilities);
    },

  
  ],
}

