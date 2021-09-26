import React, { ReactNode } from 'react'
import { VStack } from '@chakra-ui/react'
import Title from '../../atoms/title'

type Props = {
  children: ReactNode
  title?: string
  bg?: string
}

const Section = ({
  children,
  title,
  bg = 'white'
}: Props) => {
  return (
    <VStack
      w="100%"
      bg={bg}
      align="stretch"
    >
      {title &&
        <Title label={title}/>
      }
      {children}
    </VStack>
  )
}

export default Section
