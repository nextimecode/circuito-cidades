import React from 'react'

import { Text } from '@chakra-ui/layout'

type Props = {
    text: string
}

const PostSubtitle = ({
  text
}: Props) => {
  return (
    <Text
      color={'#718096'}
      fontFamily='Inter'
      fontWeight={500}
      fontSize={['16px', '20px']}
      align='justify'
      py={4}
    >
      {text}
    </Text>
  )
}

export default PostSubtitle
