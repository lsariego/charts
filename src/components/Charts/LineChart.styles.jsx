import styled, { createGlobalStyle } from 'styled-components'
import { Box } from '@material-ui/core'

export const GlobalStyle = createGlobalStyle`
  .highcharts-credits, .highcharts-legend-item {
    display: none !important;
  }
`
export const BoxWrapper = styled(Box)``
