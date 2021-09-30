import React from 'react'
import Layout from '../layout/'
import Hero from '../../organisms/hero'
import Section from '../../templates/section'
import LastNews from '../../organisms/lastNews'
import EventCalendar from '../../organisms/calendar'

type NextTemplateHomeProps = {
  heroItems: Record<string, any>[]
  newsSet: Record<string, any>[]
}

const TemplateHome = ({
  heroItems = [],
  newsSet = []
}: NextTemplateHomeProps) => {
  return (
    <Layout>
      <Section>
        <Hero hero={heroItems}/>
      </Section>
      <Section bg={'gray-50'} title="Últimas Notícias">
        <LastNews newsSet={newsSet}/>
      </Section>
      <Section title="Calendário de Eventos">
        <EventCalendar />
      </Section>
    </Layout>
  )
}

export default TemplateHome
