// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import PropTypes from 'prop-types'
import { Root, Link, Text } from './Breadcrumbs.styles'

/**
 * The Breadcrumbs' component.
 */
const Breadcrumbs = props => {
  const { accessibility, breadcrumbs } = props

  return (
    <Root aria-label={accessibility.label}>
      {breadcrumbs.map((breadcrumb, index) =>
        breadcrumb.link ? (
          <Link key={`breadcrumb-link-${index}`} to={breadcrumb.link}>
            {breadcrumb.text}
          </Link>
        ) : (
          <Text key={`breadcrumb-text-${index}`}>{breadcrumb.text}</Text>
        )
      )}
    </Root>
  )
}

Breadcrumbs.defaultProps = {
  accessibility: {
    label: 'breadcrumbs'
  }
}
Breadcrumbs.propTypes = {
  accessibility: PropTypes.shape({
    label: PropTypes.string
  }),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Breadcrumbs
