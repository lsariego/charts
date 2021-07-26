import styled from 'styled-components'

export const BaseLabel = styled.div`
  display: inline-block;
  zoom: 1;
  font-size: 12px;
  margin: 0 0 0 25px;
  line-height: 22px;

  &:first-of-type {
    margin-left: 0;
  }
`
export const ColorLabel = styled.span`
  float: left;
  margin-right: 5px;
  width: 22px;
  height: 22px;
  background-color: ${props => props.color};
`
