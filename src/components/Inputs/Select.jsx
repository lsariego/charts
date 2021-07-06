import React from 'react'
import PropTypes from 'prop-types'
import {
  BaseInput,
  BaseSelect,
  DropDown,
  DropDownIcon,
  Error,
  Label,
  Option,
  OptionContent,
  Placeholder,
  RequiredIcon,
  Root,
  Wrapper
} from './Select.styles'

/**
 * The Select' component.
 */
const Select = props => {
  const { disabled, error, label, margin, maxWidth, options, padding, placeholder, required, value, onChange } = props
  const handleBlur = event => {
    if (event.target.value || event.target.value === 0) {
      return
    }

    onChange({ type: 'blur' })
  }
  const handleClick = event => event.stopPropagation()
  const showPlaceholder = placeholder !== '' && !value && value !== 0

  return (
    <Root margin={margin} padding={padding}>
      {label && (
        <Label>
          {`${label} `}
          {required && <RequiredIcon className="fas fa-asterisk" />}
        </Label>
      )}
      <Wrapper>
        <BaseSelect
          disabled={disabled}
          error={Boolean(error)}
          IconComponent={() => (
            <DropDown>
              <DropDownIcon className="fas fa-chevron-down" error={Boolean(error)} />
            </DropDown>
          )}
          input={<BaseInput />}
          maxWidth={maxWidth}
          MenuProps={{
            anchorOrigin: { horizontal: 'left', vertical: 42 },
            anchorReference: 'anchorEl',
            getContentAnchorEl: null
          }}
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
        {showPlaceholder && <Placeholder>{placeholder}</Placeholder>}
      </Wrapper>
      <Error>{error}</Error>
    </Root>
  )
}

Select.defaultProps = {
  disabled: false,
  error: '',
  label: '',
  margin: 0,
  maxWidth: 'initial',
  padding: 0,
  placeholder: 'Seleccione...',
  required: false,
  type: 'text',
  onChange: () => undefined
}
Select.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func
}

export default Select
