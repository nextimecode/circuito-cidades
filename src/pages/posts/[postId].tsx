import React from 'react'

import { useRouter } from 'next/router'

import { NOTICIAS } from '../../pages/api/noticias'
import TemplatePost from '../../components/templates/templatePost'

const NewsPost = () => {
  const router = useRouter()
  const { postId } = router.query

  let noticiaPost = NOTICIAS.find((noticia) => noticia.noticia.id === postId)?.noticia

  return (
    <TemplatePost noticia={noticiaPost} />
  )
}

export default NewsPost
