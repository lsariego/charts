import React from 'react'
import styled from 'styled-components'
import { InputBase } from '@material-ui/core'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-family: ${props => props.theme.typography.fontFamily};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width || '100%'};
`

export const Label = styled.label`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights[600]};
  letter-spacing: 1.1px;
  line-height: 14px;
  margin: 0 0 0.3rem;
  text-transform: uppercase;
`

export const Counter = styled.label`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights[600]};
  line-height: 14px;
`

export const Details = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 3px 0 0;
`

export const Required = styled(({ ...props }) => <span {...props}>*</span>)`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 1rem;
`

export const BaseInput = styled(({ textAlign, ...props }) => <InputBase {...props} />)`
  background-clip: padding-box;
  background-color: ${props => props.theme.palette.blackGrayBrand.white};
  border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray1};
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${props => props.theme.palette.blackGrayBrand.black1};
  display: flex;
  font-size: 1rem;
  height: calc(1.5em + 0.75rem + 2px);
  line-height: 1.5;
  overflow: hidden;
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  & input,
  & textarea {
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
    padding: 0.375rem 0.75rem;
    text-align: ${props => props.textAlign};
    width: auto;

    &::placeholder {
      color: ${props => props.theme.palette.blackGrayBrand.black3};
      font-family: ${props => props.theme.typography.fontFamily};
      font-size: 1rem;
      line-height: 1.5;
      opacity: 0.42;
      transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
  }

  & input {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.Mui-focused {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &.Mui-disabled {
    background-color: rgba(46, 91, 255, 0.05);
    border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray1};
    color: ${props => props.theme.palette.blackGrayBrand.black3};
    cursor: not-allowed;
  }

  &.Mui-disabled input {
    cursor: not-allowed;
  }

  &.Mui-error {
    border: 1px solid ${props => props.theme.palette.error.main};
  }

  &.Mui-error.Mui-focused {
    box-shadow: 0 0 0 0.2rem ${props => hexToRGBA(props.theme.palette.error.main, 0.5)};
  }
`

export const Bottommessage = styled.section`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 12px;
  line-height: 14px;
  min-height: 20px;
`

export const Info = styled.section`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-style: italic;
`

export const Error = styled.section`
  color: ${props => props.theme.palette.error.main};
`

export const Prefix = styled.div`
  align-items: center;
  background-color: ${props => props.theme.palette.blackGrayBrand.black3};
  display: flex;
  height: 100%;
  justify-content: center;
  width: 54px;
`

export const Suffix = styled.div`
  align-items: center;
  background-color: ${props => props.theme.palette.primary.main};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 40px;
`
