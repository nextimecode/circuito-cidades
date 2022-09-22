import React from 'react'

import Link from 'next/link'
import { Box, Center, Heading, Text, Stack, HStack } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import { NewsProps } from '../../../types/types'

type Props = {
  news: NewsProps
}

const ROUTE_POST_ID = 'posts/'

const Noticia = ({ news }: Props) => {
  const postId = `${ROUTE_POST_ID}${news.id}`
  return (
    <Center py={3} mx={[0, 6]}>
      <Box maxW={'384px'} w={'full'} boxShadow={'xl'} rounded={'md'} p={6} overflow={'hidden'}>
        <Box
          h={'192px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          bgImage={`url("${news.content.imgUrl}")`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        ></Box>

        <Stack>
          <HStack>
            <CalendarIcon />
            <Text color={'gray-500'} fontWeight={500} fontSize={'sm'}>
              {news.date}
            </Text>
          </HStack>

          <Link href={{ pathname: postId }}>
            <a>
              <Heading color={'primary'} fontSize={'xl'} fontFamily={'body'}>
                {news.content.title}
              </Heading>
            </a>
          </Link>

          <Text color={'gray.500'}>{news.content.subtitle}</Text>
        </Stack>
      </Box>
    </Center>
  )
}

export default Noticia
