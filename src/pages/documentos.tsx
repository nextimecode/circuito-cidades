import React from 'react'
import { Text, VStack, Link } from '@chakra-ui/react'
import Title from '../components/atoms/title'
import Layout from '../components/templates/layout'
import Section from '../components/templates/section'

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
            <Link href='https://drive.google.com/file/d/1xRCsKVhD5dHDE3IbKxaw3l-Kt4Z9L0p8/view?usp=sharing'>Protocolo Sanitário</Link>
            <Link href='https://drive.google.com/file/d/11T4dbKCCKJD1o2mJ5gEmxNFYfEVf19-S/view?usp=sharing'>Regulamento Geral</Link>
            <Link href='https://drive.google.com/file/d/1xRCsKVhD5dHDE3IbKxaw3l-Kt4Z9L0p8/view?usp=sharing'>Regulamentos Específicos - Modalidades</Link>
          </VStack>
        </VStack>
      </Section>
    </Layout>
  )
}

export default Documentos
