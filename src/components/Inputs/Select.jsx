import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from './../Placeholders/Skeleton'
import {
  BaseInput,
  BaseSelect,
  BottomMessage,
  DropDown,
  DropDownIcon,
  Error,
  Info,
  Label,
  Option,
  OptionContent,
  Placeholder,
  Required,
  Root,
  Wrapper
} from './Select.styles'

/**
 * The Select' component.
 */
const Select = props => {
  const {
    disabled,
    error,
    info,
    label,
    loading,
    margin,
    maxWidth,
    options,
    padding,
    placeholder,
    required,
    textAlign,
    value,
    width,
    onChange
  } = props
  const handleBlur = event => {
    if (event.target.value || event.target.value === 0) {
      return
    }

    onChange({ type: 'blur' })
  }
  const handleClick = event => event.stopPropagation()
  const showPlaceholder = placeholder !== '' && !value && value !== 0

  return (
    <Root margin={margin} padding={padding} width={width}>
      {label && (
        <Label>
          {`${label} `}
          {required && <Required />}
        </Label>
      )}
      <Wrapper>
        {loading && <Skeleton variant="rect" height={38} />}
        {!loading && (
          <BaseSelect
            disabled={disabled}
            error={Boolean(error)}
            IconComponent={() => (
              <DropDown>
                <DropDownIcon error={error === '' ? 0 : 1} />
              </DropDown>
            )}
            input={<BaseInput />}
            maxWidth={maxWidth}
            MenuProps={{
              anchorOrigin: { horizontal: 'left', vertical: 42 },
              anchorReference: 'anchorEl',
              getContentAnchorEl: null
            }}
            textAlign={textAlign}
            value={value}
            onBlur={handleBlur}
            onChange={onChange}
            onClick={handleClick}
          >
            {options.map(option => (
              <Option disableGutters key={option.value} value={option.value}>
                <OptionContent title={option.name}>{option.name}</OptionContent>
              </Option>
            ))}
          </BaseSelect>
        )}
        {!loading && showPlaceholder && <Placeholder textAlign={textAlign}>{placeholder}</Placeholder>}
      </Wrapper>
      <BottomMessage>
        {!error && <Info>{info}</Info>}
        {error && <Error>{error}</Error>}
      </BottomMessage>
    </Root>
  )
}

Select.defaultProps = {
  disabled: false,
  error: '',
  info: '',
  label: '',
  loading: false,
  margin: 0,
  maxWidth: 'initial',
  padding: 0,
  placeholder: 'Seleccione...',
  required: false,
  textAlign: 'initial',
  type: 'text',
  onChange: () => undefined
}
Select.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  info: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ).isRequired,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  textAlign: PropTypes.oneOf(['center', 'end', 'initial', 'start']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
}

export default Select
