import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { InputBase, MenuItem, Select } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-family: ${props => props.theme.typography.fontFamily};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width || '100%'};

  ${props => props.theme.breakpoints.up('sm')} {
    float: ${props => props.align || 'none'};
  }
`

export const Label = styled.label`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights[600]};
  letter-spacing: 1.125px;
  line-height: 14px;
  margin: 0 0 0.3rem;
  text-transform: uppercase;
`

export const Required = styled(({ ...props }) => <span {...props}>*</span>)`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-size: 1rem;
`

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
`

export const Placeholder = styled.section`
  align-items: center;
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  display: flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1rem;
  height: 100%;
  justify-content: ${props => {
    if (props.textAlign === 'end') {
      return 'flex-end'
    }

    if (props.textAlign === 'start') {
      return 'flex-start'
    }

    return props.textAlign
  }};
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

export const BaseSelect = styled(({ className, maxWidth, align, ...props }) => (
  <Select {...props} MenuProps={{ ...props.MenuProps, classes: { paper: className } }} styles={{ maxWidth }} />
))`
  max-width: ${props => props.maxWidth};
  width: ${props => props.maxWidth};
  float: ${props => props.align};

  ${props => props.theme.breakpoints.down('sm')} {
    max-width: calc(100% - 32px);
  }

  & ul {
    border-radius: 4px;
    padding: 0;
  }
`

// eslint-disable-next-line react/prop-types
export const BaseInput = styled(forwardRef(({ textAlign, ...props }, ref) => <InputBase {...props} ref={ref} />))`
  background-clip: padding-box;
  background-color: transparent;
  border-bottom: 2px solid ${props => props.theme.palette.blackGrayBrand.white};
  box-sizing: border-box;
  color: ${props => props.theme.palette.blackGrayBrand.white};
  display: block;
  font-size: 1rem;
  height: 34px;
  line-height: 1.5;
  position: relative;
  text-align: ${props => props.textAlign};
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  & input {
    height: 100%;
    padding: 0;
    width: 100%;
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

  & .MuiSelect-select {
    box-sizing: border-box;

    &:focus {
      background-color: transparent;
    }
  }
`

export const DropDown = styled.section`
  align-items: center;
  bottom: 0;
  display: flex;
  pointer-events: none;
  position: absolute;
  right: 0px;
  top: 0;
  user-select: none;
`

export const DropDownIcon = styled(ExpandMore)`
  color: ${({ error, theme }) => (error ? theme.palette.error.main : theme.palette.blackGrayBrand.black3)};
  font-size: 24px;
  pointer-events: none;
  user-select: none;
`

export const Option = styled(MenuItem)`
  background-color: ${props => props.theme.palette.blackGrayBrand.white};
  color: ${props => props.theme.palette.blackGrayBrand.black1};
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

export const BottomMessage = styled.section`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 14px;
  margin: 3px 0 0;
  min-height: 20px;
`

export const Info = styled.section`
  color: ${props => props.theme.palette.blackGrayBrand.black3};
  font-style: italic;
`

export const Error = styled.section`
  color: ${props => props.theme.palette.error.main};
`
