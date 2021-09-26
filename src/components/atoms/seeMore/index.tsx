import React from 'react'

import { Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'

type Props = {
    label?: string
    url?: string
    color?: string
}

const SeeMore = ({
  label = 'Veja Mais',
  url = '#',
  color = 'primary'

}: Props) => {
  return (
    <Text
      color={color}
      fontSize={'md'}
      fontWeight={700}
      alignSelf='center'
    >
      <Link to={url}>
        {label}
      </Link>
    </Text>
  )
}

export default SeeMore
