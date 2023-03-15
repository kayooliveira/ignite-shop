import { ProductContainer } from '@/styles/pages/product'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function ProductPage() {
  const { query } = useRouter()
  const slug = query.slug
  return (
    <>
      <Head>
        <title>{slug} - Ignite Shop</title>
        <meta name="description" content={`${slug}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content={`ignite, ignite-shop, igniteshop, shop, rocketseat, ignite-shop-rocketseat, venda de camisetas, camisetas, venda, loja online, e-commerce, ecommerce, ${slug}`}
        />
        <meta name="author" content="Kayo Oliveira<contato@kayooliveira.com>" />
        <meta name="og:title" content={`${slug} - Ignite Shop`} />
        <meta name="og:description" content={`${slug}`} />
        <meta
          name="og:url"
          content={`https://ignite.shop.kayooliveira.com/${slug}`}
        />
        <meta name="og:title" content={`${slug} - Ignite Shop`} />
        <link
          rel="canonical"
          href={`https://ignite.shop.kayooliveira.com/${slug}`}
        />
      </Head>
      <ProductContainer>
        <h1>{slug}</h1>
      </ProductContainer>
    </>
  )
}
