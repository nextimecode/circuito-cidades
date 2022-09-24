import React from 'react'
import AccordionTemplate from '../components/templates/accordionTemplate'

import { useCitiesQuery } from '../graphql/generated'
import { CityProps } from '../types/types'

const Cidades = () => {
  const { data } = useCitiesQuery()
  if (!data || !data.cities) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  } else {
    return <AccordionTemplate title="Cidades" items={data?.cities as CityProps[]} isCity />
  }
}

export default Cidades
