import React from 'react'
import Layout from '../layout/'
import Hero from '../../organisms/hero'
import Section from '../../templates/section'
import LastNews from '../../organisms/lastNews'
import EventCalendar from '../../organisms/calendar'
import { Flex, Box } from '@chakra-ui/layout'

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
      <Box bgImage="url('/images/calendar/image1.svg')" bgRepeat="no-repeat" bgPosition="right" bgSize='400px' bg>
        <Section bg='transparent' title="Calendário de Eventos">
          <Flex zIndex={1}>
            <EventCalendar/>
          </Flex>
        </Section>
      </Box>
    </Layout>
  )
}

export default TemplateHome
