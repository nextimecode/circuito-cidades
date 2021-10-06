import React from 'react'

import { Text, VStack, HStack } from '@chakra-ui/react'
import HeroCard from '../../molecules/heroCard'
import { EventProps } from '../../../types/types'
import PostText from '../../atoms/postText'

type Props = {
    hero: Record<string, EventProps>[]
}

const Hero = ({
  hero
}: Props) => {
  const currentEvent = hero[0].event
  const fullText = currentEvent.content || ''

  return (
    <HStack
      as='div'
      flexDir={['inherit', 'row-reverse']}
      display={['block', 'flex']}
      px={[0, 10]}
      py={[0, 5]}
      w={'100%'}
    >
      <HeroCard event={currentEvent}/>

      <VStack
        as='div'
        w={['100%', '50%']}
        pl={[4, 0]}
        pr={[4, 12]}
        py={4}
        mx={'0 !important'}
      >

        <Text
          fontSize={['3xl', '5xl']}
          textAlign='justify'
          alignSelf='start'
          color='primary'
          fontWeight={700}
        >
          {currentEvent.eventName}
        </Text>

        <PostText
          fullText={fullText}
        />

      </VStack>

    </HStack>
  )
}

export default Hero
