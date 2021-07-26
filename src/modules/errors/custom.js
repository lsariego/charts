/**
 * The custom error implementation.
 */
class CustomError {
  constructor({ code = null, reason = null, originalError }) {
    this.code = code || originalError.response?.status || null
    this.name = 'CustomError'
    this.reason = reason || originalError.message || null
    this.originalError = originalError
  }

  toJSON() {
    return JSON.stringify(this.toObject())
  }

  toObject() {
    return {
      code: this.code,
      name: this.name,
      reason: this.reason,
      originalError: this.originalError
    }
  }
}

/**
 * To create a custom error.
 */
export const customError = (originalError, code, reason) => {
  return new CustomError({ code, reason, originalError })
}
