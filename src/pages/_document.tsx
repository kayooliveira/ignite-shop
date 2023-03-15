import { getCssText } from '@/styles'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <meta
          name="description"
          content="Bem-vindo à Ignite Shop! Aqui você encontrará as camisetas mais estilosas e exclusivas do mercado. Nossa loja oferece uma ampla variedade de modelos, desde os clássicos até os mais modernos, com estampas criativas e materiais de alta qualidade."
        />
        <meta
          name="keywords"
          content="ignite, ignite-shop, igniteshop, shop, rocketseat, ignite-shop-rocketseat, venda de camisetas, camisetas, venda, loja online, e-commerce, ecommerce"
        />
        <meta name="author" content="Kayo Oliveira<contato@kayooliveira.com>" />
        <meta
          name="og:title"
          content="Ignite Shop - A melhor loja de camisetas da minha casa!"
        />
        <meta name="og:site_name" content="Ignite Shop" />
        <meta name="og:url" content="https://ignite.shop.kayooliveira.com" />
        <meta name="og:locale" content="pt_BR" />
        <meta name="og:image" content="https://i.imgur.com/ebgHRE9.png" />
        <meta
          name="og:description"
          content="Temos uma vasta seleção de cores, desde 'branco sujo' até 'preto quase lavado', para que você possa escolher a camiseta que melhor combina com a sujeira em suas mãos. E não se preocupe com o tamanho, porque acreditamos que uma camiseta grande demais é apenas uma oportunidade para se vestir como um saco de batatas."
        />
        <link rel="canonical" href="https://ignite.shop.kayooliveira.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
