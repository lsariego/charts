// FIXME: This file is just an example, you can take it as reference to make your own.

import styled from 'styled-components'

export const Root = styled.div`
  box-sizing: content-box;
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
`

export const Block = styled.section`
  animation: fading 1.5s infinite;
  background-color: ${props => props.theme.palette.brand.shuttleGray};
  border-radius: 3px;
  height: 100%;
  opacity: 0.1;
  width: 100%;

  @keyframes fading {
    0% {
      opacity: 0.1;
    }

    50% {
      opacity: 0.2;
    }

    100% {
      opacity: 0.1;
    }
  }
`
