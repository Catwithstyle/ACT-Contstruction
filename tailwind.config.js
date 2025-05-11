/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Usamos el sistema de clases para el modo oscuro
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gotham SSm A', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        spacing: 'margin, padding',
      },
      colors: {
        // Modo Claro (light)
        primary: '#0A2463',
        secondary: '#FF7F11',
        accent: '#2E8B57',
        light: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#DDDDDD',
          800: '#333333',
        },
        // Modo Oscuro (dark)
        dark: {
          800: '#121826',
          700: '#1E293B',
          600: '#334155',
          text: '#E2E8F0',
        },
        // Colores adicionales
        turquoise: '#40E0D0',
      },
      backgroundColor: {
        light: {
          primary: '#FFFFFF',
          secondary: '#F5F5F5',
        },
        dark: {
          primary: '#121826',
          secondary: '#1E293B',
        }
      },
      textColor: {
        light: {
          primary: '#333333',
          secondary: '#666666',
        },
        dark: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
    },
  },
  plugins: [],
};
