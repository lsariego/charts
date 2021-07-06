import React from 'react'
import styled from 'styled-components'
import { TableRow } from '@material-ui/core'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled(({ backgroundColor, ...restProps }) => <TableRow {...restProps} />)`
  width: 100%;
  background-color: ${({ backgroundColor, theme }) => {
    switch (backgroundColor) {
      case 'gray1':
      case 'gray2':
      case 'gray3':
        return hexToRGBA(theme.palette.blackGrayBrand[backgroundColor], 0.5)
      case 'primaryLight':
        return hexToRGBA(theme.palette.primary.light, 0.5)
    }
  }};
`
