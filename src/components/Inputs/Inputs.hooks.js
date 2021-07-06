// FIXME: This file is just an example, you can take it as reference to make your own.

import { useMemo, useState } from 'react'

/**
 * The Input's custom hook.
 */
export const useInput = ({ errorCallbacks = [], errorMessage = '', initialValue = '' }) => {
  const [value, setValue] = useState(initialValue)
  const [count, setCount] = useState(0)
  const handleChange = event => {
    if (event.type === 'blur') {
      return setCount(count + 1)
    }

    setValue(event?.target?.value)
  }
  const error = useMemo(() => {
    if (errorMessage !== '') {
      return errorMessage
    }

    if (count === 0) {
      return ''
    }

    return errorCallbacks.reduce((message, callback) => {
      if (message !== '') {
        return message
      }

      return callback(value)
    }, '')
  }, [count, value])

  return { error, value, onChange: handleChange }
}

/**
 * The Select' custom hook.
 */
export const useSelect = ({ errorCallbacks = [], errorMessage = '', initialValue = '' }) => {
  const [value, setValue] = useState(initialValue)
  const [count, setCount] = useState(0)
  const handleChange = event => {
    if (event.type === 'blur') {
      return setCount(count + 1)
    }

    setValue(event?.target?.value)
  }
  const error = useMemo(() => {
    if (errorMessage !== '') {
      return errorMessage
    }

    if (count === 0) {
      return ''
    }

    return errorCallbacks.reduce((message, callback) => {
      if (message !== '') {
        return message
      }

      return callback(value)
    }, '')
  }, [count, value])

  return { error, value, onChange: handleChange }
}
