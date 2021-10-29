import React from 'react'

import { HStack, Image, Text, Box } from '@chakra-ui/react'

type Props = {
  sport: {
      title: string
      subtitle?: string
      imgSrc: string
  }
  isInEvent?: boolean
}

const ModalityIconCalendar = ({
  sport,
  isInEvent = false
}: Props) => {
  const subtitle = sport.subtitle || ''

  return (
    <HStack
      opacity={isInEvent ? 1 : 0.3}
      py={1}
    >
      <Image
        src={sport.imgSrc}
        pr={2}
      />
      <Text fontSize='sm'>{sport.title} </Text>
      {subtitle.length > 1 &&
        <Box as='span' fontSize='xs'>({subtitle})</Box>
      }
    </HStack>
  )
}

export default ModalityIconCalendar
