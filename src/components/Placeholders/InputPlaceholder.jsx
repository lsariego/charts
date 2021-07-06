// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import PropTypes from 'prop-types'
import Placeholder from './Placeholder'
import { Root } from './InputPlaceholder.styles'

/**
 * The InputPlaceholder's component.
 */
const InputPlaceholder = props => {
  const { margin } = props

  return (
    <Root margin={margin}>
      <Placeholder height="14px" margin="0 0 0.5rem" width="70%" />
      <Placeholder height="38px" margin="0 0 0.5rem" width="100%" />
    </Root>
  )
}

InputPlaceholder.defaultProps = {
  margin: '4px 0 20px'
}
InputPlaceholder.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default InputPlaceholder
