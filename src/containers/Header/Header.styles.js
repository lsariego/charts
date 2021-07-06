import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Root = styled.div`
  display: flex;
  height: auto;
  margin: 50px 0 50px;
  width: 100%;
`

export const Logo = styled.img`
  pointer-events: none;
  user-select: none;
`

export const LogoLink = styled(Link)`
  margin: 0 20px 0 0;
`

export const Welcome = styled.section`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  justify-self: flex-end;
  margin: 0 0 0 auto;
`

export const Highlight = styled.span`
  font-weight: 600;
`

export const Actions = styled.span`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`
