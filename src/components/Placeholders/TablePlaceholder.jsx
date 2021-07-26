import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from './Skeleton'
import { Root } from './TablePlaceholder.styles'

/**
 * The TablePlaceholder's component.
 */
const TablePlaceholder = props => {
  const { margin } = props

  return (
    <Root margin={margin}>
      <Skeleton height="35px" margin="0 0 0.4rem" variant="rect" width="100%" />
      <Skeleton height="30px" margin="0 0 0.2rem" variant="rect" width="100%" />
      <Skeleton height="30px" margin="0 0 0.2rem" variant="rect" width="100%" />
      <Skeleton height="30px" margin="0 0 0.2rem" variant="rect" width="100%" />
      <Skeleton height="30px" margin="0 0 0.2rem" variant="rect" width="100%" />
      <Skeleton height="30px" margin="0 0 0.2rem" variant="rect" width="100%" />
    </Root>
  )
}

TablePlaceholder.defaultProps = {
  margin: '4px 0 20px'
}
TablePlaceholder.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default TablePlaceholder
