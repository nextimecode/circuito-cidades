import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import AccordionOrganisms from '../../organisms/accordion'
import Layout from '../layout'

type AccordionTemplateProps = {
  title: string
  items: any
  isCity?: boolean
}

const AccordionTemplate = ({ title = '', items = [], isCity = false }: AccordionTemplateProps) => {
  return (
    <Layout>
      <Container maxW="container.lg" px={0}>
        <Heading color={'primary'} fontSize={['xl', '2xl']} fontFamily={'body'} py={7} px={[4]}>
          {title}
        </Heading>
        <AccordionOrganisms items={items} isCity={isCity} />
      </Container>
    </Layout>
  )
}

export default AccordionTemplate
