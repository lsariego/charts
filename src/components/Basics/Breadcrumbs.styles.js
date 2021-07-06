// FIXME: This file is just an example, you can take it as reference to make your own.

import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'

export const Root = styled(Breadcrumbs)`
  background-color: ${props => props.theme.palette.brand.white};
  color: ${props => props.theme.palette.custom.baliHai};
  font-size: 16px;
  line-height: 20px;

  & > ol {
    background-color: ${props => props.theme.palette.brand.white};
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 1rem;
    padding: 0.75rem 1rem 0 0;
  }
`

export const Link = styled(BaseLink)`
  color: ${props => props.theme.palette.custom.baliHai};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.palette.custom.baliHai};
    text-decoration: underline;
  }
`

export const Text = styled.span`
  color: ${props => props.theme.palette.custom.baliHai};
`
