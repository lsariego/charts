import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { ContainedButton, Loading, LoadingIcon, OutlinedButton, TextButton } from './LinkButton.styles'

/**
 * The Link Button's component.
 */
const LinkButton = props => {
  const { children, color, disabled, loading, margin, replace, size, to, variant, width } = props
  const BaseLinkButton = useMemo(() => {
    if (variant === 'outlined') {
      return OutlinedButton
    } else if (variant === 'text') {
      return TextButton
    }
    return ContainedButton
  }, [variant])

  return (
    <BaseLinkButton
      color={color}
      disabled={disabled}
      margin={margin}
      size={size}
      replace={replace}
      to={to}
      variant={variant}
      width={width}
    >
      {loading ? (
        <Loading>
          <LoadingIcon size={22} />
        </Loading>
      ) : (
        children
      )}
    </BaseLinkButton>
  )
}

/**
 * The to property is based on the API Link documentation from react-router-dom.
 * For further information see this https://reactrouter.com/web/api/Link.
 * When replace is true, clicking the link will replace the current entry in the
 * history stack instead of adding a new one.
 */
LinkButton.defaultProps = {
  color: 'default',
  disabled: false,
  loading: false,
  replace: false,
  size: 'medium',
  to: '',
  variant: 'contained',
  width: 'initial'
}
LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error', 'warning', 'info', 'dark']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  replace: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.object
    })
  ]).isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default LinkButton
