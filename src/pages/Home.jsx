// TODO: Homepage component its active for later use (next Sprint) for actual Homepage

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
