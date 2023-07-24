/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transition: {
        'custom-transition': 'all 0.4s ease',
      },
      animation: {
        'shadow-pulse': 'shadow-pulse 4s infinite',
      },
      keyframes: {
        'shadow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 0 0 transparent',
          },
          '50%': {
            'box-shadow': '0 0 0 0.9rem rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
  },


  plugins: [],
}

