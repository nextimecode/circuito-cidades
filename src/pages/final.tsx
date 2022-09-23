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
      <Section px={[0, 10]}>
        <Title label="Etapa Final" alignSelf={['flex-start']} px={[4, 0]} />

        <DefaultPost item={lastStage} py={[1, 2]} px={[0, 4]} reverseImage>
          <CityInfo city={lastStage} />
          <Box as="div">
            <Box as="div" py={[2]}>
              <Text fontSize="sm">
                <Box as="span" fontWeight={700} py={2}>
                  INFORMAÇÕES: <br />
                </Box>
                {lastStage.contact}
              </Text>
            </Box>

            <VStack
              as="div"
              px={0}
              py={[2]}
              spacing={1}
              alignItems="flex-start"
              fontStyle="italic"
              fontWeight={600}
              color="blue"
            >
              <Link href={lastStage.rulesUrl} target="_blank">
                Regulamento Geral (Etapa Final)
              </Link>
              <Link
                href="https://drive.google.com/file/d/1W6Cr828bco2YY3VKLTczDq68aUYJJH2K/view?usp=sharing"
                target="_blank"
              >
                Regulamentos Específicos - Modalidades (Etapa Final)
              </Link>
              <Link
                href="https://drive.google.com/file/d/101rxsCB8hqLTgK4sJMFi7y9pARFjI6Ym/view?usp=sharing"
                target="_blank"
              >
                Listagem de Inscrições
              </Link>
              <Link
                href="https://drive.google.com/file/d/18K_5Yoohhph6Z22ik2VHblPWTVvcHFxg/view?usp=sharing"
                target="_blank"
              >
                Boletim Zero
              </Link>
              <Link
                href="https://drive.google.com/file/d/18O0ciCj3Z9PMICkui4OMWIwfyAa8jUVJ/view?usp=sharing"
                target="_blank"
              >
                Boletim Oficial 1 [Sábado]
              </Link>
              <Link
                href="https://drive.google.com/file/d/1qTzJNOu3fUa9s4nZejC5URM_Q3Ml1ZKz/view?usp=sharing"
                target="_blank"
              >
                Boletim Oficial 1 [Domingo]
              </Link>
            </VStack>
          </Box>
        </DefaultPost>
      </Section>
    </Layout>
  )
}

export default Final
