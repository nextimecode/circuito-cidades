import React, { useState } from 'react'
import Head from 'next/head'
import { Box, Text, Flex, IconButton, Wrap, WrapItem, Image } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import EventCard from '../components/atoms/eventCard'

const events0 = [
  {
    dia: '07 de Setembro',
    texto: 'Etapa Nova União'
  },
  {
    dia: '14 de Setembro',
    texto: 'Etapa João Monlevade'
  },
  {
    dia: '21 de Setembro',
    texto: 'Etapa Rio Piracicaba'
  },
  {
    dia: '28 de Setembro',
    texto: 'Etapa Prata e Santa Maria'
  }
]
const events1 = [
  {
    dia: '05 de Outubro',
    texto: 'Etapa Nova União'
  },
  {
    dia: '12 de Outubro',
    texto: 'Etapa João Monlevade'
  },
  {
    dia: '19 de Outubro',
    texto: 'Etapa Rio Piracicaba'
  },
  {
    dia: '26 de Outubro',
    texto: 'Etapa Prata e Santa Maria'
  }
]
const events2 = [
  {
    dia: '02 de Novembro',
    texto: 'Etapa Nova União'
  },
  {
    dia: '09 de Novembro',
    texto: 'Etapa João Monlevade'
  },
  {
    dia: '16 de Novembro',
    texto: 'Etapa Rio Piracicaba'
  },
  {
    dia: '23 de Novembro',
    texto: 'Etapa Prata e Santa Maria'
  },
  {
    dia: '30 de Novembro',
    texto: 'Etapa Prata e Santa Maria'
  }
]
const events3 = [
  {
    dia: '07 de Dezembro',
    texto: 'Etapa Nova União'
  },
  {
    dia: '14 de Dezembro',
    texto: 'Etapa João Monlevade'
  },
  {
    dia: '21 de Dezembro',
    texto: 'Etapa Rio Piracicaba'
  },
  {
    dia: '28 de Dezembro',
    texto: 'Etapa Prata e Santa Maria'
  }
]

export default function Calendar() {
  const [index, setIndex] = useState(0)
  const nomesMes = ['Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const events = [events0, events1, events2, events3]
  function handleIncrement() {
    index < 3 ? setIndex(index + 1) : setIndex(index)
  }
  function handleDecrement() {
    index > 0 ? setIndex(index - 1) : setIndex(index)
  }
  return (
    <div>
      <Head>
        <title>Calemdario</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box className="calendarSection" bg="white" w="100%" pt={{ base: '48px', md: '80px' }}>
          <Text color="#C53030" fontSize={{ base: '24px', md: '36px' }} textAlign="center" pb={{ base: '24px', md: '64px' }}>
            Calendário de Eventos
          </Text>
          <Wrap>
            <WrapItem className="calendar" pl={{ base: '0px', md: '83px' }}>
              <Flex direction='row' className="monthBox" maxWidth='400px' alignItems='center'>

                <IconButton
                  aria-label='mês anterior'
                  fontSize={{ base: '20px', md: '24px' }}
                  display={{ base: 'inherit', md: 'none' }}
                  onClick={handleDecrement}
                  icon={<ChevronLeftIcon color='#C53030'/>}
                />

                <Text
                  className="monthReference"
                  color='#4A5568'
                  fontSize={{ base: '18px', md: '24px' }}
                  mr={{ base: '0px', md: '100px' }}
                  textAlign={{ base: 'center', md: 'inherit' }}
                >
                  {nomesMes[index]} 2021
                </Text>
                <IconButton
                  aria-label='mês anterior'
                  fontSize={{ base: '20px', md: '24px' }}
                  display={{ base: 'none', md: 'inherit' }}
                  icon={<ChevronLeftIcon color='#C53030'/>}
                  onClick={handleDecrement}
                />

                <IconButton
                  aria-label='mês posterior'
                  fontSize={{ base: '20px', md: '24px' }}
                  icon={<ChevronRightIcon color='#C53030' />}
                  onClick={handleIncrement}
                />
              </Flex>
              {/* <Image src='../../public/images/Days.jpg' objectFit="cover" alt={'mês de ' + nomesMes[index]} /> */}
            </WrapItem>
            <WrapItem display='row' className='eventsCalendar' w='382px' mt={{ base: '40px', md: '150px' }}>
              {events[index].map((entry, index) => (
                <EventCard
                  key={index}
                  fontSize='21px'
                  headerText={entry.dia}
                  text={entry.texto}
                  width='282px'
                />
              ))}

            </WrapItem>
          </Wrap>

        </Box>

      </main>

    </div>
  )
}
