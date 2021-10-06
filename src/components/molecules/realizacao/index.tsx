import React from 'react'

import { Box, Text, Flex } from '@chakra-ui/react'

import FooterAtoms from '../../atoms/Footer'
import NextFotterBox from '../../atoms/NextFotterBox'

const Realizacao = () => {
  return (
    <Box pt={5}>
      <Box>
        <Text fontSize={['24px', '36px']} color='primary'>
              Realização
        </Text>
      </Box>

      <Flex
        direction={['column', 'column', 'row', 'row']}
        rounded='lg'
        p={5}
      >
        <NextFotterBox imageSrc="../images/footer/image1.png">Nova União - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/image2.png">João Monlevade - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/image3.png">Rio Piracicaba - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/image4.png"> S.D. Prata e Santa Maria - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/image5.png">São Gonçalo do Rio Abaixo - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/Vector.png">A definir (Grande final)</NextFotterBox>
      </Flex>

      <FooterAtoms imageSrc="../images/footer/image6.png">APOIO</FooterAtoms>
    </Box>
  )
}

export default Realizacao