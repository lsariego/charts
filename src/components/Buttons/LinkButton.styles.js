import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { hexToRGBA } from '../../modules/utils/color'

export const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const LoadingIcon = styled(CircularProgress)`
  color: ${props => props.theme.palette.blackGrayBrand.white};
`

const BaseLinkButton = styled(Link)`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 2rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${({ size }) => {
    if (size === 'large') {
      return '18px'
    } else if (size === 'small') {
      return '12px'
    } else {
      return '14px'
    }
  }};
  font-weight: ${props => props.theme.fontWeights[500]};
  height: ${({ size }) => {
    if (size === 'large') {
      return '48px'
    } else if (size === 'small') {
      return '28px'
    } else {
      return '38px'
    }
  }};
  justify-content: center;
  line-height: 1.75;
  margin: ${props => props.margin};
  padding: ${({ size }) => {
    if (size === 'large') {
      return '0 3.983rem'
    } else if (size === 'small') {
      return '0 2.112rem'
    } else {
      return '0 2.79rem'
    }
  }};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  text-decoration: none;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    color 0.15s ease-in-out;
  user-select: none;
  width: ${props => props.width};

  &:focus {
    box-shadow: 0 0 0 0.2rem ${({ color, theme }) => hexToRGBA(theme.palette[color].main, 0.4)};
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }
`

export const ContainedButton = styled(BaseLinkButton)`
  background-color: ${({ color, disabled, theme }) =>
    disabled ? hexToRGBA(theme.palette.blackGrayBrand.black1, 0.2) : theme.palette[color].main};
  border-color: ${({ color, disabled, theme }) =>
    disabled ? hexToRGBA(theme.palette.blackGrayBrand.black1, 0) : theme.palette[color].main};
  color: ${props => props.theme.palette.blackGrayBrand.white};

  &:hover {
    background-color: ${({ color, theme }) => theme.palette[color].dark};
    border-color: ${({ color, disabled, theme }) =>
      disabled ? hexToRGBA(theme.palette.blackGrayBrand.black1, 0) : theme.palette[color].dark};
    color: ${props => props.theme.palette.blackGrayBrand.white};
  }
`

export const OutlinedButton = styled(BaseLinkButton)`
  background-color: ${({ color, disabled, theme }) =>
    disabled ? hexToRGBA(theme.palette.blackGrayBrand.black1, 0.2) : hexToRGBA(theme.palette[color].main, 0.05)};
  border-color: ${({ color, disabled, theme }) =>
    disabled ? hexToRGBA(theme.palette.blackGrayBrand.black1, 0) : theme.palette[color].main};
  color: ${({ color, disabled, theme }) => (disabled ? theme.palette.blackGrayBrand.white : theme.palette[color].main)};

  &:hover {
    background-color: ${({ color, theme }) => theme.palette[color].main};
    border-color: ${({ color, disabled, theme }) =>
      disabled ? hexToRGBA(theme.palette.blackGrayBrand.black1, 0) : theme.palette[color].main};
    color: ${props => props.theme.palette.blackGrayBrand.white};
  }
`

export const TextButton = styled(BaseLinkButton)`
  background-color: ${({ disabled, theme }) =>
    disabled ? hexToRGBA(theme.palette.blackGrayBrand.black1, 0.2) : 'transparent'};
  border: none;
  color: ${({ color, disabled, theme }) => (disabled ? theme.palette.blackGrayBrand.white : theme.palette[color].main)};

  &:hover {
    background-color: ${({ color, theme }) => hexToRGBA(theme.palette[color].main, 0.15)};
  }
`
