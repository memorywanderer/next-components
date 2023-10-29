/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        charter: ['var(--font-charter)'],
        "neue-machina": ['var(--font-neue-machina)'],
        "neue-montreal": ['var(--font-neue-montreal)'],
      },
      colors: {
        background: "hsl(var(--background))",
        surface: {
          DEFAULT: "hsl(var(--surface-primary))",
          "primary": "hsl(var(--surface-primary))",
          "secondary": "hsl(var(--surface-secondary))",
          "tertiary": "hsl(var(--surface-tertiary))",
          "hover": "hsl(var(--surface-hover))",
          "accent": "hsl(var(--surface-accent))",
          "accent-hover": "hsl(var(--surface-accent-hover))",
          "positive": "hsl(var(--surface-positive))",
          "positive-hover": "hsl(var(--surface-positive-hover))",
          "warning": "hsl(var(--surface-warning))",
          "warning-hover": "hsl(var(--surface-warning-hover))",
          "negative": "hsl(var(--surface-negative))",
          "negative-hover": "hsl(var(--surface-negative-hover))",
          "disabled": "hsla(var(--surface-disabled))",
        },
        outline: {
          DEFAULT: "hsl(var(--outline-primary))",
          "primary": "hsl(var(--outline-primary))",
          "primary-hover": "hsl(var(--outline-hover))",
          "secondary": "hsl(var(--outline-secondary))",
          "secondary-hover": "hsl(var(--outline-secondary-hover)",
          "tertiary": "hsl(var(--outline-tertiary))",
          "tertiary-hover": "hsl(var(--outline-tertiary-hover)",
          "focus": "hsl(var(--outline-focus))",
          "faint": "hsl(var(--outline-faint))",
          "faint-hover": "hsl(var(--outline-faint-hover))",
          "faint-disabled": "hsla(var(--outline-faint-disabled))",
          "accent": "hsl(var(--outline-accent))",
          "accent-hover": "hsl(var(--outline-accent-hover))",
          "positive": "hsl(var(--outline-positive))",
          "positive-hover": "hsl(var(--outline-positive-hover))",
          "positive-disabled": "hsla(var(--outline-positive-disabled))",
          "warning": "hsl(var(--outline-warning))",
          "warning-hover": "hsl(var(--outline-warning-hover))",
          "warning-disabled": "hsla(var(--outline-warning-disabled))",
          "negative": "hsl(var(--outline-negative))",
          "negative-hover": "hsl(var(--outline-negative-hover))",
          "negative-disabled": "hsla(var(--outline-negative-disabled))",
          "inversed": "hsl(var(--outline-inversed))",
        },
        interactive: {
          DEFAULT: "hsl(var(--interactive-primary))",
          "primary": "hsl(var(--interactive-primary))",
          "primary-hover": "hsl(var(--interactive-primary-hover))",
          "secondary": "hsl(var(--interactive-secondary))",
          "secondary-hover": "hsl(var(--interactive-secondary-hover))",
          "tertiary": "hsl(var(--interactive-tertiary))",
          "tertiary-hover": "hsl(var(--interactive-tertiary-hover))",
          "accent": "hsl(var(--interactive-accent))",
          "accent-hover": "hsl(var(--interactive-accent-hover))",
          "positive": "hsl(var(--interactive-positive))",
          "positive-hover": "hsl(var(--interactive-positive-hover))",
          "warning": "hsl(var(--interactive-warning))",
          "warning-hover": "hsl(var(--interactive-warning-hover))",
          "negative": "hsl(var(--interactive-negative))",
          "negative-hover": "hsl(var(--interactive-negative-hover))",
          "highlight": "hsla(var(--interactive-highlight))",
        },
        "on-surface": {
          DEFAULT: "hsl(var(--on-surface-primary))",
          "primary": "hsl(var(--on-surface-primary))",
          "secondary": "hsl(var(--on-surface-secondary))",
          "tertiary": "hsl(var(--on-surface-tertiary))",
          "faint": "hsl(var(--on-surface-faint))",
          "accent": "hsl(var(--on-surface-accent))",
          "positive": "hsl(var(--on-surface-positive))",
          "warning": "hsl(var(--on-surface-warning))",
          "negative": "hsl(var(--on-surface-negative))",
        },
        "on-interactive": {
          DEFAULT: "hsl(var(--on-interactive-primary))",
          primary: "hsl(var(--on-interactive-primary))",
          secondary: "hsl(var(--on-interactive-secondary))",
          accent: "hsl(var(--on-interactive-accent))",
        },

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        in: 'in 300ms ease-in-out',
        out: 'out 300ms ease-in-out',
        "accordion-down": 'accordionDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        "accordion-up": 'accordionUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',

      },
      keyframes: {
        in: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        out: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
        accordionUp: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionDown: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),

  ],
}
