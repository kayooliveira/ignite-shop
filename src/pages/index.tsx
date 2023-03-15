import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'

type ProductType = {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface HomeProps {
  products: ProductType[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 48
    },
    breakpoints: {
      '(min-width:768px)': {
        slides: {
          perView: 2.5,
          spacing: 24
        }
      },
      '(min-width:1280px)': {
        slides: {
          perView: 3,
          spacing: 48
        }
      },
      '(min-width:1536)': {
        slides: {
          perView: 4.5,
          spacing: 48
        }
      }
    }
  })

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
        <meta
          name="description"
          content="Bem-vindo à Ignite Shop! Aqui você encontrará as camisetas mais estilosas e exclusivas do mercado. Nossa loja oferece uma ampla variedade de modelos, desde os clássicos até os mais modernos, com estampas criativas e materiais de alta qualidade."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="ignite, ignite-shop, igniteshop, shop, rocketseat, ignite-shop-rocketseat, venda de camisetas, camisetas, venda, loja online, e-commerce, ecommerce"
        />
        <meta name="author" content="Kayo Oliveira<contato@kayooliveira.com>" />
        <meta
          name="og:title"
          content="Ignite Shop - A melhor loja de camisetas da minha casa!"
        />
        <meta
          name="og:description"
          content="Temos uma vasta seleção de cores, desde 'branco sujo' até 'preto quase lavado', para que você possa escolher a camiseta que melhor combina com a sujeira em suas mãos. E não se preocupe com o tamanho, porque acreditamos que uma camiseta grande demais é apenas uma oportunidade para se vestir como um saco de batatas."
        />
        <link rel="canonical" href="https://ignite.shop.kayooliveira.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer className="keen-slider" ref={sliderRef}>
        {products.map(product => (
          <Product
            key={product.id}
            href={{ pathname: `/produto/${product.id}` }}
            className="keen-slider__slide"
          >
            <Image
              alt={product.name}
              src={product.imageUrl}
              width={520}
              height={480}
            />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price']
  })
  const productsList: ProductType[] = data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount ? price.unit_amount / 100 : 0)
    }
  })
  return {
    props: {
      products: productsList
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
