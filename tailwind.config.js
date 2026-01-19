/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          900: '#1a0f0a',
          800: '#2d1810',
          700: '#3d2415',
          600: '#4d301a',
          500: '#5d3c20',
          400: '#8b5a2b',
        },
        brass: {
          400: '#d4af37',
          500: '#c5a028',
          600: '#b8941e',
        },
        leather: {
          900: '#2d1810',
          800: '#3d2010',
          700: '#4d2810',
          600: '#5d3010',
        },
        beer: {
          400: '#f4a542',
          500: '#e8952c',
          600: '#d88420',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        pub: ['Georgia', 'Times New Roman', 'serif'],
      },
      backgroundImage: {
        'wood-texture': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23noise)\" opacity=\"0.05\" /%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
