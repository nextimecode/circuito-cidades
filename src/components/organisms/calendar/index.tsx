import React from 'react'
import { Calendar, DateObject } from 'react-multi-date-picker'
import 'react-multi-date-picker/styles/colors/red.css'
import portugueseLowercase from '../../../utils/calendar_language'
import { dates } from '../../../pages/api/dates'
import Stages from '../../molecules/stages'
import { Box, Flex } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'

const EventCalendar = () => {
  const smallDevice = useBreakpointValue({ base: true, md: false })
  return (
    <Flex justify="space-evenly" w="100%">
      <Box display={smallDevice ? 'none' : 'block'}>
        <Calendar
          locale={portugueseLowercase}
          className="red"
          value={dates}
          readOnly
          currentDate={new DateObject()}
        />
      </Box>
      <Stages />
    </Flex>
  )
}

export default EventCalendar
