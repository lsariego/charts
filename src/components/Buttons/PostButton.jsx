// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { Root } from './PostButton.styles'

/**
 * The PostButton's component.
 */
const PostButton = props => {
  const { children, disabled, params, reverse, size, to, variant, width } = props

  return (
    <Root action={to} method="post" target="_top">
      {params.map((param, index) => (
        <input key={`${param.name}-${param.value}-${index}`} name={param.name} type="hidden" value={param.value} />
      ))}
      <Button disabled={disabled} reverse={reverse} size={size} type="submit" variant={variant} width={width}>
        {children}
      </Button>
    </Root>
  )
}

PostButton.defaultProps = {
  disabled: false,
  params: [],
  reverse: false,
  size: 'lg',
  variant: 'default',
  width: 'initial'
}
PostButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  params: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]).isRequired
    })
  ),
  reverse: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default PostButton
