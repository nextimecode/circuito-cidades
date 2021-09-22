import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../../organisms/header'

type Props = {
  children: ReactNode
}

const SimplePage = ({
  children
}: Props) => {
  return (
    <>
      <Head>
        <title>Circuito Cidades</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>
      <div>

        <Header/>

        <main>
          {children}
        </main>

        <footer>
          <></>
        </footer>
      </div>
    </>
  )
}

export default SimplePage
