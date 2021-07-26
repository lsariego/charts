// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import BrandLayout from '../components/Layouts/BrandLayout'
import HeaderContainer from '../containers/Header/Header.container'
import HomeContainer from '../containers/Home/Home.container'

/**
 * The Home's page.
 */
const Home = () => {
  return (
    <BrandLayout header={<HeaderContainer />}>
      <HomeContainer />
    </BrandLayout>
  )
}

export default Home
