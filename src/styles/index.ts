import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
} = createStitches({
  media: {
    // Using the tailwindcss pattern.
    sm: '(min-width: 640px)',
    // => @media (min-width: 640px) { ... }

    md: '(min-width: 768px)',
    // => @media (min-width: 768px) { ... }

    lg: '(min-width: 1024px)',
    // => @media (min-width: 1024px) { ... }

    xl: '(min-width: 1280px)',
    // => @media (min-width: 1280px) { ... }

    '2xl': '(min-width: 1536px)'
    // => @media (min-width: 1536px) { ... }
  },
  prefix: 'ignite-shop',
  theme: {
    sizes: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e'
    },
    fonts: {
      default: "'Roboto', Arial, Helvetica, sans-serif"
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem'
    },
    lineHeights: {
      default: '160%'
    }
  }
})
