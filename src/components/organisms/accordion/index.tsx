import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
  Link
} from '@chakra-ui/react'
import DefaultPost from '../defaultPost'
import { AccordionPostProps } from '../../../types/types'
import CityInfo from '../cityInfo'
import ModalityInfo from '../modalityInfo'

type AccordionOrganismsProps = {
  items?: AccordionPostProps[]
  isCity?: boolean
}

const AccordionOrganisms = ({
  items = [],
  isCity = false
}: AccordionOrganismsProps) => {
  return (
    <Accordion pb={6}>
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

            <DefaultPost item={item} py={[1, 2]}>
              {isCity &&
                <CityInfo city={item} />
              }
              {!isCity &&
                <ModalityInfo modality={item} />
              }
            </DefaultPost>
            {isCity &&
              <React.Fragment>
                <Box as='div' px={[4, 5]} py={[2]}>
                  <Text fontSize='sm'>
                    <Box as='span' fontWeight={700} py={2}>
                      INFORMAÇÕES: <br/>
                    </Box>
                    {item.info?.place}<br/>
                    {item.info?.location}<br/>
                    {item.info?.contact}
                  </Text>
                </Box>
                <VStack
                  as='div'
                  px={[4, 5]}
                  py={[2]}
                  spacing={1}
                  alignItems='flex-start'
                  fontStyle='italic'
                  fontWeight={600}
                  color='blue'
                >
                  <Link href={item.rulesUrl}>
                    Regulamento Geral ({item.title})
                  </Link>
                  {item.stages?.map((stage, stageIndex) => (
                    <Link href={stage.reportUrl} key={stageIndex}>
                      Boletim {stage.finished ? 'Oficial' : 'Zero'} [{stage.stage}]
                    </Link>
                  ))}
                </VStack>
              </React.Fragment>
            }

          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionOrganisms
