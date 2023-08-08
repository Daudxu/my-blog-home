/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      dark: 'class', 
      extend: {
        backgroundColor: {
          
        },
        colors: {
        },
        screens: {
          'sm': '600px',
          'md': '728px',
          'lg': '984px',
          'xl': '1240px',
          '2xl': '1496px',
        },
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      // require('@tailwindcss/aspect-ratio'),
      // require('@tailwindcss/container-queries'),
    ]
}