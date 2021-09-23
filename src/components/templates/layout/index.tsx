import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

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
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {children}
      </main>

    </div>
  )
}

export default Layout
