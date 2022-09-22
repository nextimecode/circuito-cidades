import React from 'react'

import { Text } from '@chakra-ui/react'

type Props = {
  fullText: string
  color?: string
  fontSize?: string[]
  spacing?: number[]
}

const PostText = ({ fullText, color = 'black', fontSize = ['md', 'lg'], spacing = [4] }: Props) => {
  const paragraphs = fullText.split('\n')

  return (
    <React.Fragment>
      {paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          fontFamily="Inter"
          color={color}
          fontSize={fontSize}
          py={spacing}
          align="justify"
        >
          {paragraph}
        </Text>
      ))}
    </React.Fragment>
  )
}

export default PostText
