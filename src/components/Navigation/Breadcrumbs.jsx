import React from 'react'
import PropTypes from 'prop-types'
import { ExtenalLink, Link, Root, Text } from './Breadcrumbs.styles'

/**
 * The Breadcrumbs' component.
 */
const Breadcrumbs = props => {
  const { accessibility, breadcrumbs, align } = props

  return (
    <Root aria-label={accessibility.label} align={align}>
      {breadcrumbs.map((breadcrumb, index) =>
        breadcrumb.link ? (
          breadcrumb.isExternal ? (
            <ExtenalLink
              key={`breadcrumb-link-${index}`}
              href={breadcrumb.link}
              onClick={breadcrumb.onClick || undefined}
            >
              {breadcrumb.text}
            </ExtenalLink>
          ) : (
            <Link key={`breadcrumb-link-${index}`} to={breadcrumb.link}>
              {breadcrumb.text}
            </Link>
          )
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
  },
  align: 'inherit'
}
Breadcrumbs.propTypes = {
  accessibility: PropTypes.shape({
    label: PropTypes.string
  }),
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      isExternal: PropTypes.bool,
      link: PropTypes.string,
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func
    })
  ).isRequired
}

export default Breadcrumbs
