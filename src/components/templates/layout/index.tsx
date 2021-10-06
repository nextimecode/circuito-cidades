import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/layout'
import Footer from '../../molecules/Footer'
import Header from '../../organisms/header'
import { listNavLinks } from '../../../pages/api/listNavLinks'

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

      <Header
        listNavLinks={listNavLinks}
      />

      <main>
        <Box as={'div'} pt={['50px', '92px']}>
          {children}
        </Box>
      </main>

      <Footer urlLogo={'/images/logos/logo.png'}/>
    </>
  )
}

export default Layout
