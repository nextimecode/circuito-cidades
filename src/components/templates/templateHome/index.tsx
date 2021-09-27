import React from 'react'
import Layout from '../layout/'
import Hero from '../../organisms/hero'
import Section from '../../templates/section'
import LastNews from '../../organisms/lastNews'

type NextTemplateHomeProps = {
  itemsHero: Record<string, any>[]
  newsSet: Record<string, any>[]
}

const NextTemplateHome = ({
  itemsHero = [],
  newsSet = []
}: NextTemplateHomeProps) => {
  return (
    <Layout>
      <Section>
        <Hero hero={itemsHero}/>
      </Section>
      <Section bg={'gray-50'} title="Últimas Notícias">
        <LastNews newsSet={newsSet}/>
      </Section>
      {/* <NavigationBars>
        <p>teste</p>
      </NavigationBars> */}
    </Layout>
  )
}

export default NextTemplateHome
