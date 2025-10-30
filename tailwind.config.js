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
        'dark-bg': '#0A0E1A',
        'dark-surface': '#12182B',
        'dark-surface-light': '#1A2238',
        'accent-purple': '#7C3AED',
        'accent-cyan': '#06B6D4',
        'accent-green': '#10B981',
      },
    },
  },
  plugins: [],
}
