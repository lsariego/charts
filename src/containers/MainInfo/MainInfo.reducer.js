import { MAININFO, MAININFO_SUCCESS, MAININFO_ERROR } from './MainInfo.actions'

const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  error: null
}

/**
 * MainInfo's reducer.
 */
const mainInfoReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case MAININFO: {
      return { ...state, fetching: true }
    }
    case MAININFO_SUCCESS: {
      return { ...state, data: payload, fetching: false, fetched: true }
    }
    case MAININFO_ERROR: {
      return { ...state, error: payload.error }
    }
    default: {
      return state
    }
  }
}

export default mainInfoReducer
