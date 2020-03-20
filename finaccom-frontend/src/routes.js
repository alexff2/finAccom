import React from 'react'
import { Route } from 'react-router-dom'

//Componets
import Sidenav from './Components/Sidenav'

//Routes private
import Home from './pages/Home'
import Receitas from './pages/Receitas'
import Despesas from './pages/Despesas'
import Planejamento from './pages/Planejamento'

const RoutesPrivete = () => (
  <>
    <Route path="/" exact component={Home}/>
    <Route path="/Receitas" exact component={Receitas}/>
    <Route path="/Despesas" exact component={Despesas}/>
    <Route path="/Planejamento" exact component={Planejamento}/>
  </> 
)

const Routes = () => (
  <main>
    <Sidenav />
    <RoutesPrivete />
  </main>
)

export default Routes