import styled from 'styled-components'
import { ButtonBase } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import ImageIcon from '@material-ui/icons/Image'
import BarChartIcon from '@material-ui/icons/BarChart'
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined'

export const QuestionIcn = styled.div`
  color: ${props => props.theme.palette.blackGrayBrand.gray4};
  width: 16px;
  height: 16px;
  padding: 3px;
  margin: 0 5px 0 0;
  border-radius: 100%;
  outline: none;
  border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray4};

  &:before {
    display: block;
    content: '?';
    margin: 0;
    width: 100%;
    text-align: center;
    line-height: 16px;
    font-size: 14px;
  }
`

export const DownloadIcn = styled(GetAppIcon)`
  color: ${props => props.theme.palette.blackGrayBrand.gray4};
  width: 16px;
  height: 16px;
  padding: 3px;
  margin: 0 5px 0 0;
  border-radius: 100%;
  outline: none;
  border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray4};
`

export const ChartIcn = styled(ImageIcon)`
  color: ${props => props.theme.palette.blackGrayBrand.gray4};
  width: 16px;
  height: 16px;
  padding: 3px;
  margin: 0 5px 0 0;
  border-radius: 100%;
  outline: none;
  border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray4};
`

export const BarIcn = styled(BarChartIcon)`
  color: ${props => props.theme.palette.primary.main};
  width: 90%;
  margin: 0 auto;
  outline: none;
`

export const TableIcn = styled(TableChartOutlinedIcon)`
  color: ${props => props.theme.palette.primary.main};
  width: 90%;
  margin: 0 auto;
  outline: none;
`

const BaseIconButton = styled(ButtonBase)`
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${({ size }) => {
    if (size === 'large') {
      return '18px'
    } else if (size === 'small') {
      return '12px'
    } else {
      return '12px'
    }
  }};
  font-weight: ${props => props.theme.fontWeights[700]};
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
  margin: ${props => props.margin};
  padding: 0;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  text-decoration: none;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    color 0.15s ease-in-out;
  user-select: none;
  width: ${props => props.width};

  &.singleBtn svg {
    opacity: 0.3;
  }

  &.Mui-disabled {
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    color: ${props => props.theme.palette.blackGrayBrand.gray1};

    & svg {
      opacity: 0.3;
    }

    &.singleBtn svg {
      color: ${props => props.theme.palette.brand.primary[50]};
      opacity: 1;
    }
  }
`

export const OutlinedButton = styled(BaseIconButton)`
  background-color: 'transparent';
  border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray1};
  border-radius: 0.25rem;
  width: 36px;
  height: 36px;
  color: ${({ color, disabled, theme }) =>
    disabled ? theme.palette.blackGrayBrand.white : theme.palette.blackGrayBrand.gray4};
  text-transform: uppercase;
`

export const TextButton = styled(BaseIconButton)`
  background-color: 'transparent';
  border: none;
  color: ${({ color, disabled, theme }) =>
    disabled ? theme.palette.blackGrayBrand.white : theme.palette.blackGrayBrand.gray4};
  text-transform: uppercase;
`
