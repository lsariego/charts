import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from '../Placeholders/Skeleton'
import { BaseInput, Bottommessage, Counter, Details, Error, Info, Label, Required, Root } from './Input.styles'
export { Prefix as InputPrefix, Suffix as InputSuffix } from './Input.styles'

/**
 * The Input's component.
 */
const Input = props => {
  const {
    autoFocus,
    showCounter,
    disabled,
    error,
    info,
    label,
    loading,
    margin,
    maxLength,
    maxCharactersForCounter,
    padding,
    placeholder,
    prefix,
    required,
    suffix,
    textAlign,
    type,
    value,
    width,
    onChange,
    onPaste
  } = props

  const handleBlur = () => {
    if (value) {
      return
    }

    onChange({ type: 'blur' })
  }

  return (
    <Root margin={margin} padding={padding} width={width}>
      {label && (
        <Label>
          {`${label} `}
          {required && <Required />}
        </Label>
      )}
      {loading && <Skeleton variant="rect" height={38} />}
      {!loading && (
        <BaseInput
          autoFocus={autoFocus}
          disabled={disabled}
          endAdornment={suffix}
          error={Boolean(error)}
          inputProps={{ maxLength }}
          placeholder={placeholder}
          startAdornment={prefix}
          textAlign={textAlign}
          type={type}
          value={value}
          onBlur={handleBlur}
          onChange={onChange}
          onPaste={onPaste}
        />
      )}
      <Details>
        <Bottommessage>
          {!error && <Info>{info}</Info>}
          {error && <Error>{error}</Error>}
        </Bottommessage>
        {showCounter && (
          <Counter>
            {value.length}/{maxCharactersForCounter}
          </Counter>
        )}
      </Details>
    </Root>
  )
}

Input.defaultProps = {
  autoFocus: false,
  showCounter: false,
  disabled: false,
  error: '',
  info: '',
  label: '',
  loading: false,
  margin: 0,
  maxCharactersForCounter: 30,
  padding: 0,
  placeholder: '',
  prefix: null,
  required: false,
  suffix: null,
  textAlign: 'initial',
  type: 'text',
  width: 'initial',
  onChange: () => undefined,
  onPaste: () => undefined
}
Input.propTypes = {
  autoFocus: PropTypes.bool,
  showCounter: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  info: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxCharactersForCounter: PropTypes.number,
  maxLength: PropTypes.number,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
  required: PropTypes.bool,
  suffix: PropTypes.node,
  textAlign: PropTypes.oneOf(['center', 'end', 'initial', 'start']),
  type: PropTypes.oneOf(['email', 'number', 'password', 'text']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onPaste: PropTypes.func
}

export default Input
