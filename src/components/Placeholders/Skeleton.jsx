import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './Skeleton.styles'

/**
 * The Skeleton' component.
 */
const Skeleton = props => {
  const { children, component, height, margin, padding, variant, width } = props

  return (
    <Root
      animation="pulse"
      component={component}
      height={height}
      margin={margin}
      padding={padding}
      variant={variant}
      width={width}
    >
      {children}
    </Root>
  )
}

Skeleton.defaultProps = {
  margin: 0,
  padding: 0,
  variant: 'text'
}
Skeleton.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(['circle', 'rect', 'text']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Skeleton
