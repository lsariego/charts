import React from 'react'
import PropTypes from 'prop-types'
import {
  BaseInput,
  BaseSelect,
  DropDown,
  DropDownIcon,
  ItemCheckBox,
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
  const {
    disabled,
    error,
    multiple,
    label,
    margin,
    maxWidth,
    options,
    padding,
    placeholder,
    required,
    value,
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
    <Root margin={margin} padding={padding}>
      {label && (
        <Label>
          {`${label} `}
          {required && <RequiredIcon className="fas fa-asterisk" />}
        </Label>
      )}
      <Wrapper>
        <BaseSelect
          multiple={multiple}
          disabled={disabled}
          error={Boolean(error)}
          renderValue={multiple ? selected => selected.join(', ') : null}
          IconComponent={() => (
            <DropDown>
              <DropDownIcon color="disabled" fontSize="small" />
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
              {multiple ? <ItemCheckBox color="primary" checked={value.indexOf(option.value) > -1} /> : null}
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
  multiple: false,
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
  multiple: PropTypes.bool,
  label: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
    })
  ).isRequired,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]).isRequired,
  onChange: PropTypes.func
}

export default Select
