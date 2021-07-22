import styled from 'styled-components'

export const Root = styled.div`
  flexgrow: 1;
  background: ${props => props.theme.palette.blackGrayBrand.gray5};
  border: 1px solid ${props => props.theme.palette.blackGrayBrand.gray1};
  border-radius: 5px;
  padding: 5px 15px;

  & p {
    color: ${props => props.theme.palette.blackGrayBrand.gray4};
    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeights[700]};
    font-size: 12px;
    padding: 0;
    margin: 0;
  }
`
