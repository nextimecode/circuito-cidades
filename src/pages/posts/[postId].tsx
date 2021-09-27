import React from 'react'

import { useRouter } from 'next/router'

import { NOTICIAS } from '../../pages/api/noticias'
import TemplatePost from '../../components/templates/templatePost'
import { NoticiaProps } from '../../types/types'

const NewsPost = () => {
  const router = useRouter()
  const { postId } = router.query

  let noticiaPost = NOTICIAS.map((noticia) => (
    (noticia.noticia.id === postId) ? noticia.noticia : undefined
  ))

  return (
    <TemplatePost noticia={noticiaPost} />
  )
}

export default NewsPost
