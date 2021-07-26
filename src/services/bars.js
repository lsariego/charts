// FIXME: This file is just an example, you can take it as reference to make your own.

import { REACT_APP_API_BASE_URL } from '../config/settings/environment'
import { deleteJsonRequest, getJsonRequest, postJsonRequest } from '../modules/requests/requests'
import { factoryService } from '../modules/requests/services'

/**
 * Gets the list of bars.
 */
export const getBars = factoryService(() => getJsonRequest(`${REACT_APP_API_BASE_URL}/bars`))

/**
 * Gets the bar by the given identifier.
 */
export const getBarByID = factoryService(({ fooID }) => getJsonRequest(`${REACT_APP_API_BASE_URL}/bars/${fooID}`))

/**
 * Create a new bar.
 */
export const createBar = factoryService(({ firstName, lastName }) =>
  postJsonRequest(`${REACT_APP_API_BASE_URL}/bars`, { firstName, lastName })
)

/**
 * Delete the foo by the given identifier.
 */
export const deleteBar = factoryService(({ fooID }) => deleteJsonRequest(`${REACT_APP_API_BASE_URL}/bars/${fooID}`))
