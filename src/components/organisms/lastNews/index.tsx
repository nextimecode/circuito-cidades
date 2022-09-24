import React from 'react'

import { Grid } from '@chakra-ui/layout'
import Noticia from '../../molecules/noticia'
// import SeeMore from '../../atoms/seeMore'
import { NewsProps } from '../../../types/types'

type Props = {
  newsSet: Record<string, NewsProps>[]
}

const LastNews = ({ newsSet }: Props) => {
  return (
    <React.Fragment>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        templateRows={['repeat(1, 1fr)']}
        px={[4]}
      >
        {newsSet.map((news, index) => (
          <Noticia key={index} news={news.news} />
        ))}
      </Grid>

      {/* <SeeMore label='Ver todas as notícias'/> */}
    </React.Fragment>
  )
}

export default LastNews
