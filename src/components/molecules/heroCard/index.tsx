import React from 'react'

import { Box, VStack } from '@chakra-ui/layout'
import { EventProps } from '../../../types/types'

type Props = {
    evento: EventProps
}

const HeroCard = ({
  evento
}: Props) => {
  return (
    <Box
      w={['100%', '50vw']}
      h={['80vw', '30vw']}
      boxShadow={'xl'}
      rounded={['none', 'md']}
      bgImage={`url("${evento.imgUrl}")`}
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
      p={6}
      display='flex'
    >
      <VStack
        alignSelf={'self-end'}
        spacing={1}
        align='start'
      >

        <Box
          as='div'
          bgColor='white'
          p={2}
          textTransform='uppercase'
          fontSize='14px'
          color='primary'
        >
          {evento.stage}
        </Box>

        <Box
          as='div'
          bgColor='primary'
          px={6}
          py={3}
          fontSize='20px'
          color='white'
        >
          {evento.place}
        </Box>

      </VStack>
    </Box>
  )
}

export default HeroCard