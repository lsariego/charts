import React from 'react'
import { BoxWrapper } from './BuyersProfile.styles'
// Containers
import MainInfo from '../containers/MainInfo/MainInfo.container'
import TradedAmounts from '../containers/TradedAmounts/TradedAmounts.container'
import BuyingModalities from '../containers/BuyingModalities/BuyingModalities.container'
import BiddingsDistribution from '../containers/BiddingsDistribution/BiddingsDistribution.container'

const BuyersProfilePage = () => {
  return (
    <>
      <MainInfo />
      <BoxWrapper mt={2}>
        <TradedAmounts />
      </BoxWrapper>
      <BoxWrapper mt={15}>
        <BuyingModalities />
      </BoxWrapper>
      <BoxWrapper mt={15}>
        <BiddingsDistribution />
      </BoxWrapper>
    </>
  )
}

export default BuyersProfilePage
