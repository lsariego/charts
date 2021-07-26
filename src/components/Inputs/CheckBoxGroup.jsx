import React from 'react'
import PropTypes from 'prop-types'
import { Root, Label, Required, Group, Error } from './CheckBox.styles'

/**
 * The CheckBoxGroup's component.
 */
const CheckBoxGroup = props => {
  const { children, direction, error, label, margin, padding, required } = props

  return (
    <Root margin={margin} padding={padding}>
      {label && (
        <Label>
          {label}
          {required && <Required />}
        </Label>
      )}
      <Group direction={direction}>{children}</Group>
      <Error>{error}</Error>
    </Root>
  )
}

CheckBoxGroup.defaultProps = {
  disabled: false,
  direction: 'vertical',
  error: '',
  label: '',
  loading: false,
  margin: 0,
  padding: 0,
  required: false,
  onChange: () => undefined
}

CheckBoxGroup.propTypes = {
  /**
   * Children.
   */
  children: PropTypes.node.isRequired,
  /**
   * Direction.
   */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Error.
   */
  error: PropTypes.string,
  /**
   * Label.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Margin.
   */
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Padding.
   */
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Required.
   */
  required: PropTypes.bool
}

export default CheckBoxGroup
