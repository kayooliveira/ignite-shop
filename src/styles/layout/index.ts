import { styled } from '@/styles'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '$xl',
  padding: '1.5rem 0',

  '@lg': {
    justifyContent: 'flex-start',
    padding: '2rem 1.5rem'
  }
})
