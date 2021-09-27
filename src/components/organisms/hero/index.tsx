import React from 'react'

import { Box, Text, VStack } from '@chakra-ui/layout'
import HeroCard from '../../molecules/heroCard'
import { EventProps } from '../../../types/types'

type Props = {
    hero: Record<string, EventProps>[]
}

const Hero = ({
  hero
}: Props) => {
  const currentEvent = hero[0].event

  return (
    <Box
      as='div'
      display={['block', 'flex']}
      flexDir={['inherit', 'row-reverse']}
      px={[0, 10]}
      py={[0, 6]}
      w={'100%'}
    >

      <HeroCard event={currentEvent}/>

      <VStack maxW={['100%', '40vw']} px={[4, 0]} pr={[4, 8]} py={[8, 0]}>

        <Box
          as='div'
          fontSize={['36px', '64px']}
        >
          <h1>{currentEvent.eventName}</h1>
        </Box>

        <Text
          color={'gray.500'}
          fontSize='14px'
          fontWeight={500}
        >
          {currentEvent.content}
        </Text>

      </VStack>
    </Box>
  )
}

export default Hero
