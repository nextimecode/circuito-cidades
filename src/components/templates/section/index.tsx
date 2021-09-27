import React, { ReactNode } from 'react'
import { VStack } from '@chakra-ui/react'
import Title from '../../atoms/title'

type Props = {
  children: ReactNode
  title?: string
  bg?: string
  px?: number
}

const Section = ({
  children,
  title,
  bg = 'white',
  px = 0
}: Props) => {
  return (
    <VStack
      w="100%"
      bg={bg}
      align="stretch"
      py={5}
      px={px}
    >
      {title &&
        <Title label={title}/>
      }
      {children}
    </VStack>
  )
}

export default Section
