import { stripe } from '@/lib/stripe'
import {
  ProductContainer,
  ProductImageContainer,
  ProductInfoContainer
} from '@/styles/pages/product'
import { Button } from '@/ui/Button'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

type ProductType = {
  id: string
  name: string
  imageUrl: string
  description?: string
  price: string
}

interface ProductPageProps {
  product?: ProductType
}

export default function ProductPage({ product }: ProductPageProps) {
  const { query, back } = useRouter()
  const id = query.id

  if (!product) {
    back()
    return
  }

  if (!id) {
    back()
    return
  }

  return (
    <>
      <Head>
        <title> {product.name} - Ignite Shop</title>
        <meta name="description" content={product.description} />
        <meta
          name="keywords"
          content={`ignite, ignite-shop, igniteshop, shop, rocketseat, ignite-shop-rocketseat, venda de camisetas, camisetas, venda, loja online, e-commerce, ecommerce, ${product.name}`}
        />
        <meta name="msapplication-TileImage" content={product.imageUrl} />
        <meta name="author" content="Kayo Oliveira<contato@kayooliveira.com>" />
        <meta name="og:title" content={`${product.name} - Ignite Shop`} />
        <meta name="og:site_name" content="Ignite Shop" />
        <meta
          name="og:url"
          content={`https://ignite.shop.kayooliveira.com/produto/${product.id}`}
        />
        <meta name="og:locale" content="pt_BR" />
        <meta name="og:image" content={product.imageUrl} />
        <meta name="og:image:width" content="494" />
        <meta name="og:image:height" content="285" />
        <meta name="og:image" content={product.imageUrl} />
        <meta name="og:type" content="product" />
        <meta name="og:description" content={product.description} />
        <link
          rel="canonical"
          href={`https://ignite.shop.kayooliveira.com/produto/${product.id}`}
        />
      </Head>

      <ProductContainer>
        <ProductImageContainer>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={520}
            height={480}
          />
        </ProductImageContainer>
        <ProductInfoContainer>
          <div>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <span>{product.description}</span>
          </div>
          <Button>Comprar agora</Button>
        </ProductInfoContainer>
      </ProductContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id
  if (id && typeof id === 'string') {
    const productData = await stripe.products.retrieve(id, {
      expand: ['default_price']
    })

    const productPrice = productData.default_price as Stripe.Price
    const product = {
      id: productData.id,
      name: productData.name,
      imageUrl: productData.images[0],
      description: productData.description,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(productPrice.unit_amount ? productPrice.unit_amount / 100 : 0)
    }
    return {
      props: {
        product: product
      }
    }
  }
  return {
    props: {
      product: null
    }
  }
}
