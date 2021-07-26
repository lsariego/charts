import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './TableCell.styles'

/**
 * The TableCell's component.
 */
const TableCell = props => {
  const { align, border, children, colSpan, head, padding, verticalAlign, width } = props

  return (
    <Root
      align={align}
      border={border}
      colSpan={colSpan}
      variant={head ? 'head' : 'body'}
      padding={padding}
      verticalAlign={verticalAlign}
      width={width}
    >
      {children}
    </Root>
  )
}

TableCell.defaultProps = {
  align: 'left',
  border: true,
  children: null,
  colSpan: 1,
  head: false,
  width: 'initial'
}
TableCell.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  border: PropTypes.bool,
  children: PropTypes.node,
  colSpan: PropTypes.number,
  head: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  verticalAlign: PropTypes.oneOf(['baseline', 'bottom', 'initial', 'middle', 'top']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default TableCell
