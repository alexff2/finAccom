import React from 'react'
import { Link } from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'

import api from '../../services/api'

import './style.css'

const Register = ({ history }) => {
  
  const handlerSubmit = async values => {
    const resp = await api.post('register',values)
    console.log(resp)
    alert(`Usuário ${resp.data.username} cadastrado com sucesso!`)
    history.push('/login')
  }

  const validation = yup.object().shape({
    username: yup.string()
      .min(4, 'O nome deve conter no minino 4 caracteres')
      .required('Nome do usuário obrigatório'),
    email: yup
      .string()
      .email('O valor do campo deve ser um e-mail')
      .required('E-mail do usuário obritório'),
    password: yup
      .string()
      .min(4, 'A senha deve conter no mínimo 4 caracteres')
      .required('Obrigatório informar a senha'),
  })
  return(
    <div className="register white">
      <div className="container">
        <nav className="green center">Cadastro de usuários</nav><br/>
        <span className="red-text">
          * Coloque suas credenciais abaixo para se registrar
        </span>
        <Formik 
          onSubmit={handlerSubmit}
          validationSchema={validation}
          initialValues={{
            username: '',
            email: '',
            password: ''
          }}
        >
          <Form className="form-register">
            <div className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <Field type="text" id="name" name="username"/>
              <ErrorMessage name="username" />
              <label htmlFor="username">Nome completo</label>
            </div>

            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <Field type="email" id="email" name="email"/>
              <ErrorMessage name="email" />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <Field type="password" id="password" name="password" className="validate"/>
              <ErrorMessage name="password" />
              <label htmlFor="password">Senha</label>
            </div>

            <button className="btn" type="submit">Cadastrar</button>
          </Form>
        </Formik><br/><br/>
        <Link to="/login"> Voltar</Link>
      </div>
    </div>
  )
}

export default Register