import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

type Props = {
    headerText: string,
    fontSizeHeader?: string,
    colorHeader?: string,
    text: string,
    fontSize?: string,
    colorText?: string,
    width?: string,
    mb?: string,
    gap?: string
}

const EventCard = ({ headerText, text, colorText = '#C53030', colorHeader = '#718096', fontSize = '20px', fontSizeHeader = '14px', width = '100%', mb = '32px', gap = '8px' }: Props) => {
  return (
    <Box width={width} mb={mb} pl='25px'>
      <Text fontSize={fontSizeHeader} color={colorHeader}>{headerText}</Text>
      <Text fontSize={fontSize} color={colorText} mt={gap}>{text}</Text>
    </Box>
  )
}

export default EventCard
