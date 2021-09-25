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
      bg={bg}
      align="stretch"
    >
      {children}
    </VStack>
  )
}

export default Section
