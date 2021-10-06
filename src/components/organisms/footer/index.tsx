import React from 'react'
import packageInfo from '../../../../package.json'

import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import NextimeSvg from '../../atoms/nextimeSvg'

type Props = {
  urlLogo: string
}

const NeXTIMEColor = '#202F4F'
const version = packageInfo.version

const Footer = ({
  urlLogo
}: Props) => {
  return (
    <Flex
      bgColor='primary'
      color='white'
      fontSize='sm'
      w='100%'
      display={['block', 'flex']}
      alignItems='center'

    >
      <Box
        as='div'
        w={['100%', '50%']}
        textAlign='center'
        py={[3, 4]}
      >
          Copyright © {new Date().getFullYear()} | Circuito Cidades | v.{version}
      </Box>

      <Box
        as='div'
        placeContent='center'
        w={['100%', '50%']}
        py={[3, 4]}
      >
        <HStack
          display='flex'
          placeContent={['center', 'auto']}
        >
          <Box as='span'>Desenvolvido por </Box>
          <Link
            href="https://nextime.com.br"
            _hover={{
              transition: '0.3s',
              fill: NeXTIMEColor
            }}
            transition='0.3s'
            fill='white'
          >
            <NextimeSvg size={1.5}/>
          </Link>
        </HStack>

        <Box as='div' display='none'>
          Desenvolvedores:
          <Link href="https://github.com/hpmoreira05">
              Henrique Pozzolini
          </Link>
          <Link href="https://github.com/lucasFilppe">
              Lucas Filipe
          </Link>
          <Link href="https://github.com/marcuslamounier">
              Marcus Lamounier
          </Link>
          <Link href="https://github.com/phdduarte">
              Pedro Duarte
          </Link>
        </Box>
      </Box>

    </Flex>
  )
}

export default Footer
