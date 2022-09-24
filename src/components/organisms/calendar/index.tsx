import React from 'react'
import { Calendar, DateObject } from 'react-multi-date-picker'
import 'react-multi-date-picker/styles/colors/red.css'
import portugueseLowercase from '../../../utils/calendar_language'
import Stages from '../../molecules/stages'
import { Box, Flex } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { useGetDateEventQuery } from '../../../graphql/generated'

const EventCalendar = () => {
  const smallDevice = useBreakpointValue({ base: true, md: false })
  const { data } = useGetDateEventQuery()
  if (!data || !data.dateEvents[0].dates) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  } else {
    return (
      <Flex justify="space-evenly" w="100%">
        <Box display={smallDevice ? 'none' : 'block'}>
          <Calendar
            locale={portugueseLowercase}
            className="red"
            value={data.dateEvents[0].dates}
            readOnly
            currentDate={new DateObject()}
          />
        </Box>
        <Stages />
      </Flex>
    )
  }
}

export default EventCalendar
