import { styled } from '@/styles'

/**
 * @version 0.0.1
 *
 * @author Kayo Oliveira <contato@kayooliveira.com>
 *
 * @description Styled container
 *
 */

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    row: {
      true: {
        flexDirection: 'row'
      }
    },
    align: {
      center: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      start: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }
    },
    full: {
      true: {
        height: '100%',
        width: '100%'
      }
    }
  },

  defaultVariants: {
    row: false,
    align: 'center',
    full: false
  }
})
