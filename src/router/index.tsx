import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'

function AppRouter() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
    </Switch>
  )
}

export default AppRouter