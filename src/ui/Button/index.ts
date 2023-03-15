import { styled } from '@/styles'

export const Button = styled('button', {
  padding: '1.25rem 2rem',
  borderRadius: '.5rem',
  color: 'white',
  backgroundColor: '$green500',
  fontWeight: 'bold',
  lineHeight: '$default',
  border: 'none',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  outline: 'none',

  '&:hover, &:focus': {
    backgroundColor: '$green300'
  },

  '&:focus': {
    outline: '1px solid $green300',
    outlineOffset: 2
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
    full: false,
    icon: false
  }
})
