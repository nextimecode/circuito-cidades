import React, { ReactNode } from 'react'
import { VStack } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  bg?: string
}

const Section = ({ children, bg = 'white' }: Props) => {
  return (
    <VStack
      w="100%"
      px={[6, 10]}
      py={6}
      borderRadius={[0, '8px']}
      bg={bg}
      align="stretch"
    >
      {children}
    </VStack>
  )
}

export default Section
