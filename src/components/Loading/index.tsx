import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

import { LoadingOverlayContainer } from './styles'

export function LoadingOverlay() {
  const { events, isFallback } = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`)
      setLoading(true)
    }
    const handleComplete = (url: string) => {
      console.log(`Finished loading: ${url}`)
      setLoading(false)
    }

    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleComplete)
    events.on('routeChangeError', handleComplete)

    return () => {
      events.off('routeChangeStart', handleStart)
      events.off('routeChangeComplete', handleComplete)
      events.off('routeChangeError', handleComplete)
    }
  }, [events])

  const isLoading = loading || isFallback

  return isLoading ? (
    <LoadingOverlayContainer>
      <HashLoader size={120} color="#00b37e" />
    </LoadingOverlayContainer>
  ) : (
    <></>
  )
}
