import React from 'react'

import { Box } from '@chakra-ui/layout'
import { NewsProps } from '../../../types/types'
import Title from '../../atoms/title'
import { Image } from '@chakra-ui/react'
import PostSubtitle from '../../atoms/postSubtitle'
import PostText from '../../atoms/postText'

type Props = {
  news: NewsProps
}

const Post = ({ news }: Props) => {
  return (
    <Box as="div" px={[4, 0]} maxW={['100%', '800px']} margin={'auto'}>
      <Title label={news.content.title} alignSelf={['start']} />

      <PostSubtitle text={news.content.subtitle} />

      <Image src={news.content.imgUrl} w={'100%'} rounded="none" alt="Imagem do post" />

      <PostText fullText={news.content.content} color={'#718096'} />
    </Box>
  )
}

export default Post
