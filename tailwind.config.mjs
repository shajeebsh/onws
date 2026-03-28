/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0f172a',
        'slate-on': '#334155',
        'ireland-emerald': '#10b981',
        'brand-bg': '#f8fafc', // Slate 50
        'brand-surface': '#ffffff',
        'brand-border': '#e2e8f0', // Slate 200
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
