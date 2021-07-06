// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import PropTypes from 'prop-types'
import { BaseInput, Error, Label, RequiredIcon, Root } from './Input.styles'

/**
 * The Input's component.
 */
const Input = props => {
  const { autoFocus, disabled, error, label, margin, padding, placeholder, required, type, value, onChange } = props
  const handleBlur = () => {
    if (value) {
      return
    }

    onChange({ type: 'blur' })
  }

  return (
    <Root margin={margin} padding={padding}>
      {label && (
        <Label>
          {`${label} `}
          {required && <RequiredIcon className="fas fa-asterisk" />}
        </Label>
      )}
      <BaseInput
        autoFocus={autoFocus}
        disabled={disabled}
        error={Boolean(error)}
        placeholder={placeholder}
        type={type}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
      />
      <Error>{error}</Error>
    </Root>
  )
}

Input.defaultProps = {
  autoFocus: false,
  disabled: false,
  error: '',
  label: '',
  margin: 0,
  padding: 0,
  placeholder: '',
  required: false,
  type: 'text',
  onChange: () => undefined
}
Input.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'number', 'text']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func
}

export default Input
