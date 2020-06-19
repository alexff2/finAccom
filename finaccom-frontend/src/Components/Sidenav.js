import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

import { logout } from '../services/auth'
import loginTeste from '../assets/loginteste.png'
import bgSidenav from '../assets/bgSidenav.jpg'

const Sidenav = ()=> {
  React.useEffect(()=>{
    const sidenav = document.querySelectorAll('.sidenav')
    M.Sidenav.init(sidenav, {})
  }, [])

  function handleLogout () {
    logout()
  }
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
      <li><Link className="waves-effect" to="/receitas">Receitas</Link></li>
      <li><Link className="waves-effect" to="/despesas">Despesas</Link></li>
      <li><Link className="waves-effect" to="/planejamentos">Planejamento</Link></li>
      <li><Link className="waves-effect" to="/categorias">Categorias</Link></li>
      <li><div className="divider"></div></li>
      
      <li>
        <Link onClick={handleLogout} className="waves-effect" to="/login">Sair</Link>
      </li>
    </ul>
    <button data-target="slide-out" className="sidenav-trigger">
      <i className="material-icons">menu</i>
    </button>
  </>        
  )
}

export default Sidenav