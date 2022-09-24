import React from 'react'
import AccordionTemplate from '../components/templates/accordionTemplate'
import { useGetModalidadesQuery } from '../graphql/generated'

const Modality = () => {
  const { data } = useGetModalidadesQuery()
  if (!data || !data.modalidades) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  } else {
    return <AccordionTemplate title="Modalidades" items={data.modalidades} />
  }
}

export default Modality
