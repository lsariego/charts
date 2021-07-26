import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { isDevEnv } from '../settings/environment'
import reducers from './reducers'

/**
 * Factory to create a new store instance as a singleton.
 */
const factoryStore = (initialState = {}) => {
  const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 5 })
  const middleware = isDevEnv
    ? composeEnhancers(applyMiddleware(thunkMiddleware))
    : compose(applyMiddleware(thunkMiddleware))
  const store = createStore(reducers, initialState, middleware)

  return () => store
}

/**
 * Gets the current store instance.
 */
const storeSingleton = factoryStore()

export default storeSingleton
