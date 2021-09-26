import React from 'react'

import { Grid } from '@chakra-ui/layout'
import Title from '../../atoms/title'
import Noticia from '../../molecules/noticia'
import Section from '../../templates/section'
import SeeMore from '../../atoms/seeMore'

const NOTICIAS = [
  {
    noticia: {
      newsDate: '31 de Maio',
      newsTitle: 'Título da notícia',
      newsContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      newsImage: '/images/noticia.png'
    }
  },
  {
    noticia: {
      newsDate: '1 de janeiro',
      newsTitle: 'Título da notícia',
      newsContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      newsImage: '/images/noticia.png'
    }
  },
  {
    noticia: {
      newsDate: '31 de fevereiro',
      newsTitle: 'Título da notícia',
      newsContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      newsImage: '/images/noticia.png'
    }
  },
  {
    noticia: {
      newsDate: '31 de julho',
      newsTitle: 'Título da notícia',
      newsContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      newsImage: '/images/noticia.png'
    }
  },
  {
    noticia: {
      newsDate: '31 de novembro',
      newsTitle: 'Título da notícia',
      newsContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      newsImage: '/images/noticia.png'
    }
  },
  {
    noticia: {
      newsDate: '31 de dezembro',
      newsTitle: 'Título da notícia',
      newsContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      newsImage: '/images/noticia.png'
    }
  }
]

const UltimasNoticias = () => {
  return (
    <Section bg={'gray-50'}>
      <Title label='Últimas Notícias'/>

      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        templateRows={['repeat(1, 1fr)']}
      >
        {NOTICIAS.map((n, k) => (
          <Noticia
            key={k}
            newsDate={n.noticia.newsDate}
            newsTitle={n.noticia.newsTitle}
            newsContent={n.noticia.newsContent}
            newsImage={n.noticia.newsImage}
          />
        ))}
      </Grid>

      <SeeMore label='Ver todas as notícias'/>
    </Section>
  )
}

export default UltimasNoticias
