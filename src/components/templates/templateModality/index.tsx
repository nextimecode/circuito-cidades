import React from 'react'
import Layout from '../layout'
import Section from '../section'

type TemplateModalityProps = {
  items: Record<string, any>[]
}

const TemplateModality = ({
  items = []
}: TemplateModalityProps) => {
  return (
    <Layout>
      <Section>
        {items[0].event.eventName}
      </Section>
    </Layout>
  )
}

export default TemplateModality
