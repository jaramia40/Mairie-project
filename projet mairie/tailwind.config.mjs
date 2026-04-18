/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2D6B',
          light:   '#2A3D8B',
          dark:    '#111E4A',
        },
        gold: {
          DEFAULT: '#C47A0A',
          light:   '#E8A020',
          dark:    '#8B5607',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light:    '300',
        normal:   '400',
        medium:   '500',
        semibold: '600',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      borderRadius: {
        DEFAULT: '8px',
        card:    '12px',
      },
    },
  },
};
