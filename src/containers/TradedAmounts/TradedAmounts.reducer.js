import { TRADEDAMOUNT_START, TRADEDAMOUNT_SUCCESS, TRADEDAMOUNT_ERROR } from './TradedAmounts.actions'

const initialState = {
  data: { chartStructure: [], csvStructure: [], csvLabels: [] },
  fetching: false,
  fetched: false,
  error: null
}

/**
 * Traded Amount's reducer.
 */
const TradedAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRADEDAMOUNT_START: {
      return { ...state, fetching: true }
    }
    case TRADEDAMOUNT_SUCCESS: {
      return { ...state, data: action.payload, fetching: false, fetched: true }
    }
    case TRADEDAMOUNT_ERROR: {
      return { ...state, error: action.error }
    }
    default: {
      return state
    }
  }
}

export default TradedAmountReducer
