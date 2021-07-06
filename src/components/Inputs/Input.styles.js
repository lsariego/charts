// FIXME: This file is just an example, you can take it as reference to make your own.

import styled from 'styled-components'
import { InputBase } from '@material-ui/core'

export const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-family: ${props => props.theme.typography.fontFamily};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: 100%;
`

export const Label = styled.label`
  color: ${props => props.theme.palette.custom.baliHai};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights[500]};
  letter-spacing: 1.125px;
  line-height: 14px;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
`

export const RequiredIcon = styled.i`
  color: ${props => props.theme.palette.custom.baliHai};
`

export const BaseInput = styled(InputBase)`
  background-clip: padding-box;
  background-color: ${props => props.theme.palette.brand.white};
  border: 1px solid ${props => props.theme.palette.custom.ghost};
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${props => props.theme.palette.brand.bigStone};
  display: block;
  font-size: 1rem;
  height: calc(1.5em + 0.75rem + 2px);
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  & input {
    height: 100%;
    padding: 0;
    width: 100%;

    &::placeholder {
      color: ${props => props.theme.palette.custom.baliHai};
      font-family: ${props => props.theme.typography.fontFamily};
      font-size: 1rem;
      line-height: 1.5;
      opacity: 0.42;
      transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
  }

  &.Mui-focused {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &.Mui-disabled {
    background-color: rgba(46, 91, 255, 0.05);
    border: 1px solid ${props => props.theme.palette.custom.heather};
    color: ${props => props.theme.palette.custom.baliHai};
    cursor: not-allowed;
  }

  &.Mui-disabled input {
    cursor: not-allowed;
  }

  &.Mui-error {
    border: 1px solid ${props => props.theme.palette.brand.alizarinCrimson};
  }

  &.Mui-error.Mui-focused {
    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
  }
`

export const Error = styled.section`
  color: ${props => props.theme.palette.brand.alizarinCrimson};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 16px;
  margin: 3px 0 0;
  min-height: 20px;
`
