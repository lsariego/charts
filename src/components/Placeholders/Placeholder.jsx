// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import PropTypes from 'prop-types'
import { Block, Root } from './Placeholder.styles'

/**
 * The Placeholder's component.
 */
const Placeholder = props => {
  const { height, margin, padding, width } = props

  return (
    <Root height={height} margin={margin} padding={padding} width={width}>
      <Block />
    </Root>
  )
}

Placeholder.defaultProps = {
  margin: 0,
  padding: 0,
  width: '100%'
}
Placeholder.propTypes = {
  height: PropTypes.string.isRequired,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.string
}

export default Placeholder
