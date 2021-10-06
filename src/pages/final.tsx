import React from 'react'
import { Text, Box, VStack, Link } from '@chakra-ui/react'
import Title from '../components/atoms/title'
import Layout from '../components/templates/layout'
import Section from '../components/templates/section'
import DefaultPost from '../components/organisms/defaultPost'
import { finalStage } from './api/cities'
import CityInfo from '../components/organisms/cityInfo'

const lastStage = finalStage

const Final = () => {
  return (
    <Layout>
      <Section px={[4, 10]}>
        <Title
          label='Etapa Final'
          alignSelf={['flex-start'] }
        />

        <DefaultPost item={lastStage} py={[1, 2]} px={[0]}>
          <CityInfo city={lastStage} />
        </DefaultPost>

        <Box as='div' px={[0, 5]}>
          <Box as='div' py={[2]}>
            <Text fontSize='sm'>
              <Box as='span' fontWeight={700} py={2}>
                INFORMAÇÕES: <br/>
              </Box>
              {lastStage.info?.contact}
            </Text>
          </Box>
          <VStack
            as='div'
            px={0}
            py={[2]}
            spacing={1}
            alignItems='flex-start'
            fontStyle='italic'
            fontWeight={600}
            color='blue'
          >
            <Link href={lastStage.rulesUrl}>
              Regulamento Geral (Etapa Final)
            </Link>
            <Link href='/'>
              Regulamentos Específicos - Modalidades (Etapa Final)
            </Link>
            <Link href='/'>
              Listagem de Inscrições
            </Link>
            {lastStage.stages?.map((stage, stageIndex) => (
              <Link href={stage.reportUrl} key={stageIndex}>
                Boletim {stage.finished ? 'Oficial' : 'Zero'} [{stage.stage}]
              </Link>
            ))}
          </VStack>
        </Box>
      </Section>
    </Layout>
  )
}

export default Final
