import styled from 'styled-components'
import { Container, Grid, Box } from '@material-ui/core'
import LocationCityIcon from '@material-ui/icons/LocationCity'

export const Wrapper = styled(Container)`
  margin: ${props => props.margin ? props.margin : '0 auto'};

  ${props => props.theme.breakpoints.up('sm')} {
    &.mainInfo .MuiGrid-grid-sm-6:last-of-type{
      text-align:right;
    }
  }
`
export const GridItem = styled(Grid)`
  background: ${props => props.background ? props.theme.palette.blackGrayBrand[props.background] : 'transparent'};
  border-radius: ${props => props.rounded ? '5px' : '0'};

  &.mainData, &.mainLabelSearch{
    background: ${props => props.theme.palette.brand.primary[15]};
  }

  &.mainLabelSearch{
    margin: 25px auto 0 auto;
    padding: 12px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    ${props => props.theme.breakpoints.up('sm')} {
      & p{
        margin-top: 12px;
        font-size: 15px;
      }
    }
  }

  &.mainDefaultText {
    border-radius: 5px;

    & .MuiGrid-grid-xs-12{
      padding: 25px 15px;
    }
  }

  ${props => props.theme.breakpoints.down('xs')} {
    text-align: center;

    &.mainData .MuiGrid-grid-xs-12{
      margin-bottom: 20px;
    }
  }
  ${props => props.theme.breakpoints.up('sm')} {
    &.mainLabelSearch{
      margin: 75px 0 0 0;
    }
    &.mainData .MuiGrid-grid-xs-12{
      position: relative;
    }
    &.mainData .MuiGrid-grid-xs-12{
      padding: 35px 70px 150px 70px;

      &:first-of-type{
        padding: 35px 15px 150px 15px;
      }

      &:after{
        position: absolute;
        content: '';
        right: 0;
        top: 40px;
        width: 1px;
        height: 45px;
        background: ${props => props.theme.palette.blackGrayBrand.white};
        opacity: .5;
      }
      &:last-of-type:after{
        display: none;
      }
    }
    &.mainDefaultText{
      transform: translateY(-50%);

      & .MuiGrid-grid-xs-12{
        position: relative;
        padding: 35px 25px;

        &:first-of-type:after{
          position: absolute;
          content: '';
          right: 0;
          top: 50%;
          width: 1px;
          height: 50%;
          background: ${props => props.theme.palette.blackGrayBrand.gray2};
          transform: translateY(-50%);
        }
      }
    }
  }
`
export const BoxItem = styled(Box)`
`
export const LocationIcon = styled(LocationCityIcon)`
  color: ${props => props.theme.palette.blackGrayBrand.white};
  font-size: 20px;
  margin-right: 10px;
`
