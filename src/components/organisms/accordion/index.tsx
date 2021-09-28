import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react'
import React from 'react'

type AccordionOrganismsProps = {
  items?: Record<string, any>[]
}

const AccordionOrganisms = ({
  items = []
}: AccordionOrganismsProps) => {
  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" color="primary">
                {item.title}
              </Box>
              <AccordionIcon color="primary" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {item.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionOrganisms
