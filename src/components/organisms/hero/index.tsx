import React, { useRef } from 'react'

import { Text, VStack, HStack, Image, Box } from '@chakra-ui/react'
import { EventProps } from '../../../types/types'
import PostText from '../../atoms/postText'
import { Rerousel } from 'rerousel'
import HeroCarousel from '../heroCarousel'

type Props = {
  heroTitle: string
  heroDescription: string
  heroImages : string[]
}

const Hero = ({
  heroTitle,
  heroDescription,
  heroImages
}: Props) => {
  return (
    <HStack
      as='div'
      flexDir={['inherit', 'row-reverse']}
      display={['block', 'flex']}
      px={[0, 10]}
      py={[0, 5]}
      w={'100%'}
    >
      <Box
        as='div'
        w={['100%', '50%']}
        boxShadow={'0px 4px 6px -2px rgba(45, 55, 72, 0.05), 0px 10px 15px -3px rgba(45, 55, 72, 0.1)'}
      >
        <HeroCarousel images={heroImages} />
      </Box>

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
          {heroTitle}
        </Text>

        <PostText
          fullText={heroDescription}
        />

      </VStack>

    </HStack>
  )
}

export default Hero
