/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pureBlack: "#000000",
        goldMetallic: "#FFD700",
        goldDeep: "#B8860B",
        silverChrome: "#C0C0C0",
        silverDark: "#4B5563",
        emeraldNeon: "#00FFC6",
        cyberTeal: "#00FFEA",
      },
      backgroundImage: {
        'gold-gradient': "linear-gradient(135deg, #FFD700 0%, #FFB300 50%, #D4AF37 100%)",
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(255, 215, 0, 0.3)',
        'emerald-glow': '0 0 25px -5px rgba(0, 255, 198, 0.4)',
        'cyber-glow': '0 0 25px -5px rgba(0, 255, 234, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        // FIXED: All font names are now correctly wrapped in quotes
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}