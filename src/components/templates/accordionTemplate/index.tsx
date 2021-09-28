import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import AccordionOrganisms from '../../organisms/accordion'
import Layout from '../layout'

type AccordionTemplateProps = {
  title: string
  items: Record<string, any>[]
}

const AccordionTemplate = ({
  title = '',
  items = []
}: AccordionTemplateProps) => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Heading
          color={'primary'}
          fontSize={'xl'}
          fontFamily={'body'}
          py={7}
        >
          {title}
        </Heading>
        <AccordionOrganisms items={items}/>
      </Container>
    </Layout>
  )
}

export default AccordionTemplate
