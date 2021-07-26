// FIXME: This file is just an example, you can take it as reference to make your own.

import { makeActionCreator } from '../../config/store/utils'

export const HIDE_GUEST_FORM_SUCCESS = 'HIDE_GUEST_FORM_SUCCESS'
export const SHOW_GUEST_FORM_SUCCESS = 'SHOW_GUEST_FORM_SUCCESS'
export const onHideGuestFormSuccess = makeActionCreator(HIDE_GUEST_FORM_SUCCESS)
export const onShowGuestFormSuccess = makeActionCreator(SHOW_GUEST_FORM_SUCCESS)
