import React from 'react'

import { Box, HStack, Image } from '@chakra-ui/react'
import { AccordionPostProps } from '../../../types/types'
import Title from '../../atoms/title'

type Props = {
    children: unknown
    item: AccordionPostProps
    showTitle?: boolean
    px?: number[]
    py?: number[]
}

const DefaultPost = ({
  children,
  item,
  showTitle = false,
  px = [0, 21],
  py = [0, 6]
}: Props) => {
  return (
    <HStack
      as='div'
      display={['block', 'flex']}
      px={px}
      py={py}
      w={'100%'}
    >
      <Box
        as='div'
        pl={[4, 0]}
        pr={[4, 8]}
        py={4}
        w={['100%', '50%']}
      >
        {showTitle &&
          <Title
            label={item.title}
            alignSelf={['flex-start']}
          />
        }

        {children}

      </Box>

      <Image
        src={item.imgUrl}
        borderRadius={['none', 'md']}
        w={['100%', '50%']}
        mx={['0 !important', 'auto']}
      />

    </HStack>

  )
}

export default DefaultPost
