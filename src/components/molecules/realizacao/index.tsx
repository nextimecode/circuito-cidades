import React from 'react'

import { Box, Grid } from '@chakra-ui/react'

import NextFotterBox from '../../atoms/NextFotterBox'
import Title from '../../atoms/title'
import { cities } from '../../../pages/api/cities'

const Realizacao = () => {
  return (
    <Box as='div' px={[4, 20]} w='100%'>
      <Title label='Realização'/>

      <Grid
        py={[3, 5]}
        templateColumns={['repeat(1, 1fr)', 'repeat(6, 1fr)']}
        gap={[4, 6]}
        w='100%'
      >
        {cities.map((city, index) => (
          <NextFotterBox
          key={index}
            imgUrl={city.symbol}
            cityName={city.title}
            ufName="MG"
          />
        ))}
      </Grid>

      {/* <FooterAtoms imageSrc="../images/footer/image6.png">APOIO</FooterAtoms> */}
    </Box>
  )
}

export default Realizacao
