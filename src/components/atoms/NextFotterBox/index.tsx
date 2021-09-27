import { Box, Center, Text, Image, Flex } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type Props = {
  imageSrc?: string;
}

const NextFooterBox = ({
  imageSrc = '../images/footer/CardRealização - Desktop.png',
  children
}: PropsWithChildren<Props>) =>

  (
    <Flex>
      <Box
        w={['100%', '180px']}
        h={['100%', '180px']}
        bg={'#FFFFFF'}
        boxShadow={'0px 4px 6px -2px rgba(45, 55, 72, 0.05), 0px 10px 15px -3px rgba(45, 55, 72, 0.1)'}
        ml='20px'
        mt={{ base: '16px', md: '0px' }}
        p={3}
        borderRadius={'4px'}>

        <Center>
          <Image boxSize="100px" src={imageSrc} />
        </Center>

        <Text
          fontSize="14px"
          p="8px"
          color={'#4A5568'}
          align={'center'}>
          {children}
        </Text>
      </Box>
    </Flex>
  )

export default NextFooterBox
