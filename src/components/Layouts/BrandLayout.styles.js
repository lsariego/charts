import styled from 'styled-components'
import { Grid as BaseGrid } from '@material-ui/core'

export const Root = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  padding: 0 10px;
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
  margin: 0;
  width: 100%;
`

export const TopContent = styled.section`
  width: 100%;
`

export const Body = styled(BaseGrid)`
  display: flex;
  height: auto;
  padding: 0;
  width: 100%;
`

export const Section = styled(BaseGrid)`
  margin: 0 0 20px;
`

export const Footer = styled.section`
  width: 100%;
`
