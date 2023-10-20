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
          "disabled": "hsla(var(--surface-disabled))",
          "top": "hsla(var(--surface-top))",
        },
        outline: {
          DEFAULT: "hsl(var(--outline-primary))",
          "secondary": "hsl(var(--outline-secondary))",
          "hover": "hsl(var(--outline-hover))",
          "placeholder": "hsl(var(--outline-placeholder))",
          "initial": "hsl(var(--outline-initial))",
          "disabled": "hsla(var(--outline-disabled))",
          "faint": "hsl(var(--outline-faint))",
          "faint-hover": "hsl(var(--outline-faint-hover))",
          "faint-disabled": "hsla(var(--outline-faint-disabled))",
          "slight": "hsl(var(--outline-slight))",
          "slight-hover": "hsl(var(--outline-slight-hover))",
          "slight-disabled": "hsla(var(--outline-slight-disabled))",
          "focus": "hsl(var(--outline-focus))",
          "interactive": "hsl(var(--outline-interactive))",
          "interactive-hover": "hsl(var(--outline-interactive-hover))",
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
          "positive-accent": "hsl(var(--outline-positive-accent))",
          "negative-accent": "hsl(var(--outline-negative-accent))",
          "dark-static": "hsl(var(--outline-dark-static))",
          "light-static": "hsl(var(--outline-light-static))",
        },
        fill: {
          DEFAULT: "hsl(var(--fill-primary))",
          "primary": "hsl(var(--fill-primary))",
          "hover": "hsl(var(--fill-primary-hover))",
          "secondary": "hsl(var(--fill-secondary))",
          "secondary-hover": "hsl(var(--fill-secondary-hover))",
          "tertiary": "hsl(var(--fill-tertiary))",
          "tertiary-hover": "hsl(var(--fill-tertiary-hover))",
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
          "disabled": "hsla(var(--fill-disabled))",
          "highlight": "hsla(var(--fill-highlight))",
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
          "disabled": "hsla(var(--on-surface-disabled))",
          "initial": "hsl(var(--on-surface-initial))",
          "placeholder": "hsl(var(--on-surface-placeholder))",
          "hover": "hsl(var(--on-surface-hover))",
          "dark": "hsl(0,0%,99%)",
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
