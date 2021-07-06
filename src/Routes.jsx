import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'

/**
 * The Routes' component.
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* FIXME: These routes are just examples, you can take them as references to make your owns. */}
        <Route exact component={HomePage} path="/" />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
