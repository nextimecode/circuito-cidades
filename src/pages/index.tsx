import React from 'react'
import TemplateHome from '../components/templates/templateHome'

import { newsItems } from './api/newsItems'
import { heroItems } from './api/heroItems'

const Home = () => {
  return (
    <>
      <TemplateHome itemsHero={heroItems} newsSet={newsItems} />
    </>
  )
}

export default Home
