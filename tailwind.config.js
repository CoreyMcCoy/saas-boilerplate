/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#103FEF',
        brandAccent: '#FF990A',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'retro', 'bumblebee', 'night'],
  },
};
