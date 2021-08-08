import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'

export const ExtenalLink = styled.a`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.palette.blackGrayBrand.black3};
    text-decoration: underline;
  }
`

export const Link = styled(BaseLink)`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.palette.blackGrayBrand.black3};
    text-decoration: underline;
  }
`

export const Root = styled(Breadcrumbs)`
  background-color: ${props => props.theme.palette.blackGrayBrand.white};
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights[300]};
  line-height: 20px;

  & > ol {
    background-color: ${props => props.theme.palette.blackGrayBrand.white};
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 1rem;
    padding: 0 1rem 0 0;
    justify-content: ${props => props.align ?? 'left'};

    & > li:last-of-type{
      font-weight: bold;
    }
  }
`

export const Text = styled.span`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
`
