import Axios from 'axios'
import AxiosRetry from 'axios-retry'
import Logger from '../debuggers/logger'
import { getFromCookie } from '../storages/cookies'
import cancellationSingleton from './cancellation'

const logger = Logger.getLogger('Requests')

/**
 * To generate the request's headers.
 */
const generateHeaders = (isPublic, contentType) => {
  let headers = {}

  if (contentType) {
    headers = { 'Content-Type': contentType }
  }

  if (isPublic) {
    return headers
  }

  const token = getFromCookie('access_token') || window.sessionStorage.getItem('access_token') || ''

  return { ...headers, Authorization: `Bearer ${token}` }
}

/**
 * Factory to create requests caller.
 *
 * Generate a caller with the following signature:
 *
 *  interface RequestCallerOptions {
 *    isPublic?: boolean;
 *    retries?: number;
 *    [key: string]: any;
 *  }
 *  interface RequestCallerResponse {
 *    data: object;
 *    headers: object;
 *    request: object;
 *    status: number;
 *  }
 *
 *  type RequestCaller = (url: string, options: RequestCallerOptions) => Promise<RequestCallerResponse>
 *
 * E.g.
 *
 *  getJsonRequest('https://api.example.com/auth', { isPublic: true, retries: 2 })
 */
const factoryRequest = callback => {
  const cancellation = cancellationSingleton()
  const getActionType = () => new Promise(resolve => cancellation.on(actionType => resolve(actionType)))
  const registerCanceller = (actionType, canceller) => cancellation.registerCanceller(actionType, canceller)
  const unregisterCanceller = actionType => cancellation.unregisterCanceller(actionType)

  return (url, options = {}) => callback(url, options, { getActionType, registerCanceller, unregisterCanceller })
}

/**
 * To make request using the Axios API.
 */
const makeRequest = async (url, options, config) => {
  const actionType = await config.getActionType()
  const request = Axios.create({ url })

  AxiosRetry(request, { retries: config.retries || 0 })

  const response = await request({
    ...options,
    cancelToken: new Axios.CancelToken(canceller => config.registerCanceller(actionType, canceller))
  })

  config.unregisterCanceller(actionType)

  return {
    data: response.data,
    headers: response.headers,
    request: response.config,
    status: response.status
  }
}

/**
 * To do a DELETE request with JSON as content type.
 */
export const deleteJsonRequest = factoryRequest((url, options, config) => {
  const { body, isPublic = false, retries } = options
  const headers = generateHeaders(isPublic || false, 'application/json')
  const data = body && JSON.stringify(body)

  return makeRequest(url, { data, headers, method: 'DELETE' }, { ...config, retries }).then(response => {
    logger.debug('DELETE JSON request', { data, headers, options, response, url })

    return response
  })
})

/**
 * To do a GET request with JSON as content type.
 */
export const getJsonRequest = factoryRequest((url, options, config) => {
  const { isPublic, retries } = options
  const headers = generateHeaders(isPublic || false, 'application/json')

  return makeRequest(url, { headers, method: 'GET' }, { ...config, retries }).then(response => {
    logger.debug('GET JSON request', { headers, options, response, url })

    return response
  })
})

/**
 * To do a PATCH request with JSON as content type.
 */
export const patchJsonRequest = factoryRequest((url, options, config) => {
  const { body, isPublic = false, retries } = options
  const headers = generateHeaders(isPublic || false, 'application/json')
  const data = body && JSON.stringify(body)

  return makeRequest(url, { data, headers, method: 'PATCH' }, { ...config, retries }).then(response => {
    logger.debug('PATCH JSON request', { data, headers, response, url })

    return response
  })
})

/**
 * To do a POST request with form data as content type.
 */
export const postFormRequest = factoryRequest((url, options, config) => {
  const { body, isPublic = false, retries } = options
  const headers = generateHeaders(isPublic || false)
  const formData = new FormData()

  Object.keys(body).forEach(key => {
    if (!Array.isArray(body[key])) {
      formData.append(key, body[key])

      return
    }

    body[key].forEach(item => formData.append(key, item))
  })

  return makeRequest(url, { headers, data: formData, method: 'POST' }, { ...config, retries }).then(response => {
    logger.debug('POST FORM request', { headers, options, response, url })

    return response
  })
})

/**
 * To do a POST request with JSON as content type.
 */
export const postJsonRequest = factoryRequest((url, options, config) => {
  const { body, isPublic = false, retries } = options
  const headers = generateHeaders(isPublic, 'application/json')
  const data = body && JSON.stringify(body)

  return makeRequest(url, { data, headers, method: 'POST' }, { ...config, retries }).then(response => {
    logger.debug('POST JSON request', { data, headers, options, response, url })

    return response
  })
})

/**
 * To do a PUT request with JSON as content type.
 */
export const putJsonRequest = factoryRequest((url, options, config) => {
  const { body, isPublic = false, retries } = options
  const headers = generateHeaders(isPublic || false, 'application/json')
  const data = body && JSON.stringify(body)

  return makeRequest(url, { data, headers, method: 'PUT' }, { ...config, retries }).then(response => {
    logger.debug('PUT JSON request', { data, headers, options, response, url })

    return response
  })
})
