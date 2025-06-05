/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors: {
        background: '#F6E3B6',      // Haupt-Hintergrund
        primary: '#E86F3A',         // Primär-Button & Warnung
        card: '#F2C75B',            // Karten-Hintergrund
        accent: '#F6D98A',          // Akzent (z.B. "Großartig")
        secondary: '#D9D9C2',       // Sekundärfeld ("In Ordnung")
        depressed: '#E6E2D1',       // "Niedergeschlagen"
        stressed: '#EBAE8C',        // "Gestresst"
        text: '#23412C',            // Haupttext
        muted: '#B6B6A6',           // Inaktive Felder
        journalgreen: '#4D5922',    // Tagebuch-Grün
      },
    },
  },
  plugins: [],
};