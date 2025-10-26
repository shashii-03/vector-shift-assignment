/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Blue 600
          light: '#3b82f6',   // Blue 500
          dark: '#1e40af',    // Blue 800
        },
        surface: {
          light: '#f9fafb',   // bg for panels
          DEFAULT: '#f3f4f6',
          dark: '#1c2536',    // dark node bg
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
          inverted: '#f9fafb',
        },
        border: '#e5e7eb',
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        soft: '0 4px 10px rgba(0,0,0,0.08)',
        card: '0 2px 6px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}