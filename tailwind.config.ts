import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: {
            DEFAULT: '#0F1115', // Deep slate
            secondary: '#1A1D22', // Lighter slate
            card: '#23272E', // Card background
            border: '#2A2F38', // Subtle borders
            hover: '#2E333D', // Hover state
          },
          primary: {
            DEFAULT: '#FF3366', // Vibrant pink
            hover: '#FF4D7F',
            light: '#FFE6EC',
            dark: '#CC2952',
          },
          accent: {
            DEFAULT: '#9F2BFF', // Electric purple
            hover: '#B355FF',
            light: '#F2E6FF',
            dark: '#7F22CC',
          },
          highlight: {
            DEFAULT: '#FF9233', // Warm orange
            hover: '#FFA64D',
            light: '#FFF1E6',
            dark: '#CC7529',
          },
          text: {
            DEFAULT: '#F8F9FA', // Primary text
            secondary: '#CED3D8', // Secondary text
            muted: '#9BA1A8', // Muted text
            accent: '#FF3366', // Accent text (matching primary)
          },
          success: {
            DEFAULT: '#00CC88', // Neon green success
            light: '#E6FFF5',
          },
          error: {
            DEFAULT: '#FF3366', // Same as primary for consistency
            light: '#FFE6EC',
          },
          warning: {
            DEFAULT: '#FF9233', // Same as highlight for consistency
            light: '#FFF1E6',
          }
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        display: ["Manrope", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        'section': '5rem',
        'header': '4rem',
      },
      borderRadius: {
        'card': '0.75rem',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 8px 30px -2px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 51, 102, 0.2)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          'from': { boxShadow: '0 0 5px rgba(255, 51, 102, 0.5)' },
          'to': { boxShadow: '0 0 20px rgba(255, 51, 102, 0.8)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
