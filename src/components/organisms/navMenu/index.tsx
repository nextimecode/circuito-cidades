import React from 'react'

import { Flex, Button, HStack, Box, Image, Text, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { NavLinkProps } from '../../../types/types'
import LinkMenu from '../../molecules/linkMenu'

type Props = {
  listNavLinks: NavLinkProps[]
  smallDevice: boolean
  menuHeight: string
}

const NavMenu = ({
  listNavLinks,
  smallDevice,
  menuHeight
}: Props) => {
  const { asPath } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const menuIcons = ['/icons/hamburgerMenu.svg', '/icons/closeIcon.svg']

  return (
    <Box
      w="100vw"
      h={menuHeight}
      bgColor='primary'
      borderBottom={`${smallDevice ? '2px' : '4px'} solid #D8C68D`}
      position={'fixed'}
      zIndex={2}
    >
      <Flex w="100%" justify="center" alignItems="center">
        {!smallDevice && (
          <HStack spacing={15} justifyContent='space-between'>
            <Image src="/images/logos/logo.svg"/>
            <HStack w='100%' spacing={22}>
              {listNavLinks.map((navLink, index) => (
                <LinkMenu
                  key={index}
                  navLink={navLink}
                  path={asPath}
                  smallDevice={false}
                />
              ))}
            </HStack>
          </HStack>
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
        <Box as='div'>
          {isOpen && (
            <Flex
              py={4}
              bg="primary"
              w="100%"
              direction="column"
              borderBottom="8px solid #D8C68D"
              position="absolute"
            >
              {listNavLinks.map((navLink, index) => (
                <Box
                  key={index}
                  w="100%"
                  m='auto'
                  px={6}
                >
                  <LinkMenu navLink={navLink} path={asPath} />
                </Box>
              ))}
            </Flex>
          )}
        </Box>
      )}
    </Box>
  )
}

export default NavMenu
