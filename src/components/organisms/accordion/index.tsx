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
          <Text fontWeight="bold">
            <AccordionButton>
              <Box flex="1" textAlign="left" color="primary">
                {item.title}
              </Box>
              <AccordionIcon color="primary" />
            </AccordionButton>
          </Text>
          <AccordionPanel pb={4}>
            {item.content}
            {item.imgUrl && <Box pt={4}>
              <Image
                boxSize="md"
                src={item.imgUrl}
                alt={item.title}
              />
            </Box>
            }
            <Text
              pt={4}
              pb={2}
              fontSize="xs"
            >
              {item.categories}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionOrganisms
