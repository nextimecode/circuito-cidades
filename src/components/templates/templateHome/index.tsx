
import React from 'react'
import NavMenu from '../../organisms/navMenu'
import NavigationBars from '../../organisms/navigationBar'
import Footer from '../../molecules/Footer'
import Layout from '../layout/'

const NextTemplateHome = () => {
  return (
    <Layout>
      {/* <NavigationBars>
        <p>teste</p>
      </NavigationBars> */}
      <NavMenu />
      <Footer />
    </Layout>
  )
}

export default NextTemplateHome
