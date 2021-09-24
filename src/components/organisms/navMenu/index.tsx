import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

import { Flex, Button, HStack, Box, Image, Text, useDisclosure, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

const NavMenu = () => {
  const { asPath } = useRouter()
  const smallDevice = useBreakpointValue({ base: true, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const menuIcons = ['/icons/hamburgerMenu.svg', '/icons/closeIcon.svg']

  return (
    <Box
      w="100vw"
      h={smallDevice ? '50px' : '92px'}
      bg="red.600"
      borderBottom={`${smallDevice ? '2px' : '4px'} solid #D8C68D`}

    >
      <Flex w="100%" justify="center" alignItems="center">
        {!smallDevice && (
          <Flex justify="space-between" w={1366} pl="83px" pr="67px">
            <Image src="/images/logos/logo.svg"/>
            <HStack spacing="47px" color="white">
              <Box
                fontWeight={asPath === '/' ? 800 : 600}
                className={asPath === '/' ? styles.link : ''}
              >
                <Link href="/">O Circuito</Link>
              </Box>
              <Box
                fontWeight={asPath === '/modalidades' ? 800 : 600}
                className={asPath === '/modalidades' ? styles.link : ''}
              >
                <Link href="/modalidades">Modalidades</Link>
              </Box>
              <Box
                fontWeight={asPath === '/cidades' ? 800 : 600}
                className={asPath === '/cidades' ? styles.link : ''}
              >
                <Link href="/cidades">Cidades</Link>
              </Box>
              <Box
                fontWeight={asPath === '/documentos' ? 800 : 600}
                className={asPath === '/documentos' ? styles.link : ''}
              >
                <Link href="/documentos">Documentos</Link>
              </Box>
              <Box
                fontWeight={asPath === '/calendario' ? 800 : 600}
                className={asPath === '/calendario' ? styles.link : ''}
              >
                <Link href="/calendario">Calendário</Link>
              </Box>
              <Button _hover={{ background: 'red.600', color: 'white' }} borderRadius={32} w={122} h="8" color="red.600" bg="white">
                Inscreva-se
              </Button>
            </HStack>
          </Flex>
        )}
        {smallDevice && (
          <Flex color="white" alignItems="center" justify="space-between" w="90%">
            <Image src="/images/logos/logo.svg" h="48px"/>
            <Flex align="center" verticalAlign="center">
              <Text fontSize="14px" mr="8px">{isOpen ? 'Fechar' : 'Menu'}</Text>
              <Button
                onClick={isOpen ? onClose : onOpen}
                colorScheme="transparent"
                p="0px"
              >
                <Image src={isOpen ? menuIcons[1] : menuIcons[0]}/>
              </Button>
            </Flex>
          </Flex>
        )}
      </Flex>

      {smallDevice && (
        <div>
          {isOpen && (
            <Flex spacing="47px" color="white" bg="red.600" w="100%" direction="column" borderBottom="8px solid #D8C68D" position="absolute">
              <Box borderBottom="1px solid #E53E3E" w="312px" m="auto" py="16px">
                <Link href="/">O Circuito</Link>
              </Box>
              <Flex borderBottom="1px solid #E53E3E" w="312px" m="auto" py="16px" justify="space-between">
                <Link href="/modalidades">Modalidades</Link>
                <Image src="/icons/forwardIcon.svg"/>
              </Flex>
              <Flex borderBottom="1px solid #E53E3E" w="312px" m="auto" py="16px" justify="space-between">
                <Link href="/cidades">Cidades</Link>
                <Image src="/icons/forwardIcon.svg"/>
              </Flex>
              <Flex alignItems="center" borderBottom="1px solid #E53E3E" w="312px" m="auto" py="16px">
                <Image src="/icons/starIcon.svg" pr="16px"/>
                <Link href="#">Etapa final</Link>
              </Flex>
              <Box borderBottom="1px solid #E53E3E" w="312px" m="auto" py="16px">
                <Link href="/documentos">Documentos</Link>
              </Box>
              <Box w="312px" m="auto" py="16px">
                <Link href="/calendario">Calendário</Link>
              </Box>
              <Flex justify="center" pt="60px" pb="50px">
                <Button borderRadius={32} w={312} h="48px" color="red.600" bg="white">
                  Inscreva-se
                </Button>
              </Flex>
            </Flex>
          )}
        </div>
      )}
    </Box>
  )
}

export default NavMenu
