import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Jumbo = styled(({ color, fontSize, fontWeight, italic, lineHeight, margin, padding, width, ...props }) => (
  <Typography {...props} />
))`
  &.MuiTypography-h1 {
    color: ${({ color, theme }) => {
      switch (color) {
        case 'black1':
        case 'black2':
        case 'black3':
        case 'gray1':
        case 'gray2':
        case 'gray3':
        case 'white':
          return theme.palette.blackGrayBrand[color]
        case 'primary':
        case 'success':
        case 'error':
        case 'warning':
          return theme.palette[color].main
        default:
          return theme.palette.blackGrayBrand.black1
      }
    }};
    font-size: ${({ fontSize }) => fontSize ?? '48px'};
    font-style: ${props => (props.italic ? 'italic' : 'initial')};
    font-weight: ${({ fontWeight, theme }) => {
      switch (fontWeight) {
        case 'black':
          return theme.fontWeights[900]
        case 'bold':
          return theme.fontWeights[700]
        case 'regular':
          return theme.fontWeights[400]
        case 'light':
          return theme.fontWeights[300]
        default:
          return theme.fontWeights[400]
      }
    }};
    line-height: ${props => props.lineHeight ?? '48px'};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
  }
`

export const Root = styled(({ color, fontSize, fontWeight, italic, lineHeight, margin, padding, width, ...props }) => (
  <Typography {...props} />
))`
  color: ${({ color, theme }) => {
    switch (color) {
      case 'black1':
      case 'black2':
      case 'black3':
      case 'gray1':
      case 'gray2':
      case 'gray3':
      case 'white':
        return theme.palette.blackGrayBrand[color]
      case 'primary':
      case 'success':
      case 'error':
      case 'warning':
        return theme.palette[color].main
      default:
        return theme.palette.blackGrayBrand.black1
    }
  }};
  display: ${props => props.display};
  font-style: ${props => (props.italic ? 'italic' : 'initial')};
  font-weight: ${({ fontWeight, theme }) => {
    switch (fontWeight) {
      case 'black':
        return theme.fontWeights[900]
      case 'bold':
        return theme.fontWeights[700]
      case 'regular':
        return theme.fontWeights[400]
      case 'light':
        return theme.fontWeights[300]
      default:
        return theme.fontWeights[400]
    }
  }};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};

  &.MuiTypography-h1 {
    font-size: ${props => props.fontSize ?? '34px'};
    line-height: ${props => props.lineHeight ?? '38px'};
  }

  &.MuiTypography-h2 {
    font-size: ${props => props.fontSize ?? '27px'};
    line-height: ${props => props.lineHeight ?? '31px'};
  }

  &.MuiTypography-h3 {
    font-size: ${props => props.fontSize ?? '22px'};
    line-height: ${props => props.lineHeight ?? '26px'};
  }

  &.MuiTypography-h4 {
    font-size: ${props => props.fontSize ?? '18px'};
    line-height: ${props => props.lineHeight ?? '22px'};
  }

  &.MuiTypography-body1 {
    font-size: ${props => props.fontSize ?? '16px'};
    line-height: ${props => props.lineHeight ?? '20px'};
  }

  &.MuiTypography-body2 {
    font-size: ${props => props.fontSize ?? '14px'};
    line-height: ${props => props.lineHeight ?? '18px'};
  }

  &.MuiTypography-subtitle1 {
    color: ${({ color, theme }) => {
      switch (color) {
        case 'black1':
        case 'black2':
        case 'black3':
        case 'gray1':
        case 'gray2':
        case 'gray3':
        case 'white':
          return theme.palette.blackGrayBrand[color]
        case 'primary':
        case 'success':
        case 'error':
        case 'warning':
          return theme.palette[color].main
        default:
          return theme.palette.blackGrayBrand.black3
      }
    }};
    font-size: ${props => props.fontSize ?? '12px'};
    line-height: ${props => props.lineHeight ?? '16px'};
  }

  &.MuiTypography-caption {
    color: ${({ color, theme }) => {
      switch (color) {
        case 'black1':
        case 'black2':
        case 'black3':
        case 'gray1':
        case 'gray2':
        case 'gray3':
        case 'white':
          return theme.palette.blackGrayBrand[color]
        case 'primary':
        case 'success':
        case 'error':
        case 'warning':
          return theme.palette[color].main
        default:
          return theme.palette.blackGrayBrand.black3
      }
    }};
    display: block;
    font-size: ${props => props.fontSize ?? '12px'};
    letter-spacing: 1.1px;
    line-height: ${props => props.lineHeight ?? '16px'};
    text-transform: uppercase;
  }
`
