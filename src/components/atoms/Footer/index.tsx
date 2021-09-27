import { Box, Text, Image, Flex } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type Props = {
  imageSrc?: string;
}

const Footer = ({
  imageSrc = '../images/footer/CardRealização - Desktop.png',
  children
}: PropsWithChildren<Props>) =>

  (
    <Flex
      w={['360px', '100%']}
      h={['199px', '154px']}
      bg={'white'}
    >
      <Flex
        w='56px'
        h='21px'
        t='67px'
      >
        <Text
          fontSize="14px" pt={['48px', '66px']} pl={['147px', '494px']}
          color={'#4A5568'}
          align={'center'}>
          {children}
        </Text>
      </Flex>

      <Box
        ml={['0px', '500px']}
        pt={['93px', '48px']}
      >
        <Image src={imageSrc} />
      </Box>

    </Flex>
  )

export default Footer
