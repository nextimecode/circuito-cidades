import React from 'react'

import { Text } from '@chakra-ui/layout'

type Props = {
    fullText: string
}

const PostText = ({
  fullText
}: Props) => {
  const paragraphs = fullText.split('\n')

  return (
    <React.Fragment>
      {paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          color={'#718096'}
          fontFamily='Inter'
          fontWeight={400}
          fontSize={['16px', '18px']}
          py={4}
          align='justify'
        >
          {paragraph}
        </Text>
      ))}

    </React.Fragment>

  )
}

export default PostText
