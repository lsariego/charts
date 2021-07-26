import { combineReducers } from 'redux'
import headerReducer from '../../containers/Header/Header.reducer'
import homeReducer from '../../containers/Home/Home.reducer'
import tradedAmountReducer from '../../containers/TradedAmounts/TradedAmounts.reducer'

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  tradedAmount: tradedAmountReducer
})
