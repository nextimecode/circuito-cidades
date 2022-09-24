import { Box, Text, Image, Flex, Center } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import packageInfo from '../../../../package.json'

type Props = {
  imageSrc?: string
}

const version = packageInfo.version

const Footer = ({
  imageSrc = '../images/footer/CardRealização - Desktop.png',
  children
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Center pb={4}>
        <Flex>
          <Box p={3}>
            <Text fontSize="14px" color={'#4A5568'}>
              {children}
            </Text>
          </Box>
          <Box>
            <Image src={imageSrc} alt={'Imagem do footer'} />
          </Box>
        </Flex>
      </Center>
      <Center py={2} bg="white">
        <Link href="https://nextime.com.br/">
          <a>
            <span>Site desenvolvido por NeXTIME</span>
            <span>&copy; 2021. v.{version}</span>
          </a>
        </Link>
      </Center>
    </>
  )
}

export default Footer
