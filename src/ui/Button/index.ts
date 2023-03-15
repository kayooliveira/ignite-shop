import { styled } from '@/styles'

export const Button = styled('button', {
  padding: '1.25rem 2rem',
  borderRadius: '.5rem',
  color: 'white',
  backgroundColor: '$green',
  fontWeight: 'bold',
  lineHeight: '$default',
  border: 'none',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',

  '&:hover, &:focus': {
    backgroundColor: '$greenLight'
  },

  variants: {
    full: {
      true: {
        width: '100%'
      }
    },
    icon: {
      true: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }
    }
  },

  defaultVariants: {
    full: false
  }
})
