import { styled } from '@/styles'
import Link from 'next/link'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  maxWidth: 'calc(100vw - ((100vw - 1280px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
  flexShrink: 0,
  overflowX: 'scroll'
})

export const Product = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #7465D4 0%,#1EA483 100%)',
  cursor: 'pointer',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '$white',
    padding: '2rem',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  },
  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})
