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
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px'
    // => @media (min-width: 1536px) { ... }
  },
  prefix: 'ignite-shop',
  theme: {
    colors: {
      green: '#00875F',
      greenLight: '#00b37E',
      background: '#121214',
      gray1: '#202024',
      gray2: '#C4C4CC',
      gray3: '#E1E1E6',
      white: '#FFFFFF'
    },
    fonts: {
      default: "'Roboto', Arial, Helvetica, sans-serif"
    },
    fontSizes: {
      sm: 18,
      md: 20,
      lg: 24,
      xl: 32
    },
    lineHeights: {
      default: '160%'
    }
  }
})
