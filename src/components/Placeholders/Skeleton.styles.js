import styled from 'styled-components'
import { Skeleton } from '@material-ui/lab'

export const Root = styled(Skeleton)`
  background-color: ${props => props.theme.palette.blackGrayBrand.gray2};
  border-radius: 3px;
  display: inline-block;
  margin: ${props => props.margin};
  opacity: 0.1;
  padding: ${props => props.padding};
`
