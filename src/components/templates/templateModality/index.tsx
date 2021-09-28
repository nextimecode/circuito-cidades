import { Container } from '@chakra-ui/react'
import React from 'react'
import AccordionOrganisms from '../../organisms/accordion'
import Layout from '../layout'

type TemplateModalityProps = {
  items: Record<string, any>[]
}

const TemplateModality = ({
  items = []
}: TemplateModalityProps) => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <AccordionOrganisms items={items}/>
      </Container>
    </Layout>
  )
}

export default TemplateModality
