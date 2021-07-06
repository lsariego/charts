// FIXME: This file is just an example, you can take it as reference to make your own.

import styled, { createGlobalStyle } from 'styled-components'

export const Root = styled.div`
  align-items: center;
  background-color: rgba(250, 250, 250, 0.8);
  display: ${props => (props.show ? 'flex' : 'none')};
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.palette.brand.white};
  border-radius: 1px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  margin: 100px auto;
  max-width: ${props => props.maxWidth};
  padding: 20px;
  position: relative;
  width: 100%;
`

export const CloseIcon = styled.img`
  color: ${props => props.theme.palette.custom.baliHai};
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  right: 18px;
  top: 17px;
`

export const GlobalStyles = createGlobalStyle`
  html {
    overflow: ${props => (props.show ? 'hidden' : 'inherit')};
  }
`
