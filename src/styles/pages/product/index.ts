import { styled } from '@/styles'

export const ProductContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'full',
  maxHeight: '100%',
  overflowX: 'scroll',
  gap: '1.5rem',
  maxWidth: '$xl',
  margin: '0 auto',
  padding: '1.5rem',

  '&::-webkit-scrollbar': {
    display: 'none'
  },

  '@lg': {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '1.5rem',
    gap: '4.5rem'
  }
})

export const ProductImageContainer = styled('div', {
  borderRadius: 8,
  background: 'linear-gradient(180deg, #7465D4 0%,#1EA483 100%)',
  width: '100%',

  img: {
    width: '100%',
    height: 'auto'
  },

  '@lg': {
    padding: '1rem'
  }
})

export const ProductInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1rem',
  height: '100%',

  h1: {
    fontWeight: 'bold',
    lineHeight: '140%',
    fontSize: '$xl',
    textAlign: 'center'
  },

  h2: {
    color: '$green300',
    fontSize: '$2xl',
    textAlign: 'center',
    fontWeight: 400,
    lineHeight: '140%',
    margin: '1rem 0 1rem 0'
  },

  span: {
    lineHeight: '160%',
    fontSize: '$md'
  },

  button: {
    fontSize: '$md'
  },

  '@lg': {
    h1: {
      fontWeight: 'bold',
      lineHeight: '140%',
      fontSize: '$2xl',
      textAlign: 'left'
    },

    h2: {
      color: '$green300',
      fontSize: '$2xl',
      fontWeight: 400,
      lineHeight: '140%',
      margin: '1rem 0 2.5rem 0',
      textAlign: 'left'
    },

    span: {
      lineHeight: '160%',
      fontSize: '$md'
    },

    button: {
      fontSize: '$md'
    }
  }
})
