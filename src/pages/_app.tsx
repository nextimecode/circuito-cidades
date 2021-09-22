import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../../theme/'
import NavMenu from '../components/organisms/navMenu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavMenu />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
