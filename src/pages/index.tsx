import React from 'react'
import TemplateHome from '../components/templates/templateHome'
import { useGetHeroItemsQuery } from '../graphql/generated'

const Home = () => {
  const { data } = useGetHeroItemsQuery()
  if (!data || !data.heroItems) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  } else {
    const hero = data?.heroItems[0]
    return <TemplateHome title={hero.title} description={hero.description} slider={hero.slider} />
  }
}

export default Home
