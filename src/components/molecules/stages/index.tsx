import React from 'react'

import { Flex, Box, Text, VStack } from '@chakra-ui/react'
import { stage } from '../../../pages/api/stage'

const half = stage.length / 2
const columns = [stage.slice(0, half), stage.slice(half, stage.length)]

const Stages = () => {
  return (
    <Flex direction={['column', 'row']}>
      {columns.map((column, indexColumn) => (
        <Flex
          key={indexColumn}
          direction='column'
          px={[4, 8]}
        >
          <VStack spacing={4}>
            {column.map((stage, indexStage) => (
              <Box
                as='div'
                key={indexStage}
                placeSelf='self-start'
              >
                <Text
                  fontSize='sm'
                  color='gray.500' py={2}
                  placeSelf='self-start'
                >
                  {stage.date}
                </Text>
                <VStack as='div' spacing={2}>
                  {stage.city.map((city, indexCity) => (
                    <Text
                      fontSize='lg'
                      color='primary'
                      key={indexCity}
                      placeSelf='self-start'
                    >
                      {city}
                    </Text>
                  ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </Flex>
      ))}
    </Flex>
  )
}

export default Stages
