import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/layout'
import Footer from '../../organisms/footer'
import Header from '../../organisms/header'
import { listNavLinks } from '../../../pages/api/listNavLinks'
import { useBreakpointValue } from '@chakra-ui/media-query'

type Props = {
  title?: string
  description?: string
}

const Layout = ({
  children,
  title = 'Circuito Cidades',
  description = 'Circuito Cidades.'
}: PropsWithChildren<Props>) => {
  const smallDevice = useBreakpointValue({ base: true, md: false })
  const menuHeight = smallDevice ? '50px' : '92px'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          listNavLinks={listNavLinks}
          smallDevice={smallDevice}
          menuHeight={menuHeight}
        />
        <Box as='div'>
          <Box
            as={'div'}
            pt={['50px', '92px']}
            minH={['calc(100vh - 93px)', 'calc(100vh - 56px)']}
          >
            {children}
          </Box>
          <Footer urlLogo={'/images/logos/logo.png'}/>

        </Box>
      </main>
    </>
  )
}

export default Layout
