import React from 'react'

import Head from 'next/head'
import UltimasNoticias from '../components/organisms/utimasNoticias'
import SimplePage from '../components/templates/simplePage'

const Home = () => {
  return (
    <div>
      <Head>
        <title>NeXTIME 23</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SimplePage>
          <UltimasNoticias/>
        </SimplePage>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Home
