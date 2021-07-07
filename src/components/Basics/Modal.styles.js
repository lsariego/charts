import styled, { createGlobalStyle } from 'styled-components'
import { Close } from '@material-ui/icons'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled.div`
  align-items: center;
  background-color: ${props => hexToRGBA(props.theme.palette.blackGrayBrand.black3, 0.5)};
  display: ${props => (props.show ? 'flex' : 'none')};
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export const Content = styled.div`
  background-color: ${props => props.theme.palette.blackGrayBrand.white};
  border: 1px solid rgba(46, 91, 255, 0.08);
  margin: 100px auto;
  max-width: ${props => props.maxWidth};
  padding: 20px;
  position: ${props => props.position || 'relative'};
  top: 0;
  width: 100%;
`

export const CloseIcon = styled(Close)`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 13px;
  top: 12px;
`

export const GlobalStyles = createGlobalStyle`
  html {
    overflow: ${props => (props.show ? 'hidden' : 'inherit')};
  }
`
