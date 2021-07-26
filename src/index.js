import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import * as serviceWorker from './serviceWorker'
import storeSingleton from './config/store/store'
import theme from './config/styles/theme'
import Routes from './Routes'

const store = storeSingleton()

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Routes />
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('__root')
)

serviceWorker.unregister()
