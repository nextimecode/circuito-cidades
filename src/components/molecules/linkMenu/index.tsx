import React from 'react'

import { NavLinkProps } from '../../../types/types'
import { Box, Link, Image } from '@chakra-ui/react'

type Props = {
  navLink: NavLinkProps
  path: string
  smallDevice?: boolean
}

const LinkMenu = ({ navLink, path, smallDevice = true }: Props) => {
  const isActive = navLink.href === path
  const isButton = navLink.buttonTyped

  const primaryColor = 'primary'
  const primaryLightColor = 'primary-light'
  const secundaryColor = 'gray-50'
  const rolesIsActive = {
    content: "''",
    position: 'absolute',
    height: '2px',
    width: '100%',
    bottom: '-2px',
    left: '0',
    background: primaryLightColor,
    borderRadius: '1px'
  }

  return (
    <Box
      as="div"
      transition="0.5s"
      display="inline-flex"
      alignItems={'center'}
      w={['100%', 'auto']}
      borderBottom={['1px solid', 'none']}
      borderBottomColor={['primary-dark', 'none']}
      fontWeight={isActive ? 800 : 600}
      position={isActive ? 'relative' : 'static'}
      color={isButton ? primaryColor : secundaryColor}
      bgColor={isButton ? secundaryColor : 'none'}
      borderRadius={isButton ? 32 : 'none'}
      px={isButton ? 4 : 1}
      py={isButton ? [2, 1] : [4, 1]}
      my={isButton ? [4, 'auto'] : ['auto']}
      justifyContent={isButton ? 'center' : 'auto'}
      _hover={isButton ? { color: secundaryColor, bgColor: primaryColor } : {}}
      _after={isActive ? rolesIsActive : { content: "''" }}
    >
      {navLink.starIcon && <Image alt={'Icon de estrela'} src="/icons/starIcon.svg" h={4} alignSelf={'center'} pr={2} />}
      <Link href={navLink.href}>{navLink.label}</Link>
      {smallDevice && navLink.arrowIcon && (
        <Box as="div" w="inherit" display="flex" placeContent="flex-end">
          <Image alt={'Icone'} src="/icons/forwardIcon.svg" h={5} alignSelf={'self-end'} pr={2} />
        </Box>
      )}
    </Box>
  )
}

export default LinkMenu
