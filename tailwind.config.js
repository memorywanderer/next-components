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
      colors: {
        background: {
          DEFAULT: "hsl(var(--background-primary))",
          secondary: "hsl(var(--background-secondary))"
        },
        surface: {
          DEFAULT: "hsl(var(--surface-primary))",
          "secondary": "hsl(var(--surface-primary))",
          "hover": "hsl(var(--surface-hover))",
          "interactive": "hsl(var(--surface-interactive))",
          "interactive-hover": "hsl(var(--surface-interactive-hover))",
          "positive": "hsl(var(--surface-positive))",
          "positive-hover": "hsl(var(--surface-positive-hover))",
          "warning": "hsl(var(--surface-warning))",
          "warning-hover": "hsl(var(--surface-warning-hover))",
          "negative": "hsl(var(--surface-negative))",
          "negative-hover": "hsl(var(--surface-negative-hover))",
          "accent": "hsl(var(--surface-accent))",
          "disabled": "hsl(var(--surface-disabled))",
          "top": "hsl(var(--surface-top))",
        },
        outline: {
          DEFAULT: "hsl(var(--outline-primary))",
          "secondary": "hsl(var(--outline-secondary))",
          "hover": "hsl(var(--outline-hover))",
          "placeholder": "hsl(var(--outline-placeholder))",
          "initial": "hsl(var(--outline-initial))",
          "disabled": "hsla(var(--outline-disabled))",
          "faint": "hsla(var(--outline-faint))",
          "faint-hover": "hsla(var(--outline-faint-hover))",
          "faint-disabled": "hsla(var(--outline-faint-disabled))",
          "slight": "hsla(var(--outline-slight))",
          "slight-hover": "hsla(var(--outline-slight-hover))",
          "slight-disabled": "hsla(var(--outline-slight-disabled))",
          "focus": "hsla(var(--outline-focus))",
          "interactive": "hsla(var(--outline-interactive))",
          "interactive-hover": "hsla(var(--outline-interactive-hover))",
          "positive": "hsla(var(--outline-positive))",
          "positive-hover": "hsla(var(--outline-positive-hover))",
          "positive-disabled": "hsla(var(--outline-positive-disabled))",
          "warning": "hsla(var(--outline-warning))",
          "warning-hover": "hsla(var(--outline-warning-hover))",
          "warning-disabled": "hsla(var(--outline-warning-disabled))",
          "negative": "hsla(var(--outline-negative))",
          "negative-hover": "hsla(var(--outline-negative-hover))",
          "negative-disabled": "hsla(var(--outline-negative-disabled))",
          "inversed": "hsla(var(--outline-inversed))",
          "positive-accent": "hsla(var(--outline-positive-accent))",
          "negative-accent": "hsla(var(--outline-negative-accent))",
          "dark-static": "hsla(var(--outline-dark-static))",
          "light-static": "hsla(var(--outline-light-static))",
        },
        fill: {
          DEFAULT: "hsl(var(--fill-primary))",
          "hover": "hsl(var(--fill-hover))",
          "secondary": "hsl(var(--fill-secondary))",
          "secondary-hover": "hsl(var(--fill-secondary-hover))",
          "interactive": "hsl(var(--fill-interactive))",
          "interactive-hover": "hsl(var(--fill-interactive-hover))",
          "additional": "hsl(var(--fill-additional))",
          "additional-hover": "hsl(var(--fill-additional-hover))",
          "positive": "hsl(var(--fill-positive))",
          "positive-hover": "hsl(var(--fill-positive-hover))",
          "warning": "hsl(var(--fill-warning))",
          "warning-hover": "hsl(var(--fill-warning-hover))",
          "negative": "hsl(var(--fill-negative))",
          "negative-hover": "hsl(var(--fill-negative-hover))",
        },
        "on-surface": {
          DEFAULT: "hsl(var(--on-surface-primary))",
          "secondary": "hsl(var(--on-surface-secondary))",
          "interactive": "hsl(var(--on-surface-interactive))",
          "positive": "hsl(var(--on-surface-positive))",
          "warning": "hsl(var(--on-surface-warning))",
          "negative": "hsl(var(--on-surface-negative))",
          "static": "hsl(var(--on-surface-static))",
          "accent-positive": "hsl(var(--on-surface-accent-positive))",
          "accent-negative": "hsl(var(--on-surface-accent-negative))",
          "disabled": "hsl(var(--on-surface-disabled))",
          "initial": "hsl(var(--on-surface-initial))",
          "placeholder": "hsl(var(--on-surface-placeholder))",
          "hover": "hsl(var(--on-surface-hover))",
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
