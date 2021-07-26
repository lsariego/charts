import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  TextButton,
  OutlinedButton,
  DownloadIcon,
  QuestionIcon,
  ChartIcon,
  BarIcon,
  TableIcon
} from './IconButton.styles'

/**
 * The Icon Button's component.
 */
const IconButton = props => {
  const { children, color, disabled, type, size, variant, margin, width, onClick, singleIcon } = props
  const BaseLinkButton = useMemo(() => {
    if (variant === 'outlined') {
      return OutlinedButton
    }
    return TextButton
  }, [variant])

  return (
    <BaseLinkButton
      color={color}
      disabled={disabled}
      type={type}
      size={size}
      margin={margin}
      variant={variant}
      width={width}
      className={singleIcon ? 'singleBtn' : null}
      onClick={onClick}
    >
      {type === 'download' ? (
        <DownloadIcon />
      ) : type === 'question' ? (
        <QuestionIcon />
      ) : type === 'chart' ? (
        <ChartIcon />
      ) : type === 'toggleChart' ? (
        <BarIcon />
      ) : type === 'toggleTable' ? (
        <TableIcon />
      ) : null}
      {children}
    </BaseLinkButton>
  )
}

/**
 * The to property is based on the API Link documentation from react-router-dom.
 * For further information see this https://reactrouter.com/web/api/Link.
 * When replace is true, clicking the link will replace the current entry in the
 * history stack instead of adding a new one.
 */
IconButton.defaultProps = {
  color: 'default',
  disabled: false,
  singleIcon: false,
  type: 'default',
  size: 'medium',
  variant: 'text',
  width: 'initial',
  onClick: () => undefined
}
IconButton.propTypes = {
  children: PropTypes.node,
  singleIcon: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'download', 'question', 'chart', 'toggleChart', 'toggleTable']),
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error', 'warning', 'info']),
  disabled: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func
}

export default IconButton
