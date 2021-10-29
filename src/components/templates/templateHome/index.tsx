import React from 'react'
import Layout from '../layout/'
import Hero from '../../organisms/hero'
import Section from '../../templates/section'
import EventCalendar from '../../organisms/calendar'
import { Flex, Box } from '@chakra-ui/layout'
import Realizacao from '../../molecules/realizacao'

type NextTemplateHomeProps = {
  heroItems: {
    heroTitle: string
    heroDescription: string
    heroImages : string[]
  }
  newsSet: Record<string, any>[]
}

const TemplateHome = ({
  heroItems
}: NextTemplateHomeProps) => {
  return (
    <Layout>
      <Section>
        <Hero
          heroTitle={heroItems.heroTitle}
          heroDescription={heroItems.heroDescription}
          heroImages={heroItems.heroImages}
        />
      </Section>

      {/* <Section bg={'gray-50'} title="Últimas Notícias">
        <LastNews newsSet={newsSet}/>
      </Section> */}

      <Box bgImage="url('/images/calendar/image1.svg')" bgRepeat="no-repeat" bgPosition="right" bgSize='400px'>
        <Section bg='transparent' title="Calendário de Eventos">
          <Flex zIndex={1}>
            <EventCalendar/>
          </Flex>
        </Section>
      </Box>
      <Section>
        <Realizacao />
      </Section>
    </Layout>
  )
}

export default TemplateHome
