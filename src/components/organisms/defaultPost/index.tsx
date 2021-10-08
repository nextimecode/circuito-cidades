import React from 'react'

import { Box, HStack, Image } from '@chakra-ui/react'
import { CityProps } from '../../../types/types'
import Title from '../../atoms/title'

type Props = {
    children: unknown
    item: CityProps
    showTitle?: boolean
    px?: number[]
    py?: number[]
    display?: string[]
    reverseImage?: boolean
}

const DefaultPost = ({
  children,
  item,
  showTitle = false,
  px = [0, 21],
  py = [0, 6],
  display = ['block', 'flex'],
  reverseImage = false
}: Props) => {
  return (
    <HStack
      as='div'
      display={display}
      px={px}
      py={py}
      w={'100%'}
    >
      {reverseImage &&
        <Image
          src={item.imgUrl}
          borderRadius={['none', 'md']}
          w={['100%', '50%']}
          mx={['0 !important', 'auto']}
        />
      }

      <Box
        as='div'
        pl={[4, 4]}
        pr={[4, 8]}
        py={4}
        w={['100%', '50%']}
        mx='0 !important'
      >
        {showTitle &&
          <Title
            label={item.title}
            alignSelf={['flex-start']}
          />
        }

        {children}

      </Box>

      {!reverseImage &&
        <Image
          src={item.imgUrl}
          borderRadius={['none', 'md']}
          w={['100%', '50%']}
          mx={['0 !important', 'auto']}
        />
      }

    </HStack>

  )
}

export default DefaultPost
