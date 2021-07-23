import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './config/settings/routes'
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
        <Route component={BuyersProfile} path={routes.organization} />
        <Route exact component={HomePage} path={routes.root} />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
