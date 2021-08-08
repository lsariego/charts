import { BUYINGMODALITIES, BUYINGMODALITIES_SUCCESS, BUYINGMODALITIES_ERROR } from './BuyingModalities.actions'

const initialState = {
  data: { chartStructure: {}, csvStructure: [] },
  fetching: false,
  fetched: false,
  error: null
}

/**
 * Buying Modalities reducer.
 */
const buyingModalitiesReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case BUYINGMODALITIES: {
      return { ...state, fetching: true }
    }
    case BUYINGMODALITIES_SUCCESS: {
      return { ...state, data: payload, fetching: false, fetched: true }
    }
    case BUYINGMODALITIES_ERROR: {
      return { ...state, error: payload.error }
    }
    default: {
      return state
    }
  }
}

export default buyingModalitiesReducer
