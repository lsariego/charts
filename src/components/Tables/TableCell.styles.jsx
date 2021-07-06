import React from 'react'
import styled from 'styled-components'
import { TableCell } from '@material-ui/core'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled(({ border, padding, verticalAlign, width, ...restProps }) => <TableCell {...restProps} />)`
  border-bottom: ${({ border, theme }) =>
    border ? `1px solid ${hexToRGBA(theme.palette.blackGrayBrand.gray1, 0.5)}` : 'none'};

  color: ${props => props.theme.palette.blackGrayBrand.black1};
  font-size: 14px;
  font-weight: ${props => (props.variant === 'head' ? props.theme.fontWeights[700] : props.theme.fontWeights[400])};
  line-height: 18px;
  padding: ${props => props.padding || '12px 9px 16px'};
  vertical-align: ${props => (props.variant === 'head' ? 'top' : props.verticalAlign || 'initial')};
  width: ${props => props.width};

  &:first-child {
    padding: ${props => props.padding || '12px 9px 16px 0'};
  }

  &:last-child {
    border-right: 0;
    padding: ${props => props.padding || '12px 0 16px 9px'};
  }
`
