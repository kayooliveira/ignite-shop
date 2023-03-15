import { styled } from '@/styles'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '100%',
  padding: '0.5rem',
  marginBottom: '2rem',
  '@md': {
    justifyContent: 'flex-start'
  }
})
