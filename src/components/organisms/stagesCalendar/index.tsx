import React from 'react'

import { Grid } from '@chakra-ui/react'

import { ModalityListProps } from '../../../types/types'
import ModalityIconCalendar from '../../molecules/modalityIconCalendar'

type Props = {
  listModalities: ModalityListProps
}

const imgPath = '/images/modalities/symbols/'

const modalities = {
  caminhada: {
    title: 'Caminhada',
    subtitle: 'App',
    imgSrc: `${imgPath}Caminhada.svg`
  },
  ciclismoMtb: {
    title: 'Ciclismo MTB',
    imgSrc: `${imgPath}Bike.svg`
  },
  corrida: {
    title: 'Corrida',
    subtitle: 'App',
    imgSrc: `${imgPath}Corrida.svg`
  },
  damas: {
    title: 'Dama',
    imgSrc: `${imgPath}Dama.svg`
  },
  desafioNba: {
    title: 'Basquetebol',
    subtitle: 'Desafio NBA',
    imgSrc: `${imgPath}Basquete.svg`
  },
  eSports: {
    title: 'E-Sports',
    subtitle: 'FIFA',
    imgSrc: `${imgPath}Game.svg`
  },
  futebolFreestyle: {
    title: 'Futebol Freestyle',
    subtitle: 'Embaixadinhas',
    imgSrc: `${imgPath}FutebolFreestyle.svg`
  },
  futebolMesa: {
    title: 'Futebolde Mesa',
    imgSrc: `${imgPath}FutebolMesa.svg`
  },
  futevolei: {
    title: 'Futevôlei',
    imgSrc: `${imgPath}Futevoley.svg`
  },
  peteca: {
    title: 'Peteca',
    imgSrc: `${imgPath}Peteca.svg`
  },
  sinuca: {
    title: 'Sinuca',
    imgSrc: `${imgPath}Sinuca.svg`
  },
  slackLine: {
    title: 'Slackline',
    imgSrc: `${imgPath}Slackline.svg`
  },
  taekwondo: {
    title: 'Taekwondo',
    subtitle: 'Apresentação',
    imgSrc: `${imgPath}Taekwondo.svg`
  },
  tenisCampo: {
    title: 'Tênis de Campo',
    imgSrc: `${imgPath}Tenis.svg`
  },
  tenisMesa: {
    title: 'Tênis de Mesa',
    imgSrc: `${imgPath}PingPong.svg`
  },
  voleiDupla: {
    title: 'Vôlei Dupla',
    imgSrc: `${imgPath}Volei.svg`
  },
  xadrez: {
    title: 'Xadrez',
    imgSrc: `${imgPath}Xadrez.svg`
  }
}

const StagesCalendar = ({
  listModalities
}: Props) => {
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(4, 4fr)']}
      w='100%'
      py={4}
    >
      <ModalityIconCalendar
        sport={modalities.caminhada}
        isInEvent={listModalities.caminhada}
      />
      <ModalityIconCalendar
        sport={modalities.ciclismoMtb}
        isInEvent={listModalities.ciclismoMtb}
      />
      <ModalityIconCalendar
        sport={modalities.corrida}
        isInEvent={listModalities.corrida}
      />
      <ModalityIconCalendar
        sport={modalities.damas}
        isInEvent={listModalities.damas}
      />
      <ModalityIconCalendar
        sport={modalities.desafioNba}
        isInEvent={listModalities.desafioNba}
      />
      <ModalityIconCalendar
        sport={modalities.eSports}
        isInEvent={listModalities.eSports}
      />
      <ModalityIconCalendar
        sport={modalities.futebolFreestyle}
        isInEvent={listModalities.futebolFreestyle}
      />
      <ModalityIconCalendar
        sport={modalities.futebolMesa}
        isInEvent={listModalities.futebolMesa}
      />
      <ModalityIconCalendar
        sport={modalities.futevolei}
        isInEvent={listModalities.futevolei}
      />
      <ModalityIconCalendar
        sport={modalities.peteca}
        isInEvent={listModalities.peteca}
      />
      <ModalityIconCalendar
        sport={modalities.sinuca}
        isInEvent={listModalities.sinuca}
      />
      <ModalityIconCalendar
        sport={modalities.slackLine}
        isInEvent={listModalities.slackLine}
      />
      <ModalityIconCalendar
        sport={modalities.taekwondo}
        isInEvent={listModalities.taekwondo}
      />
      <ModalityIconCalendar
        sport={modalities.tenisCampo}
        isInEvent={listModalities.tenisCampo}
      />
      <ModalityIconCalendar
        sport={modalities.tenisMesa}
        isInEvent={listModalities.tenisMesa}
      />
      <ModalityIconCalendar
        sport={modalities.voleiDupla}
        isInEvent={listModalities.voleiDupla}
      />
      <ModalityIconCalendar
        sport={modalities.xadrez}
        isInEvent={listModalities.xadrez}
      />
    </Grid>
  )
}

export default StagesCalendar
