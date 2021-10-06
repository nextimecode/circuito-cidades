import React from 'react'
import { Text, Box, VStack } from '@chakra-ui/react'
import { AccordionPostProps } from '../types/types'
import Title from '../components/atoms/title'
import Layout from '../components/templates/layout'
import Section from '../components/templates/section'
import Realizacao from '../components/molecules/realizacao'
import { cities } from './api/cities'

const listCities: AccordionPostProps[] = cities

const Inscricoes = () => {
  return (
    <Layout>
      <Section px={[4, 10]}>
        <Title
          label='Inscreva-se'
          alignSelf={['center', 'flex-start']}
        />
        <VStack spacing={2} alignItems='flex-start' py={[2, 4]}>
          <Text>
            1. Procure o Departamento ou Secretaria Municipal de Esportes de sua cidade;
          </Text>
          <Text>
            2. Preencha o formulário de inscrição;
          </Text>
          <Text>
            3. Participe da Etapa Local, para poder representar sua cidade na Etapa Final!
          </Text>
        </VStack>
        {listCities.map((city, index) => (
          <Box as='div' key={index} py={[2]}>
            <Text
              fontSize='lg'
              fontWeight={700}
              color='primary'
              py={1}
            >
              {city.title}
            </Text>
            <Text fontSize='sm'>
              {city.info?.place}<br/>
              {city.info?.location}<br/>
              {city.info?.contact}
            </Text>
          </Box>
        ))}
      </Section>
      <Section>
        <Realizacao />
      </Section>
    </Layout>
  )
}

export default Inscricoes
