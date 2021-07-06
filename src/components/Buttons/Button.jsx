// FIXME: This file is just an example, you can take it as reference to make your own.

import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { DefaultButton, Loading, LoadingIcon, PrimaryButton, SecondaryButton } from './Button.styles'

/**
 * The Button's component.
 */
const Button = props => {
  const { children, disabled, loading, reverse, size, type, variant, width, onClick } = props
  const BaseButton = useMemo(() => {
    if (variant === 'primary') {
      return PrimaryButton
    }

    if (variant === 'secondary') {
      return SecondaryButton
    }

    return DefaultButton
  }, [variant])

  return (
    <BaseButton
      disabled={disabled}
      reverse={reverse ? 1 : 0}
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
  disabled: false,
  loading: false,
  reverse: false,
  size: 'lg',
  type: 'button',
  variant: 'default',
  width: 'initial',
  onClick: () => undefined
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  reverse: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func
}

export default Button
