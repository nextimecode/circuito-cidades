import React from 'react'

import { Box } from '@chakra-ui/layout'
import { NoticiaProps } from '../../../types/types'
import Title from '../../atoms/title'
import { Image } from '@chakra-ui/react'
import PostSubtitle from '../../atoms/postSubtitle'
import PostText from '../../atoms/postText'

type Props = {
    noticia: NoticiaProps
}

const Post = ({
  noticia
}: Props) => {
  return (
    <Box as='div' px={[4, 0]} maxW={['100%', '800px']} margin={'auto'}>

      <Title
        label={noticia.content.title}
        alignSelf='start'
      />

      <PostSubtitle text={noticia.content.subtitle} />

      <Image src={noticia.content.imgUrl} w={'100%'} rounded='none' />

      <PostText fullText={noticia.content.content} />

    </Box>
  )
}

export default Post
