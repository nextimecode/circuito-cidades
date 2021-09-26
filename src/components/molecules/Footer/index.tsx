import { Box, Flex, Text } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import Footer from '../../atoms/Footer'
import NextFotterBox from '../../atoms/NextFotterBox'

type Props = {
  children?: string
}
const NextFotter = ({
  children = ''
}: PropsWithChildren<Props>) =>

  (
    <Box
      w={['360px', '100%']}
      h={['100%', '380px']}
      bg='#F7FAFC'
    >

      <Box pt='48px' pl='83px'>
        <Text fontSize={['24px', '36px']} color='red.600'>
        Realização
        </Text>
      </Box>

      <Flex
        direction={['column', 'column', 'row', 'row']}
        boxShadow='md'
        rounded='lg'
        p={'24px'}
      >
        <NextFotterBox imageSrc="../images/footer/image1.png">Nova União - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/image2.png">João Monlevade - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/image3.png">Rio Piracicaba - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/image4.png"> S.D. Prata e Santa Maria - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/image5.png">São Gonçalo do Rio Abaixo - MG</NextFotterBox>
        <NextFotterBox imageSrc="../images/footer/Vector.png">A definir (Grande final)</NextFotterBox>

      </Flex>

      <Footer imageSrc="../images/footer/image6.png">Apoio</Footer>

      {children}

    </Box>

  )
export default NextFotter
