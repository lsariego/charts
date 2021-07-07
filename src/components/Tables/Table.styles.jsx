import React from 'react'
import styled from 'styled-components'
import { Table } from '@material-ui/core'

export const Root = styled(({ children, margin, borderSpacing, borderCollapse, ...props }) => (
  <Table {...props}>{children}</Table>
))`
  margin: ${props => props.margin};
  border-spacing: ${props => (props.borderSpacing ? props.borderSpacing : 0)};
  border-collapse: ${props => (props.borderCollapse ? props.borderCollapse : 'collapse')};
`
