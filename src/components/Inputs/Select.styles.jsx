import React from 'react'
import styled from 'styled-components'
import { InputBase, MenuItem, Select } from '@material-ui/core'

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

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
`

export const Placeholder = styled.section`
  align-items: center;
  color: ${props => props.theme.palette.custom.baliHai};
  display: flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1rem;
  height: 100%;
  left: 0;
  line-height: 1.5;
  opacity: 0.42;
  padding: 0 24px 0 0.75rem;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
`

export const BaseSelect = styled(({ className, maxWidth, ...props }) => (
  <Select {...props} MenuProps={{ ...props.MenuProps, classes: { paper: className } }} styles={{ maxWidth }} />
))`
  max-width: ${props => props.maxWidth};

  & ul {
    border-radius: 4px;
    padding: 0;
  }
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
  position: relative;
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  & input {
    height: 100%;
    padding: 0;
    width: 100%;
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

  & .MuiSelect-select {
    box-sizing: border-box;
    padding: 0.375rem 24px 0.375rem 0.75rem;

    &:focus {
      background-color: ${props => props.theme.palette.brand.white};
      border-radius: 0.25rem;
    }
  }
`

export const DropDown = styled.section`
  align-items: center;
  bottom: 0;
  display: flex;
  pointer-events: none;
  position: absolute;
  right: 7px;
  top: 0;
  user-select: none;
`

export const DropDownIcon = styled.i`
  color: ${props => (props.error ? props.theme.palette.brand.alizarinCrimson : props.theme.palette.custom.baliHai)};
  font-size: 14px;
  pointer-events: none;
  user-select: none;
`

export const Option = styled(MenuItem)`
  background-color: ${props => props.theme.palette.brand.white};
  color: ${props => props.theme.palette.brand.bigStone};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 14px;
  padding: 6px 12px;
  transition: none;
  width: 100%;

  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  & > .MuiTouchRipple-root {
    display: none;
  }

  &.Mui-focusVisible {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.Mui-selected {
    background-color: rgba(0, 0, 0, 0.08);
  }
`

export const OptionContent = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Error = styled.section`
  color: ${props => props.theme.palette.brand.alizarinCrimson};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 16px;
  margin: 3px 0 0;
  min-height: 20px;
`
