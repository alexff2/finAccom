import React from 'react'
import { Link } from 'react-router-dom'

import { authLogin } from '../../services/auth'

import './style.css'

const login = ({ history }) => {
  function handleLogin () {
    authLogin('asdasd')
    history.push('/')
  }
  return(
    <div className="login">
      <div className="container-login">
        <nav className="green">
          <div className="center">Digite suas credenciais</div>
        </nav>
        <form className="form-login">
          <div className="input-field">
            <input type="email" id="email"/>
            <label htmlFor="email">Email</label>
          </div>
          
          <div className="input-field">
            <input type="password" id="senha"/>
            <label htmlFor="senha">Senha</label>
          </div>
          
          <button className="btn" onClick={handleLogin} type="button">Entrar</button><br/><br/>
          <span>Não tem registro? <Link to="/register"> Registrar-se</Link></span>
        </form>
      </div>
    </div>
  )
}
export default login

