/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1D6B4E',
        lime: '#A3C957',
        leaf: '#E4F3D8',
        ember: '#F97316',
        sand: '#F6F1E8',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(17, 24, 39, 0.12)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(163, 201, 87, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(29, 107, 78, 0.20), transparent 28%)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
