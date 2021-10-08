import React from 'react'
import AccordionTemplate from '../components/templates/accordionTemplate'

import { cities } from './api/cities'

const Cidades = () => {
  return (
    <>
      <AccordionTemplate
        title="Cidades"
        items={cities}
        isCity
      />
    </>
  )
}

export default Cidades
