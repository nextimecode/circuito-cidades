import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/layout'
import Footer from '../../molecules/Footer'
import Header from '../../organisms/header'

type Props = {
  title?: string
  description?: string
}

const Layout = ({
  children,
  title = 'Circuito Cidades',
  description = 'Circuito Cidades.'
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Box as={'div'} pt={['50px', '92px']}>
          {children}
        </Box>
      </main>

      <Footer />
    </>
  )
}

export default Layout
