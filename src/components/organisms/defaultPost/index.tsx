import React from 'react'

import { Box, Text, HStack, Image } from '@chakra-ui/react'
import { AccordionPostProps } from '../../../types/types'

type Props = {
    item: AccordionPostProps
}

const DefaultPost = ({
  item
}: Props) => {
  return (
    <HStack
      as='div'
      display={['block', 'flex']}
      px={[0, 21]}
      py={[0, 6]}
      w={'100%'}
    >
      <Box
        as='div'
        pl={[4, 0]}
        pr={[4, 8]}
        py={4}
      >

        <Text
          fontSize={['sm', 'md']}
          textAlign='justify'

        >
          {item.content}
        </Text>

        <Text
          pt={4}
          pb={2}
          fontSize="xs"
        >
          {item.categories}
        </Text>

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
