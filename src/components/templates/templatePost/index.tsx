import React from 'react'
import Layout from '../layout/'
import Section from '../../templates/section'
import { NewsProps } from '../../../types/types'
import Post from '../../organisms/post'

type TemplatePostProps = {
  news: NewsProps | undefined
}

const TemplatePost = ({ news }: TemplatePostProps) => {
  return (
    <Layout>
      {news === undefined && <p>Notícia não encontrada.</p>}
      {news !== undefined && (
        <Section>
          <Post news={news} />
        </Section>
      )}
    </Layout>
  )
}

export default TemplatePost
