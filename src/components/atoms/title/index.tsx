import { Heading } from '@chakra-ui/layout'
import React from 'react'

type Props = {
    label: string
}

const Title = ({
  label
}: Props) => {
  return (
    <Heading
      color={'primary'}
      fontSize={'2xl'}
      fontFamily={'body'}
      alignSelf={'center'}
    >
      {label}
    </Heading>
  )
}

export default Title
