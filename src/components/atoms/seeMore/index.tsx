import React from 'react'

import Link from 'next/link'
import { Text } from '@chakra-ui/layout'

type Props = {
  label?: string
  url?: string
  color?: string
}

const SeeMore = ({ label = 'Veja Mais', url = '#', color = 'primary' }: Props) => {
  return (
    <Text color={color} fontSize={'md'} fontWeight={700} alignSelf="center">
      <Link href={url}>
        <a>{label}</a>
      </Link>
    </Text>
  )
}

export default SeeMore
