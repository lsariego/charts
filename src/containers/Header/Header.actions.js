// FIXME: This file is just an example, you can take it as reference to make your own.

import { batch } from 'react-redux'
import { makeActionCreator } from '../../config/store/utils'
import { onHideGuestFormSuccess } from '../Home/Home.actions'

export const UPDATE_GUEST = 'UPDATE_GUEST'
export const UPDATE_GUEST_SUCCESS = 'UPDATE_GUEST_SUCCESS'
export const onUpdateGuestSuccess = makeActionCreator(UPDATE_GUEST_SUCCESS, 'payload')
export const onUpdateGuest = payload => dispatch =>
  batch(() => {
    dispatch(onHideGuestFormSuccess())
    dispatch(onUpdateGuestSuccess(payload))
  })
