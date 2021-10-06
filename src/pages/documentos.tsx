import React from 'react'
import { Text, VStack, Link } from '@chakra-ui/react'
import Title from '../components/atoms/title'
import Layout from '../components/templates/layout'
import Section from '../components/templates/section'
import Realizacao from '../components/molecules/realizacao'

const Documentos = () => {
  return (
    <Layout>
      <Section px={[4, 10]}>
        <Title
          label='Documentos'
          alignSelf={['center', 'flex-start']}
        />
        <VStack
          as='div'
          spacing={5}
          alignItems='flex-start'
        >
          <Text>Baixe os documentos clicando abaixo:</Text>
          <VStack
            as='div'
            alignItems='flex-start'
            spacing={2}
            fontStyle='italic'
            fontWeight={600}
            color='blue'
          >
            <Link href=''>Protocolo Sanitário</Link>
            <Link href=''>Regulamento Geral</Link>
            <Link href=''>Regulamentos Específicos - Modalidades</Link>
          </VStack>
        </VStack>
      </Section>
      <Section>
        <Realizacao />
      </Section>
    </Layout>
  )
}

export default Documentos
