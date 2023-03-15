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
        alignItems: 'center'
      },
      start: {
        alignItems: 'flex-start'
      },
      end: {
        alignItems: 'flex-end'
      }
    },
    justify: {
      center: {
        justifyContent: 'center'
      },
      start: {
        justifyContent: 'flex-start'
      },
      end: {
        justifyContent: 'flex-end'
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
    justify: 'start',
    full: false
  }
})
