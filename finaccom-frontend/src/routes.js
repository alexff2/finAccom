import React from 'react'
import { Route } from 'react-router-dom'

//Componets
import Header from './Components/Header';
import Sidenav from './Components/Sidenav'

//Routes private
import Home from './pages/Home'
import Receitas from './pages/Receitas'
import Despesas from './pages/Despesas'
import Planejamento from './pages/Planejamento'
import Categoria from './pages/Categoria'

const RoutesPrivete = () => (
  <>
    <Route path="/" exact component={Home}/>
    <Route path="/receitas" exact component={Receitas}/>
    <Route path="/despesas" exact component={Despesas}/>
    <Route path="/planejamentos" exact component={Planejamento}/>
    <Route path="/categorias" exact component={Categoria}/>
  </> 
)

const Routes = () => (
  <main>
    <Header />
    <Sidenav />
    <RoutesPrivete />
  </main>
)

export default Routes