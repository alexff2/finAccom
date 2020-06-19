import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Register = ({ history }) => {
  function handleRegister() {
    history.push('/login')
  }
  return(
    <div className="register white">
      <div className="container">
        <nav className="green center">Cadastro de usuários</nav><br/>
        <span className="red-text">* Coloque suas credenciais abaixo para se registrar</span>
        <form className="form-register">
          <div className="input-field">
            <input type="text" id="name"/>
            <label htmlFor="name">Nome completo</label>
          </div>

          <div className="input-field">
            <input type="email" id="email"/>
            <label htmlFor="email">E-mail</label>
          </div>

          <div className="input-field">
            <input type="password" id="password"/>
            <label htmlFor="password">Senha</label>
          </div>

          <button className="btn" type="button" onClick={handleRegister}>Cadastrar</button>
        </form><br/><br/>
        <Link to="/login"> Voltar</Link>
      </div>
    </div>
  )
}

export default Register