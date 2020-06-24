import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import api from '../../services/api'
import { authLogin, userLogin } from '../../services/auth'

import './style.css'

const login = ({ history }) => {
  
  const handleLogin = async ( user ) => {
    try {
      const { data } = await api.post('authenticate', user)
      authLogin(data.token)
      userLogin(JSON.stringify({
        "username": data.username,
        "email": user.email
      }))
      history.push('/')
    } catch (error) {
      alert('Falha no login, tente novamente!')
    }
  }

  const validation = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('Campo de email obrigatório'),
    password: yup
      .string()
      .min(4, 'A senha deve conter no mínimo 4 caracteres')
      .required('Campo senha obrigatório')
  })
  return(
    <div className="login">
      <div className="container-login">
        <nav className="green">
          <div className="center">Digite suas credenciais</div>
        </nav>
        <Formik 
          onSubmit={handleLogin}
          validationSchema={validation}
          initialValues={{
            email: '',
            password: ''
          }}
        >
          <Form className="form-login">
            <div className="input-field">
              <Field type="email" id="email" name="email"/>
              <span className="red-text">
                <ErrorMessage name="email"/>
              </span>
              <label htmlFor="email">Email</label>
            </div>
            
            <div className="input-field">
              <Field type="password" id="senha" name="password"/>
              <span className="red-text">
                <ErrorMessage name="password"/>
              </span>
              <label htmlFor="senha">Senha</label>
            </div>
            
            <button className="btn" type="submit">Entrar</button><br/><br/>
            <span>Não tem registro? <Link to="/register"> Registrar-se</Link></span>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
export default login

