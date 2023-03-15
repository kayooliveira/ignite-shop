import logo from '@/assets/logo.png'
import { Header } from '@/styles/layout'
import { Container } from '@/ui/Container'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'

interface DefaultLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function DefaultLayout({ children, ...props }: DefaultLayoutProps) {
  return (
    <Container
      full
      align="center"
      justify={{
        '@lg': 'center'
      }}
      css={{
        backgroundColor: '$gray900'
      }}
      {...props}
    >
      <Header>
        <Link
          href={{
            pathname: '/'
          }}
        >
          <Image alt="" src={logo} />
        </Link>
      </Header>
      {children}
    </Container>
  )
}
