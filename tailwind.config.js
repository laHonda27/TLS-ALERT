/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e5edff',
          200: '#cddbfe',
          300: '#b4c6fc',
          400: '#8da2fb',
          500: '#6875f5',
          600: '#5850ec',
          700: '#5145cd',
          800: '#42389d',
          900: '#362f78',
        },
        light: {
          bg: '#ffffff',
          card: '#f8fafc',
          border: '#e2e8f0',
          text: {
            primary: '#1e293b',
            secondary: '#64748b',
            muted: '#94a3b8'
          },
          accent: {
            primary: '#6875f5',
            secondary: '#8da2fb'
          },
          background: {
            primary: '#ffffff', 
            secondary: '#f9fafb', 
          },
          accent: {
            primary: '#6366f1', 
            secondary: '#818cf8', 
          },
          text: {
            primary: '#111827', 
            secondary: '#374151', 
            muted: '#6B7280', 
          },
        },
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          border: '#2E2E2E',
          text: {
            primary: '#f8fafc',
            secondary: '#cbd5e1',
            muted: '#64748b'
          },
          accent: {
            primary: '#6875f5',
            secondary: '#8da2fb'
          },
          background: {
            primary: '#111827', 
            secondary: '#1f2937', 
          },
          accent: {
            primary: '#818cf8', 
            secondary: '#a5b4fc', 
          },
          text: {
            primary: '#f9fafb', 
            secondary: '#e5e7eb', 
            muted: '#9ca3af', 
          },
        }
      },
      textColor: {
        theme: {
          base: 'var(--text-base)',
          muted: 'var(--text-muted)',
          inverted: 'var(--text-inverted)'
        }
      },
      backgroundColor: {
        theme: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)'
        }
      }
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        ':root': {
          '--text-base': '#1e293b',
          '--text-muted': '#64748b',
          '--text-inverted': '#ffffff',
          '--bg-primary': '#ffffff',
          '--bg-secondary': '#f8fafc',
        },
        '.dark': {
          '--text-base': '#f8fafc',
          '--text-muted': '#cbd5e1',
          '--text-inverted': '#1e293b',
          '--bg-primary': '#121212',
          '--bg-secondary': '#1E1E1E',
        }
      })
    }
  ],
};
