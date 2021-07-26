import React from 'react'
import PropTypes from 'prop-types'
import {
  ClassicPagination,
  ClassicPaginationItem,
  ExtendedPagination,
  ExtendedPaginationItem,
  Line
} from './Pagination.styles'

/**
 * The Pagination's component.
 */
const Pagination = (
  { defaultPage, page, variant, onChange, ...rest },
  {
    renderItem = item =>
      variant === 'classic' ? (
        <ClassicPaginationItem shape="rounded" {...item} />
      ) : (
        <>
          <Line />
          <ExtendedPaginationItem shape="rounded" {...item}>
            Cargar más
          </ExtendedPaginationItem>
          <Line />
        </>
      )
  }
) => {
  return variant === 'classic' ? (
    <ClassicPagination page={page ?? defaultPage} onChange={onChange ?? onChange} {...rest} renderItem={renderItem} />
  ) : (
    <ExtendedPagination
      page={page ?? defaultPage}
      onChange={onChange ?? onChange}
      {...rest}
      showFirstButton={false}
      showLastButton={false}
      hidePrevButton
      renderItem={renderItem}
    />
  )
}

Pagination.defaultProps = {
  alignment: 'left',
  count: 1,
  defaultPage: 1,
  size: 'medium',
  variant: 'classic',
  getItemAriaLabel: () => undefined,
  onChange: () => undefined,
  renderItem: item => <ClassicPaginationItem {...item} />
}
Pagination.propTypes = {
  alignment: PropTypes.oneOf(['center', 'left', 'right']),
  count: PropTypes.number,
  defaultPage: PropTypes.number,
  page: PropTypes.number,
  rest: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['classic', 'expand']),
  getItemAriaLabel: PropTypes.func,
  onChange: PropTypes.func,
  renderItem: PropTypes.func
}

export default Pagination
