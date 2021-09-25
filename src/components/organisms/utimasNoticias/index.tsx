import React from 'react'

import { Grid } from '@chakra-ui/layout'
import Noticia from '../../molecules/noticia'
import Title from '../../atoms/title'
import Section from '../../templates/section'
import SeeMore from '../../atoms/seeMore'
import { NewsProps } from '../../../types/types'

type Props = {
  noticias: Record<string, NewsProps>[]
}

const UltimasNoticias = ({
  noticias
}: Props) => {
  return (
    <React.Fragment>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        templateRows={['repeat(1, 1fr)']}
        px={[4]}
      >
        {noticias.map((n, k) => (
          <Noticia
            key={k}
            newsDate={n.noticia.date}
            newsTitle={n.noticia.content.title}
            newsContent={n.noticia.content.content}
            newsImage={n.noticia.content.imgUrl}
          />
        ))}
      </Grid>

      <SeeMore label='Ver todas as notícias'/>

    </React.Fragment>
  )
}

export default UltimasNoticias
