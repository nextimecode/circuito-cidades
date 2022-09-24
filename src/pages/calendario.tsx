import React from 'react'
import { Text, Box, VStack } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/accordion'
import Title from '../components/atoms/title'
import Layout from '../components/templates/layout'
import Section from '../components/templates/section'
import { exposedCalendar } from './api/stage'
import StagesCalendar from '../components/organisms/stagesCalendar'

const Calendario = () => {
  return (
    <Layout>
      <Section px={[0, 10]}>
        <Title label="Calendário" alignSelf={['flex-start']} />
        {exposedCalendar && (
          <Accordion pb={6}>
            {exposedCalendar.map((month, index) => (
              <AccordionItem key={index} border="none" borderColor="none">
                <Box as="div" borderBottom="solid 1px" borderColor="#E2E8F0" mx={4} bg="none">
                  <Text fontWeight="bold">
                    <AccordionButton>
                      <Box flex="1" textAlign="left" color="primary">
                        {month.label}
                      </Box>
                      <AccordionIcon color="primary" />
                    </AccordionButton>
                  </Text>
                </Box>
                <AccordionPanel py={4} px={0}>
                  <VStack px={[0, 25]} spacing={4}>
                    {month.stages.map((stage, stageIndex) => (
                      <VStack
                        key={stageIndex}
                        as="div"
                        w="100%"
                        borderRadius={['none', 'md']}
                        bgColor="#EDF2F7"
                        alignItems="self-start"
                        p={6}
                      >
                        <Text color="gray.500" fontSize="xs">
                          {stage.date}
                        </Text>
                        <Text color="primary" fontSize="lg">
                          Etapa {stage.city}
                        </Text>
                        <StagesCalendar listModalities={stage.modalityList} />
                      </VStack>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </Section>
    </Layout>
  )
}

export default Calendario
