// FIXME: This file is just an example, you can take it as reference to make your own.

import { UPDATE_GUEST_SUCCESS } from './Header.actions'

const headerState = {
  guest: ''
}

/**
 * The Header's reducer.
 */
const headerReducer = (state = headerState, { payload, type }) => {
  switch (type) {
    case UPDATE_GUEST_SUCCESS: {
      return { ...state, guest: payload.guest }
    }
    default: {
      return state
    }
  }
}

export default headerReducer
