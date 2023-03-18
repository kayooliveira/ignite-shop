import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from './../../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const productPriceId = (req.body.productPriceId as string) || ''

  const appUrl = process.env.NEXT_APP_URL

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: productPriceId,
        quantity: 1
      }
    ],
    cancel_url: appUrl + '/',
    success_url: appUrl + '/success'
  })
  res.status(201).json({
    success: true,
    checkoutUrl: checkoutSession.url
  })
}
