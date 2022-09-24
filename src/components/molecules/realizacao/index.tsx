import React from 'react'

import { Box, Grid } from '@chakra-ui/react'

import NextFotterBox from '../../atoms/NextFotterBox'
import Title from '../../atoms/title'
import { useCitiesQuery } from '../../../graphql/generated'

const Realizacao = () => {
  const { data } = useCitiesQuery()
  if (!data || !data.cities) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  } else {
    return (
      <Box as="div" px={[4, 20]} w="100%" textAlign={['center', 'start']}>
        <Title label="Realização" />
        <Grid
          py={[3, 5]}
          templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
          gap={[4, 6]}
          w="100%"
        >
          {data?.cities.map((city, index) => (
            <NextFotterBox key={index} imgUrl={city?.symbol?.url} cityName={city.title} />
          ))}
        </Grid>
      </Box>
    )
  }
}

export default Realizacao
