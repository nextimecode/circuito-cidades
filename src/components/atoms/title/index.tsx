import { Heading } from '@chakra-ui/layout'
import React from 'react'

type Props = {
  label?: string
  color?: string
  py?: number[]
  px?: number[]
  alignSelf?: string[]
}

const Title = ({
  label,
  color = 'primary',
  py = [2, 5],
  px = [0, 0],
  alignSelf = ['center']
}: Props) => {
  return (
    <Heading
      fontSize={'2xl'}
      fontFamily={'Inter'}
      alignSelf={alignSelf}
      color={color}
      py={py}
      px={px}
    >
      {label}
    </Heading>
  )
}

export default Title
