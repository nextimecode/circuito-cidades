import React from 'react'
import TemplateHome from '../components/templates/templateHome'

import { NOTICIAS } from '../pages/api/noticias'
import { ITEMS_HERO } from '../pages/api/itemsHero'

const Home = () => {
  return (
    <>
      <TemplateHome itemsHero={ITEMS_HERO} noticias={NOTICIAS} />
    </>
  )
}

export default Home
