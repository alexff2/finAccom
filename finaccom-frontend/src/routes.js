import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/regiter" exact component={Register}/>
    </Switch>
  </BrowserRouter>
)

export default Routes