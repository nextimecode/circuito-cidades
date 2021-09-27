import React from 'react'
import Layout from '../layout/'
import Section from '../../templates/section'
import { NoticiaProps } from '../../../types/types'
import Post from '../../organisms/post'

type TemplatePostProps = {
  noticia: NoticiaProps | undefined
}

const TemplatePost = ({
  noticia
}: TemplatePostProps) => {
  return (
    <Layout>
      {(noticia === undefined) &&
          <p>Notícia não encontrada.</p>
      }
      {(noticia !== undefined) &&
          <Section>
            <Post noticia={noticia}/>
          </Section>
      }
    </Layout>
  )
}

export default TemplatePost
