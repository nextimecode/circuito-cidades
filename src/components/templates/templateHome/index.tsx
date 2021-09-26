
import React from 'react'
import Layout from '../layout/'
import UltimasNoticias from '../../organisms/utimasNoticias'
import Hero from '../../organisms/hero'
import Section from '../../templates/section'

type NextTemplateHomeProps = {
  itemsHero: Record<string, any>[]
  noticias: Record<string, any>[]
}

const NextTemplateHome = ({
  itemsHero = [],
  noticias = []
}: NextTemplateHomeProps) => {
  return (
    <Layout>
      <Section>
        <Hero hero={itemsHero}/>
      </Section>
      <Section bg={'gray-50'} title="Últimas Notícias">
        <UltimasNoticias noticias={noticias}/>
      </Section>
      {/* <NavigationBars>
        <p>teste</p>
      </NavigationBars> */}
    </Layout>
  )
}

export default NextTemplateHome
