import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Jumbo, Root } from './Typography.styles'

/**
 * The Typography' component.
 */
const Typography = props => {
  const {
    align,
    children,
    color,
    display,
    fontSize,
    fontWeight,
    italic,
    lineHeight,
    margin,
    noWrap,
    padding,
    variant,
    width
  } = props

  const BaseTypography = useMemo(() => {
    if (variant === 'jumbo') {
      return Jumbo
    }
    return Root
  }, [variant])

  return (
    <BaseTypography
      align={align}
      color={color}
      display={display}
      fontSize={fontSize}
      fontWeight={fontWeight}
      italic={italic}
      lineHeight={lineHeight}
      margin={margin}
      noWrap={noWrap}
      padding={padding}
      variant={variant === 'subtitle' ? 'subtitle1' : variant}
      width={width}
    >
      {children}
    </BaseTypography>
  )
}

Typography.defaultProps = {
  align: 'inherit',
  display: 'block',
  fontWeight: 'regular',
  italic: false,
  noWrap: false,
  variant: 'h1'
}
Typography.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'black1',
    'black2',
    'black3',
    'gray1',
    'gray2',
    'gray3',
    'white',
    'primary',
    'success',
    'error',
    'warning'
  ]),
  display: PropTypes.oneOf(['block', 'initial', 'inline']),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOf(['black', 'bold', 'regular', 'light']),
  italic: PropTypes.bool,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  noWrap: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(['jumbo', 'h1', 'h2', 'h3', 'h4', 'body1', 'body2', 'subtitle', 'caption']).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Typography
