import { useCallback, useEffect, useState } from 'react'

/**
 * The CheckBox's custom hook.
 */
const useCheckBox = ({ initialValue = false, changeCallback = () => undefined } = {}) => {
  const [value, setValue] = useState(initialValue)
  const handleChange = useCallback(
    event => {
      changeCallback(event?.target?.checked, event?.target?.name)
      setValue(event?.target?.checked)
    },
    [changeCallback]
  )

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return { value, setValue, onChange: handleChange }
}

export default useCheckBox
