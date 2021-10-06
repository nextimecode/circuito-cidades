import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text
} from '@chakra-ui/react'
import DefaultPost from '../defaultPost'
import { AccordionPostProps } from '../../../types/types'

type AccordionOrganismsProps = {
  items?: AccordionPostProps[]
}

const AccordionOrganisms = ({
  items = []
}: AccordionOrganismsProps) => {
  return (
    <Accordion allowMultiple>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          border='none'
          borderColor='none'
        >
          <Box
            as='div'
            borderBottom='solid 1px'
            borderColor='#E2E8F0'
            mx={4}
            bg='none'
          >
            <Text fontWeight="bold">
              <AccordionButton>
                <Box flex="1" textAlign="left" color="primary">
                  {item.title}
                </Box>
                <AccordionIcon color="primary" />
              </AccordionButton>
            </Text>

          </Box>
          <AccordionPanel pb={4} px={0}>

            <DefaultPost item={item}/>

          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionOrganisms
