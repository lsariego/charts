import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './config/settings/routes'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'

/**
 * The Routes' component.
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={HomePage} path={routes.root} />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
