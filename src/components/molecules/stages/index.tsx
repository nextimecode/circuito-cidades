import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { stage } from '../../../pages/api/stage'
import { useBreakpointValue } from '@chakra-ui/media-query'

export default function Stages() {
  const first = stage.slice(0, 5)
  const second = stage.slice(5, stage.length)
  const smallDevice = useBreakpointValue({ base: true, md: false })
  return (
    <Flex direction={smallDevice ? 'column' : 'row'}>
      <Flex direction='column' p={smallDevice ? '0px 32px 0px 32px' : '0'}>
        {first.map((stage, index) =>
          (<Box key={index}>
            <Box fw={500} fontSize='14px' color='gray.500'>{stage.date}</Box>
            <Box fw={500} fontSize='20px' color='red.600' pb='16px'>{stage.city}</Box>
          </Box>)
        )}
      </Flex>
      <Flex direction='column' p={smallDevice ? '0px 32px 0px 32px' : '0px 0px 0px 50px'}>
        {second.map((stage, index) =>
          (<Box key={index}>
            <Box fw={500} fontSize='14px' color='gray.500'>{stage.date}</Box>
            <Box fw={500} fontSize='20px' color='red.600' pb='16px'>{stage.city}</Box>
          </Box>)
        )}
      </Flex>
    </Flex>
  )
}
