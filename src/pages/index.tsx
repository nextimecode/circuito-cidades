import React from 'react'
import { useGetLessonsQuery } from '../graphql/generated'
import TemplateHome from '../components/templates/templateHome'
import { newsItems } from './api/newsItems'
import { heroItems } from './api/heroItems'
import { Box, Text } from '@chakra-ui/react'

const Home = () => {
  const { data } = useGetLessonsQuery()
  return (
    <>
      <TemplateHome heroItems={heroItems} newsSet={newsItems} />
      {data?.lessons.map(lesson => {
        return (
          <Box key={lesson.id}>
            <Text>{lesson.title}</Text>
            <Text>{lesson.slug}</Text>
            <Text>{lesson.availableAt}</Text>
          </Box>
        )
      })}
    </>
  )
}

export default Home
