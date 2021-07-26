import React from 'react'
import styled from 'styled-components'
import { Checkbox, FormControlLabel, FormGroup as FormGroupBase } from '@material-ui/core'

export const BaseCheckBox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: ${props => props.theme.palette.blackGrayBrand.gray4};
    margin: -8px 0 0 -8px;
    padding: 8px;

    & .MuiSvgIcon-root {
      font-size: 25px;
    }
    &.Mui-checked {
      color: ${props => props.theme.palette.blackGrayBrand.gray4};
    }
    &.MuiCheckbox-colorPrimary.Mui-disabled {
      color: ${props => props.theme.palette.blackGrayBrand.gray2};
    }
  }
`

export const Error = styled.section`
  color: ${props => props.theme.palette.error.light};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 16px;
  margin: 3px 0 0;
  min-height: 20px;
`

export const Group = styled(FormGroupBase)`
  &.MuiFormGroup-root {
    align-items: flex-start;
    display: flex;
    flex-direction: ${props => (props.direction === 'horizontal' ? 'row' : 'column')};
  }
`

export const Item = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    align-items: flex-start;
    cursor: pointer;
    margin: 0 16px 0 0;
  }

  & .MuiFormControlLabel-label {
    color: ${props => props.theme.palette.blackGrayBrand.gray4};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 15px;
    letter-spacing: 0;
    margin: 0 0 0 11px;
    user-select: none;

    &.Mui-disabled {
      color: ${props => props.theme.palette.blackGrayBrand.gray2};
    }
  }

  &.MuiFormControlLabel-root.Mui-disabled {
    cursor: not-allowed;
  }
`

export const Label = styled.label`
  color: ${props => props.theme.palette.blackGrayBrand.gray2};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights[700]};
  letter-spacing: 1.1px;
  line-height: 14px;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
`

export const Required = styled(({ ...props }) => <span {...props}>*</span>)`
  color: ${props => props.theme.palette.blackGrayBrand.gray2};
  font-size: 1rem;
`

export const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-family: ${props => props.theme.typography.fontFamily};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: 100%;
`
