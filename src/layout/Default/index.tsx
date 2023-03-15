import logo from '@/assets/logo.png'
import { Header } from '@/styles/layout'
import { Container } from '@/ui/Container'
import Image from 'next/image'
import { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container full css={{ backgroundColor: '$gray900' }}>
      <Header>
        <Image alt="" src={logo} />
      </Header>
      {children}
    </Container>
  )
}
