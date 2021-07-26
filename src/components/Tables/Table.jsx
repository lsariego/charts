import React from 'react'
import PropTypes from 'prop-types'
import { TableBody, TableHead } from '@material-ui/core'
import { Root } from './Table.styles'

/**
 * The Table's component.
 */
const Table = props => {
  const { accessibility, children = null, head, margin, borderCollapse, borderSpacing } = props

  return (
    <Root
      aria-label={accessibility.label}
      margin={margin}
      borderCollapse={borderCollapse}
      borderSpacing={borderSpacing}
    >
      {head && <TableHead>{head}</TableHead>}
      <TableBody>{children}</TableBody>
    </Root>
  )
}

Table.defaultProps = {
  accessibility: {
    label: 'table'
  },
  head: null,
  margin: '0',
  borderCollapse: 'separate',
  borderSpacing: 0
}
Table.propTypes = {
  accessibility: PropTypes.shape({
    label: PropTypes.string
  }),
  children: PropTypes.node,
  head: PropTypes.node,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderCollapse: PropTypes.string,
  borderSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Table
