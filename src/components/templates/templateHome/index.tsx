import React from 'react'
import Layout from '../layout/'
import Hero from '../../organisms/hero'
import Section from '../../templates/section'
import EventCalendar from '../../organisms/calendar'
import { Flex, Box } from '@chakra-ui/layout'
import Realizacao from '../../molecules/realizacao'

const TemplateHome = ({ title, description, slider }: any) => {
  console.log('SLIDER', slider)
  const heroImages = slider?.map((item: { url: string }) => item.url)
  return (
    <Layout>
      <Section>
        <Hero title={title} description={description} heroImages={heroImages} />
      </Section>
      <Box
        bgImage="url('/images/calendar/image1.svg')"
        bgRepeat="no-repeat"
        bgPosition="right"
        bgSize="400px"
      >
        <Section bg="transparent" title="Calendário de Eventos">
          <Flex zIndex={1}>
            <EventCalendar />
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
