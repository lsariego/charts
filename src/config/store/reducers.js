import { combineReducers } from 'redux'
import headerReducer from '../../containers/Header/Header.reducer'
import homeReducer from '../../containers/Home/Home.reducer'
import mainInfoReducer from '../../containers/MainInfo/MainInfo.reducer'
import tradedAmountReducer from '../../containers/TradedAmounts/TradedAmounts.reducer'
import buyingModalitiesReducer from '../../containers/BuyingModalities/BuyingModalities.reducer'
import biddingsDistributionReducer from '../../containers/BiddingsDistribution/BiddingsDistribution.reducer'

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  mainInfo: mainInfoReducer,
  tradedAmount: tradedAmountReducer,
  buyingModalities: buyingModalitiesReducer,
  biddingsDistribution: biddingsDistributionReducer
})
