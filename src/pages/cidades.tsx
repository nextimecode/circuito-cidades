import React from 'react'
import AccordionTemplate from '../components/templates/accordionTemplate'

import { useCitiesQuery } from '../graphql/generated'
import { CityProps } from '../types/types'

const Cidades = () => {
  const { data } = useCitiesQuery()
  return <AccordionTemplate title="Cidades" items={data?.cities as CityProps[]} isCity />
}

export default Cidades
