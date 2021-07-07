import Cookie from 'js-cookie'
import Logger from '../debuggers/logger'

const logger = Logger.getLogger('Cookies')

/**
 * To get a value from cookie.
 */
export const getFromCookie = key => {
  try {
    return Cookie.get(key)
  } catch (error) {
    logger.warn(`Unable to get data from cookie ${key}`, error)
  }
}

/**
 * To put a value into cookie.
 */
export const putIntoCookie = (key, value, customOptions = {}) => {
  const options = { ...customOptions, path: '/' }

  try {
    Cookie.set(key, value, options)
  } catch (error) {
    logger.warn(`Unable to put data into cookie ${key}`, error)
  }
}

/**
 * To remove a cookie.
 */
export const removeCookie = key => {
  try {
    Cookie.remove(key)
  } catch (error) {
    logger.warn(`Unable to remove cookie ${key}`, error)
  }
}
