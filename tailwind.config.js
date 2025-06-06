/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        system: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'custom-xl': ['37px'],  
        'custom-base': ['18px'],
      },
      colors: {
        bg: {
          primary: '#FBF7EF',
          secondary: '#F9F5EB',
          tertiary: '#F8F3E7',
          alt: '#EDE9E1',
        },
        text: {
          dark: '#000000',
          light: '#212121',
        },
        accent: {
          orange: '#FF6A00',
        },
      },
    },
  },
  plugins: [],
}
