// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import PropTypes from 'prop-types'
import { Body, Footer, Header, Root } from './BrandLayout.styles'

/**
 * The BrandLayout's component.
 */
const BrandLayout = props => {
  const { children, footer, header } = props

  return (
    <Root>
      {header && <Header>{header}</Header>}
      <Body>{children}</Body>
      {footer && <Footer>{footer}</Footer>}
    </Root>
  )
}

BrandLayout.defaultProps = {
  footer: null,
  header: null
}
BrandLayout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  header: PropTypes.node
}

export default BrandLayout
