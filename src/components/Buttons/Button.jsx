import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { ContainedButton, Loading, LoadingIcon, OutlinedButton, TextButton } from './Button.styles'

/**
 * The Button's component.
 */
const Button = props => {
  const { children, color, component, disabled, loading, margin, size, type, variant, width, onClick } = props
  const BaseButton = useMemo(() => {
    if (variant === 'outlined') {
      return OutlinedButton
    } else if (variant === 'text') {
      return TextButton
    }
    return ContainedButton
  }, [variant])

  return (
    <BaseButton
      color={color}
      component={component}
      disabled={disabled}
      margin={margin}
      size={size}
      type={type}
      variant={variant}
      width={width}
      onClick={onClick}
    >
      {loading ? (
        <Loading>
          <LoadingIcon size={22} />
        </Loading>
      ) : (
        children
      )}
    </BaseButton>
  )
}

Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  loading: false,
  size: 'medium',
  type: 'button',
  variant: 'contained',
  width: 'initial',
  onClick: () => undefined
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error', 'warning', 'info']),
  component: PropTypes.oneOf(['button', 'label']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func
}

export default Button
