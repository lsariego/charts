/**
 * Abstraction in charge on keep a relationship between actions types and Axios' cancellers.
 * It's useful to cancel requests when dispatching the same action type consecutively.
 */
class Cancellation {
  constructor() {
    this.callbacks = []
    this.cancellers = {}
  }

  emitActionType(actionType = '') {
    const canceller = this.cancellers[actionType]

    if (typeof canceller === 'function') {
      canceller()
    }

    this.callbacks.forEach(callback => callback(actionType))
  }

  off(callback) {
    this.callbacks = this.callbacks.filter(cb => cb !== callback)
  }

  on(callback) {
    this.callbacks.push(callback)
  }

  registerCanceller(actionType, canceller) {
    if (!actionType) {
      return
    }

    this.cancellers = { ...this.cancellers, [actionType]: canceller }
  }

  unregisterCanceller(actionType) {
    this.cancellers = Object.entries(this.cancellers).reduce((cancellers, [key, canceller]) => {
      if (key === actionType) {
        return cancellers
      }

      return { ...cancellers, [key]: canceller }
    }, {})
  }
}

/**
 * Factory to create a Cancellation instance and expose it as a singleton.
 */
const factoryCancellationSingleton = () => {
  const cancellation = new Cancellation()

  return () => cancellation
}

/**
 * To get the Cancellation singleton.
 */
const cancellationSingleton = factoryCancellationSingleton()

export default cancellationSingleton
