import React from 'react'

import Head from 'next/head'
import SimplePage from '../components/templates/simplePage'
import Section from '../components/templates/section'
import UltimasNoticias from '../components/organisms/utimasNoticias'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Circuito Cidades</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SimplePage>
        <Section>
          <h1>circuito</h1>
        </Section>
        <Section>
          <UltimasNoticias/>
        </Section>
      </SimplePage>
    </div>
  )
}

export default Home
