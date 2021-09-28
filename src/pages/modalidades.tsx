import React from 'react'
import AccordionTemplate from '../components/templates/accordionTemplate'

import { modalityItems } from './api/modalityItems'

const Modality = () => {
  return (
    <>
      <AccordionTemplate title="Modalidades" items={modalityItems} />
    </>
  )
}

export default Modality
