// FIXME: This file is just an example, you can take it as reference to make your own.

import styled from 'styled-components'

export const Root = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  padding: 30px 10px 0;
  width: 100%;

  ${props => props.theme.breakpoints.only('xs')} {
    max-width: 540px;
  }

  ${props => props.theme.breakpoints.only('sm')} {
    max-width: 720px;
  }

  ${props => props.theme.breakpoints.only('md')} {
    max-width: 960px;
  }

  ${props => props.theme.breakpoints.only('lg')} {
    max-width: 1140px;
  }

  ${props => props.theme.breakpoints.only('xl')} {
    max-width: 1140px;
  }
`

export const Header = styled.section`
  width: 100%;
`

export const Body = styled.section`
  height: auto;
  width: 100%;
`

export const Footer = styled.section`
  width: 100%;
`
