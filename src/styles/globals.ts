import { globalCss } from '.'

export const globalStyles = globalCss({
  'html, body, #__next': {
    maxWidth: '100vw',
    height: '100%'
  },

  'body, input, textarea, button': {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
    fontWeight: 400,
    color: '$gray100'
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  }
})
