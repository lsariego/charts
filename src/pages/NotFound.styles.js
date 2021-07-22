// FIXME: This file is just an example, you can take it as reference to make your own.

import styled from 'styled-components'

export const Root = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`

export const Text = styled.h3`
  color: ${props => props.theme.palette.pickledBlueWood};
  font-size: 22px;
  line-height: 26px;
  font-weight: ${props => props.theme.fontWeights[300]};
  margin: 0 0 0.5rem;
`

export const Image404 = styled.img`
  width: 50%;
`
