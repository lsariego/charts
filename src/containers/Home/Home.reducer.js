// FIXME: This file is just an example, you can take it as reference to make your own.

import { HIDE_GUEST_FORM_SUCCESS, SHOW_GUEST_FORM_SUCCESS } from './Home.actions'

const homeState = {
  showForm: true
}

/**
 * The Home's reducer.
 */
const homeReducer = (state = homeState, { type }) => {
  switch (type) {
    case HIDE_GUEST_FORM_SUCCESS: {
      return { ...state, showForm: false }
    }
    case SHOW_GUEST_FORM_SUCCESS: {
      return { ...state, showForm: true }
    }
    default: {
      return state
    }
  }
}

export default homeReducer
