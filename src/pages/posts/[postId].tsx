import React from 'react'

import { useRouter } from 'next/router'
import SimplePage from '../../components/templates/simplePage'
import { Head } from 'next/document'
import Title from '../../components/atoms/title'
import { NewsProps } from '../../types/types'

type Props = {
  noticia: NewsProps
}

const NewsPost = ({
  noticia
}: Props) => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <React.Fragment>

      <Head>
        <title>Circuito Cidades</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SimplePage>
    
        {/* <Title label={}/>
        <Post /> */}
    
      </SimplePage>

    </React.Fragment>
  )
}

export default NewsPost