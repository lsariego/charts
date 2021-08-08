import { useEffect, useMemo, useState } from 'react'

/**
 * To apply a bunch of formatters to the given value.
 */
const makeFormat = (callbacks, value) => callbacks.reduce((updatedValue, callback) => callback(updatedValue), value)

/**
 * To apply a bunch of validators to the given value.
 */
const makeError = (callbacks, value) =>
  callbacks.reduce((message, callback) => {
    if (message !== '') {
      return message
    }

    return callback(value)
  }, '')

/**
 * The Input's custom hook.
 */
export const useInput = ({
  changeCallback = () => undefined,
  errorCallbacks = [],
  formatCallbacks = [],
  initialValue = ''
} = {}) => {
  const [error, setError] = useState('')
  const [value, setValue] = useState(initialValue)
  const handleChange = event => {
    const updatedValue = makeFormat(formatCallbacks, event?.target?.value || '')
    const updatedError = makeError(errorCallbacks, updatedValue)

    setError(updatedError)
    setValue(updatedValue)

    if (updatedValue === value) {
      return
    }

    changeCallback(updatedValue)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return { error, value, onChange: handleChange }
}

/**
 * The Select' custom hook.
 */
export const useSelect = ({
  changeCallback = () => undefined,
  errorCallbacks = [],
  errorMessage = '',
  initialValue = ''
} = {}) => {
  const [value, setValue] = useState(initialValue)
  const [multipleValue, setMultipleValue] = useState(initialValue)
  const [count, setCount] = useState(0)
  const handleChange = event => {
    if (event.type === 'blur') {
      return setCount(count + 1)
    }
    setValue(event?.target?.value)
    changeCallback(event?.target?.value)
  }
  const handleChangeMultiple = event => {
    if (event?.type !== 'blur') {
      if (event.target.value.length < 1 || event.target.value.length > 4) {
        return
      }
      setMultipleValue(event?.target?.value)
      changeCallback(event?.target?.value)
    }
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

  return { error, value, multipleValue, onChange: handleChange, onChangeMultiple: handleChangeMultiple }
}
