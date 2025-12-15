/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f3d2e',
        accent: '#6bbf59',
        muted: '#f3f5f2',
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #0f3d2e 0%, #6bbf59 100%)',
      },
    },
  },
  plugins: [],
};
