import React from 'react'

import Head from 'next/head'
import SimplePage from '../components/templates/simplePage'
import UltimasNoticias from '../components/organisms/utimasNoticias'
import Hero from '../components/organisms/hero'
import Section from '../components/templates/section'

const HERO = [
  {
    evento: {
      eventName: 'Desafio das Individuais',
      date: '31 de março',
      stage: '1ª Etapa',
      place: 'Nova União',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      imgUrl: '/images/heroImg.jpg'
    }
  },
  {
    evento: {
      eventName: 'Evento 2',
      date: '31 de fevereiro',
      stage: '2ª Etapa',
      place: 'BH',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      imgUrl: '/images/noticia.png'
    }
  },
  {
    evento: {
      eventName: 'Evento 3',
      date: '31 de março',
      stage: '3ª Etapa',
      place: 'Cazaquistão',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      imgUrl: '/images/heroImg.jpg'
    }
  }
]

const NOTICIAS = [
  {
    noticia: {
      date: '31 de Maio',
      content: {
        title: 'Título da notícia',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        imgUrl: '/images/noticia.png'
      }
    }
  },
  {
    noticia: {
      date: '1 de janeiro',
      content: {
        title: 'Título da notícia',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        imgUrl: '/images/noticia.png'
      }
    }
  },
  {
    noticia: {
      date: '31 de fevereiro',
      content: {
        title: 'Título da notícia',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        imgUrl: '/images/noticia.png'
      }
    }
  },
  {
    noticia: {
      date: '31 de julho',
      content: {
        title: 'Título da notícia',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        imgUrl: '/images/noticia.png'
      }
    }
  },
  {
    noticia: {
      date: '31 de novembro',
      content: {
        title: 'Título da notícia',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        imgUrl: '/images/noticia.png'
      }
    }
  },
  {
    noticia: {
      date: '31 de dezembro',
      content: {
        title: 'Título da notícia',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        imgUrl: '/images/noticia.png'
      }
    }
  }
]

const Home = () => {
  return (
    <div>
      <Head>
        <title>Circuito Cidades</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SimplePage>

        <Section>
          <Hero hero={HERO}/>
        </Section>

        <Section bg={'gray-50'} title="Últimas Notícias">
          <UltimasNoticias noticias={NOTICIAS}/>
        </Section>

      </SimplePage>
    </div>
  )
}

export default Home
