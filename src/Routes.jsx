import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'
import BuyersProfile from './pages/BuyersProfile'

/**
 * The Routes' component.
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route component={BuyersProfile} path="/guia" />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
