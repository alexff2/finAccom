import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import Routes from './routes'
import {isAuthenticated} from './services/auth'

//Routes publics
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <RouteAuth />
      </Switch>
    </BrowserRouter>
  )
}

const RouteAuth = () => isAuthenticated() ? <Routes /> : <Redirect to="/login"/>

export default App
