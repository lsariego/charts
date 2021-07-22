import { combineReducers } from 'redux'
import headerReducer from '../../containers/Header/Header.reducer'
import homeReducer from '../../containers/Home/Home.reducer'
import TradedAmountReducer from '../../containers/BuyersProfile/TradedAmounts.reducer'

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  tradedAmount: TradedAmountReducer
})
