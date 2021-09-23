
import React from 'react'
import Head from 'next/head'
import NextFooter from '../components/moleculas/nextFooter'
import NextButton from '../components/atoms/nextButton'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NeXTIME 23</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NextButton>{'<Faça um orçamento gratuito/>'}</NextButton>
        {/* <NextButton bg="primary-light">Primary Light</NextButton> */}
        <NextButton>White</NextButton>
        <NextButton bg="primary-dark">Dark</NextButton>
      </main>

      <footer>
        <NextFooter />
      </footer>
    </div>
  )
}
