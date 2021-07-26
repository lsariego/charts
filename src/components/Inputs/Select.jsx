import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from './CheckBox'
import Skeleton from './../Placeholders/Skeleton'
import {
  BaseInput,
  BaseSelect,
  Bottommessage,
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
    multiple,
    label,
    margin,
    maxWidth,
    options,
    info,
    loading,
    width,
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
                {multiple ? (
                  <Checkbox label={option.name} checked={value.indexOf(option.value) > -1} />
                ) : (
                  <OptionContent title={option.name}>{option.name}</OptionContent>
                )}
              </Option>
            ))}
          </BaseSelect>
        )}
        {showPlaceholder && <Placeholder>{placeholder}</Placeholder>}
      </Wrapper>
      <Bottommessage>
        {!error && <Info>{info}</Info>}
        {error && <Error>{error}</Error>}
      </Bottommessage>
    </Root>
  )
}

Select.defaultProps = {
  disabled: false,
  error: '',
  multiple: false,
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
  multiple: PropTypes.bool,
  label: PropTypes.string,
  loading: PropTypes.bool,
  info: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ).isRequired,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) }))
  ]).isRequired,
  onChange: PropTypes.func
}

export default Select
