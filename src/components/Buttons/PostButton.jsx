import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { Root } from './PostButton.styles'

/**
 * The PostButton's component.
 */
const PostButton = props => {
  const { children, color, disabled, margin, params, size, to, variant, width } = props

  return (
    <Root action={to} method="post" target="_top">
      {params.map((param, index) => (
        <input key={`${param.name}-${param.value}-${index}`} name={param.name} type="hidden" value={param.value} />
      ))}
      <Button
        color={color}
        disabled={disabled}
        margin={margin}
        size={size}
        type="submit"
        variant={variant}
        width={width}
      >
        {children}
      </Button>
    </Root>
  )
}

PostButton.defaultProps = {
  color: 'default',
  disabled: false,
  params: [],
  size: 'medium',
  variant: 'contained',
  width: 'initial'
}
PostButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error', 'warning', 'info']),
  disabled: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  params: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]).isRequired
    })
  ),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default PostButton
