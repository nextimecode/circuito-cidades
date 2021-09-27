import React from 'react'

import { Grid } from '@chakra-ui/layout'
import Noticia from '../../molecules/noticia'
import SeeMore from '../../atoms/seeMore'
import { NoticiaProps } from '../../../types/types'

type Props = {
  noticias: Record<string, NoticiaProps>[]
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
        {noticias.map((noticia, index) => (
          <Noticia
            key={index}
            noticia={noticia.noticia}
          />
        ))}
      </Grid>

      <SeeMore label='Ver todas as notícias'/>

    </React.Fragment>
  )
}

export default UltimasNoticias
