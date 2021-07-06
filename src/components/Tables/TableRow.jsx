import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './TableRow.styles'

/**
 * The TableRow's component.
 */
const TableRow = props => {
  const { children, backgroundColor } = props

  return <Root backgroundColor={backgroundColor}>{children}</Root>
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.oneOf(['gray1', 'gray2', 'gray3', 'primaryLight'])
}

export default TableRow
