import { globalCss } from '.'

export const globalStyles = globalCss({
  'html, body, #__next': {
    maxWidth: '100vw',
    height: '100%',
    fontFamily: "'Roboto', Arial, Helvetica, sans-serif"
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  }
})
