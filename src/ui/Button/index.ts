import { styled } from '@/styles'

export const Button = styled('button', {
  padding: '1.25rem 2rem',
  borderRadius: '.5rem',
  color: 'white',
  backgroundColor: '$green',
  fontWeight: 'bold',
  lineHeight: '$default',
  border: 'none',
  transition: '.2s ease-in-out',
  cursor: 'pointer',

  '&:hover, &:focus': {
    backgroundColor: '$greenLight'
  },

  variants: {
    full: {
      true: {
        width: '100%'
      }
    }
  },

  defaultVariants: {
    full: false
  }
})
