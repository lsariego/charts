import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  fontWeights: {
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    900: 900
  },
  palette: {
    brand: {
      primary: {
        // When we have the colors in scale, then we could change the primary.main to primary[50] and primary.dark to primary[35]
        // the scale correspond to the color percentage
        95: '#E6F0FF',
        80: '#99C2FF',
        65: '#4D94FF',
        50: '#0064FF', // Primary
        35: '#0047B3', // Primary hover
        20: '#002966',
        10: '#001C41' // Footer chilecompra
      },
      blueRibbon: '#0064FF',
      blueRibbonLight: '#0064FF26',
      persianBlue: '#2244BF',
      pickledBluewood: '#2E384D', // Black1
      midnight: '#001C41', // Footer chilecompra
      shuttleGray: '#5A6872' // Placeholder color
    },
    blackGrayBrand: {
      black1: '#2E384D',
      black2: '#536479', // Before color #69707F, some design still have this color so I can identify which color it corresponds to with this comment
      black3: '#768AA2', // Before color #8798AD
      gray1: '#B3BECB', // Before color #BFC5D2
      gray2: '#D1D8E0', // Before color #F4F6FC
      gray3: '#F0F2F5',
      white: '#FFFFFF'
    },
    // The dark version are used to hover buttons and main for active
    primary: {
      light: '#E5F0FF',
      main: '#0064FF',
      dark: '#0047B3' // Before color #004EC6
    },
    default: {
      light: '#E1E5EA',
      main: '#768AA2',
      dark: '#536479'
    },
    error: {
      light: '#F9D2D2',
      main: '#E22C2C', // Before color #D63649
      dark: '#9D1515' // FIXME: change to the color by UX definition
    },
    success: {
      light: '#DCF5DB',
      main: '#2FA12B', // Before color #33AC2E
      dark: '#237920' // FIXME: change to the color by UX definition
    },
    warning: {
      light: '#FDF0CE',
      main: '#F7C137',
      dark: '#AB7D07' // FIXME: change to the color by UX definition
    },
    info: {
      light: '#D2F4F9',
      main: '#17A2B8', // FIXME: check with UX if info color must remain or deleted
      dark: '#148C9F'
    },
    MP: {
      black: '#000000',
      congressBlue: '#034C87',
      corduroy: '#585959',
      endeavour: '#0667B4',
      mountainMeadow: '#1ABC9C',
      regalBlue: '#044076',
      veniceBlue: '#065C94',
      primary: {
        main: '#337AB7',
        hover: '#044076'
      },
      default: {
        main: '#888888',
        hover: '#044076'
      }
    }
  },
  typography: {
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
