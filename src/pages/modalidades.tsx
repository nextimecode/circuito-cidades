import React from 'react'
import TemplateModality from '../components/templates/templateModality'

import { modalityItems } from './api/modalityItems'

const Modality = () => {
  return (
    <>
      <TemplateModality items={modalityItems} />
    </>
  )
}

export default Modality
