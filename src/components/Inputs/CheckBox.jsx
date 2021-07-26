import React from 'react'
import PropTypes from 'prop-types'
import { BaseCheckBox, Item } from './CheckBox.styles'

export { default as useCheckBox } from './CheckBox.hook'

/**
 * The CheckBox's component.
 */
const CheckBox = props => {
  const { accessibility, checked, disabled, label, name, onChange } = props

  return (
    <Item
      control={
        <BaseCheckBox
          checked={checked}
          color="primary"
          disabled={disabled}
          disableRipple
          inputProps={{ 'aria-label': accessibility.label }}
          name={name}
          size="small"
          onChange={onChange}
        />
      }
      disabled={disabled}
      label={label}
    />
  )
}

CheckBox.defaultProps = {
  accessibility: {
    label: 'checkbox'
  },
  checked: false,
  disabled: false,
  name: '',
  onChange: () => undefined
}
CheckBox.propTypes = {
  /**
   * Accessibility.
   */
  accessibility: PropTypes.shape({
    label: PropTypes.string
  }),
  /**
   * Checked.
   */
  checked: PropTypes.bool,
  /**
   * Disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Label.
   */
  label: PropTypes.string,
  /**
   * Name.
   */
  name: PropTypes.string,
  /**
   * On change.
   */
  onChange: PropTypes.func
}

export default CheckBox
