import React from 'react'
import PropTypes from 'prop-types'
import { Body, Footer, Header, Root, Section, TopContent } from './BrandLayout.styles'

/**
 * The BrandLayout's component.
 */
const BrandLayout = props => {
  const { children, featured, footer, header, sidebar } = props

  return (
    <Root>
      {header && <Header>{header}</Header>}
      {featured && <TopContent>{featured}</TopContent>}
      <Body container>
        {sidebar && (
          <Section item md={3} sm={12} xs={12}>
            {sidebar}
          </Section>
        )}
        <Section item md={sidebar ? 9 : 12} sm={12} xs={12}>
          {children}
        </Section>
      </Body>
      {footer && <Footer>{footer}</Footer>}
    </Root>
  )
}

BrandLayout.defaultProps = {
  featured: null,
  footer: null,
  header: null,
  sidebar: null
}
BrandLayout.propTypes = {
  children: PropTypes.node.isRequired,
  featured: PropTypes.node,
  footer: PropTypes.node,
  header: PropTypes.node,
  sidebar: PropTypes.node
}

export default BrandLayout
