// TODO: Homepage component and actions its active for later use (next Sprint) for actual Homepage

import { makeActionCreator } from '../../config/store/utils'

export const HIDE_GUEST_FORM_SUCCESS = 'HIDE_GUEST_FORM_SUCCESS'
export const SHOW_GUEST_FORM_SUCCESS = 'SHOW_GUEST_FORM_SUCCESS'
export const onHideGuestFormSuccess = makeActionCreator(HIDE_GUEST_FORM_SUCCESS)
export const onShowGuestFormSuccess = makeActionCreator(SHOW_GUEST_FORM_SUCCESS)
