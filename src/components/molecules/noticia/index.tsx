import React from 'react'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  HStack
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

type Props = {
  newsDate: string
  newsTitle: string
  newsContent: string
  newsImage: string
}

const Noticia = ({
  newsDate,
  newsTitle,
  newsContent,
  newsImage
}: Props) => {
  return (
    <Center py={3} mx={[0, 6]}>
      <Box
        maxW={'384px'}
        w={'full'}
        boxShadow={'xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >

        <Box
          h={'192px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          bgImage={`url("${newsImage}")`}
        >
        </Box>

        <Stack>
          <HStack>
            <CalendarIcon/>
            <Text
              color={'gray-500'}
              fontWeight={500}
              fontSize={'sm'}
            >
              {newsDate}
            </Text>
          </HStack>
          <Heading
            color={'primary'}
            fontSize={'xl'}
            fontFamily={'body'}
          >
            {newsTitle}
          </Heading>

          <Text color={'gray.500'}>{newsContent}</Text>
        </Stack>
      </Box>
    </Center>
  )
}

export default Noticia
