import styled from 'styled-components'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { hexToRGBA } from '../../modules/utils/color'

export const ClassicPagination = styled(Pagination)`
  margin: ${({ alignment }) => {
    switch (alignment) {
      case 'right':
        return '0 0 0 auto'
      case 'center':
        return '0 auto'
      case 'left':
        return '0 auto 0 0'
      default:
        return '0 auto 0 0'
    }
  }};
  width: fit-content;

  & .MuiPagination-ul {
    margin: 0 0 0 auto;

    li {
      margin: 0 2px 0 0;
    }

    li:last-child {
      margin-right: 0;
    }
  }

  & .MuiPaginationItem-ellipsis {
    color: ${props => props.theme.palette.primary.main};
  }
`

export const ClassicPaginationItem = styled(PaginationItem)`
  background-color: ${props => hexToRGBA(props.theme.palette.primary.main, 0.05)};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.palette.primary.main};
  font-size: 13px;
  font-weight: bold;
  height: 42px;
  margin: 3px;
  padding: 1.3rem 1rem;
  width: 45px;

  &.Mui-selected {
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.blackGrayBrand.white};
  }

  &.MuiPaginationItem-page.Mui-selected:hover,
  &.MuiPaginationItem-page.Mui-selected.Mui-focusVisible {
    background-color: ${props => props.theme.palette.primary.main};
    cursor: default;
  }

  &.MuiPaginationItem-page:hover {
    background-color: ${props => props.theme.palette.blackGrayBrand.gray2};
  }
`

export const ExtendedPagination = styled(Pagination)`
  margin: ${({ alignment }) => {
    switch (alignment) {
      case 'right':
        return '0 0 0 auto'
      case 'center':
        return '0 auto'
      case 'left':
        return '0 auto 0 0'
      default:
        return '0 auto 0 0'
    }
  }};
  width: 100%;

  & .MuiPaginationItem-ellipsis {
    display: none;
  }

  & .MuiPagination-ul {
    li {
      display: none;
    }

    li:last-child {
      align-items: center;
      display: flex;
      width: 100%;
    }
  }
`

export const ExtendedPaginationItem = styled(PaginationItem)`
  background-color: ${props => props.theme.palette.blackGrayBrand.gray2};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.palette.blackGrayBrand.black2};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights[500]};
  margin: 0;
  padding: 0.4rem 1rem;

  &.MuiPaginationItem-page:hover {
    background-color: ${props => props.theme.palette.blackGrayBrand.gray1};
    color: ${props => props.theme.palette.blackGrayBrand.black1};
  }
`

export const Line = styled.hr`
  background-color: ${props => props.theme.palette.blackGrayBrand.gray3};
  border: none;
  height: 2px;
  width: 100%;
`
