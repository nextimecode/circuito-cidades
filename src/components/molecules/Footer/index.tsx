import React from 'react'

import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import NextimeSvg from '../../atoms/nextimeSvg'

type Props = {
  urlLogo: string
}

const NeXTIMEColor = '#202F4F'

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
          Copyright © {new Date().getFullYear()} | Circuito Cidades
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
            // style={{fill: 'white'}}
            _hover={{
              fill: '#202F4F',
              bgColor: 'black'
            }}
          >
            <NextimeSvg size={1.5}
              // color={'white'}
            />
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
