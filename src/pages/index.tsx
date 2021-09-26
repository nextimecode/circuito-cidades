import React from 'react'
import TemplateHome from '../components/templates/templateHome'

const itemsHero = [
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

const noticias = [
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
    <>
      <TemplateHome itemsHero={itemsHero} noticias={noticias} />
    </>
  )
}

export default Home
