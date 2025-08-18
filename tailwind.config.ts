import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      colors: { accent: '#ff3860' },
      fontFamily: {
        saira: ['"Saira Stencil One"', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              marginBottom: theme('spacing.8'),
            },
            h2: {
              fontSize: theme('fontSize.2xl')[0],
              fontWeight: '700',
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
            },
            h3: {
              fontSize: theme('fontSize.lg')[0],
              fontWeight: '600',
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.3'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config
