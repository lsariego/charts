import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  fontWeights: {
    // FIXME: This font weights are just examples, you can take them as references to make your own.
    300: 300,
    400: 400,
    500: 500,
    700: 700
  },
  palette: {
    // FIXME: This colors are just examples, you can take them as references to make your own.
    brand: {
      alizarinCrimson: '#E02020',
      bigStone: '#152935',
      black: '#000',
      blueRibbon: '#0064FF',
      paleSky: '#6C757D',
      scienceBlue: '#004EC6',
      shuttleGray: '#5A6268',
      white: '#FFF'
    },
    custom: {
      baliHai: '#8798AD',
      ebony: '#081118',
      ghost: '#CED4DA',
      heather: '#BFC5D2',
      linkWater: '#F4F6FC',
      pattensBlue: '#DAE8FF',
      pickledBlueWood: '#2E384D'
    }
  },
  typography: {
    // FIXME: This font families are just examples, you can take them as references to make your own.
    families: {
      roboto: ['Roboto', 'sans-serif'].join(','),
      robotoMono: ['Roboto+Mono', 'monospace'].join(',')
    },
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    htmlFontSize: 10,
    useNextVariants: true
  }
})

export default theme
