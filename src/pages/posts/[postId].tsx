import React from 'react'

import { useRouter } from 'next/router'

import { newsItems } from '../api/newsItems'
import TemplatePost from '../../components/templates/templatePost'

const NewsPost = () => {
  const router = useRouter()
  const { postId } = router.query

  const newsItem = newsItems.find((news) => news.news.id === postId)?.news

  return (
    <TemplatePost news={newsItem} />
  )
}

export default NewsPost
