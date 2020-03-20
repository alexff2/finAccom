import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

import loginTeste from '../assets/loginteste.png'
import bgSidenav from '../assets/bgSidenav.jpg'

const Sidenav = ()=> {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems, {})
  })
  return(
  <>
    <ul id="slide-out" className="sidenav sidenav-fixed">
      <li>
        <div className="user-view">
          <div className="background">
            <img src={bgSidenav} alt="backgroudSide"/>
          </div>
          <div><img className="circle" src={loginTeste} alt="imageUser" /></div>
          <div><span className="white-text name">John Doe</span></div>
          <div><span className="white-text email">jdandturk@gmail.com</span></div>
        </div>
      </li>
      <li><Link className="waves-effect" to="/">Dashbord</Link></li>
      <li><Link className="waves-effect" to="/Receitas">Receitas</Link></li>
      <li><Link className="waves-effect" to="/Despesas">Despesas</Link></li>
      <li><Link className="waves-effect" to="/Planejamento">Planejamento</Link></li>
      <li><div class="divider"></div></li>
    </ul>
    <button data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></button>
  </>        
  )
}

export default Sidenav