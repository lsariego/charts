// FIXME: This file is just an example, you can take it as reference to make your own.

import styled from 'styled-components'
import { ButtonBase, CircularProgress } from '@material-ui/core'

const BaseButton = styled(ButtonBase)`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  display: inline-flex;
  font-size: ${props => (props.size === 'lg' ? '15px' : '.875rem')};
  font-weight: ${props => props.theme.fontWeights[500]};
  justify-content: center;
  line-height: 1.5;
  padding: ${props => (props.size === 'lg' ? '0.375rem 17px' : '.25rem .5rem')};
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    color 0.15s ease-in-out;
  user-select: none;
  width: ${props => props.width};

  &.Mui-disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }

  &.MuiTouchRipple-root {
    display: none;
  }
`

export const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const LoadingIcon = styled(CircularProgress)`
  color: ${props => props.theme.palette.brand.white};
`

export const DefaultButton = styled(BaseButton)`
  background-color: ${props => (props.reverse ? props.theme.palette.brand.white : props.theme.palette.custom.baliHai)};
  border-color: ${props => props.theme.palette.custom.baliHai};
  color: ${props => (props.reverse ? props.theme.palette.custom.baliHai : props.theme.palette.brand.white)};

  &:hover {
    background-color: ${props =>
      props.reverse ? props.theme.palette.brand.white : props.theme.palette.custom.pickledBlueWood};
    border-color: ${props =>
      props.reverse ? props.theme.palette.custom.baliHai : props.theme.palette.custom.pickledBlueWood};
    color: ${props => (props.reverse ? props.theme.palette.custom.heather : props.theme.palette.brand.white)};
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
  }
`

export const PrimaryButton = styled(BaseButton)`
  background-color: ${props => (props.reverse ? 'rgba(46, 91, 255, 0.05)' : props.theme.palette.brand.blueRibbon)};
  border-color: ${props => props.theme.palette.brand.blueRibbon};
  color: ${props => (props.reverse ? props.theme.palette.brand.blueRibbon : props.theme.palette.brand.white)};

  &:hover {
    background-color: ${props => props.theme.palette.brand.scienceBlue};
    border-color: ${props => props.theme.palette.brand.scienceBlue};
    color: ${props => props.theme.palette.brand.white};
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(77, 116, 255, 0.5);
  }
`

export const SecondaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.palette.brand.paleSky};
  border-color: ${props => props.theme.palette.brand.paleSky};
  color: ${props => props.theme.palette.brand.white};

  &:hover {
    background-color: ${props => props.theme.palette.brand.shuttleGray};
    border-color: ${props => props.theme.palette.brand.shuttleGray};
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
  }
`
