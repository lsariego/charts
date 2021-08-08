import { BIDDINGSDISTRIBUTION, BIDDINGSDISTRIBUTION_SUCCESS, BIDDINGSDISTRIBUTION_ERROR } from './BiddingsDistribution.actions'

const initialState = {
  data: { chartStructure: [], csvStructure: [] },
  fetching: false,
  fetched: false,
  error: null
}

/**
 * Biddings Distribution's reducer.
 */
const biddingsDistributionReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case BIDDINGSDISTRIBUTION: {
      return { ...state, fetching: true }
    }
    case BIDDINGSDISTRIBUTION_SUCCESS: {
      return { ...state, data: payload, fetching: false, fetched: true }
    }
    case BIDDINGSDISTRIBUTION_ERROR: {
      return { ...state, error: payload.error }
    }
    default: {
      return state
    }
  }
}

export default biddingsDistributionReducer
