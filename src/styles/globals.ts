import { globalCss } from '.'

export const globalStyles = globalCss({
  'html, body, #__next': {
    maxWidth: '100vw',
    height: '100%'
  },

  'body, input, textarea, button': {
    '-webkit-font-smoothing': 'antialiased',
    fontWeight: 400,
    lineHeight: '160%',
    color: '$gray100'
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  }
})
