// TODO: Homepage component its active for later use (next Sprint) for actual Homepage

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './config/settings/routes'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'
import BuyersProfilePage from './pages/BuyersProfile'

/**
 * The Routes' component.
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={BuyersProfilePage} path={routes.organization} />
        <Route exact component={HomePage} path={routes.root} />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
