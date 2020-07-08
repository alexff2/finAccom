import React, {useEffect, useState} from 'react';
import { Modal } from 'materialize-css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

import api from '../../services/api'
import {getToken} from '../../services/auth'

export default function Categoria() {
  const [ categoria, setCategoria ] = useState([])
  const [ update, setUpdate ] = useState([])
  
  const token = getToken()
  
  useEffect(()=>{
    const modal = document.querySelectorAll('.modal')
    Modal.init(modal)

    api.get('categoria', {
      headers: {
        Authorization: `Bearer ${token}`
      }}).then( resp => {
        setCategoria(resp.data)
      }).catch( error => alert('Servidor indisponível '+error))
  },[token])

  const handleSubmit = async ( item )=> {
    const { data } = await api.post('categoria', item, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setCategoria([...categoria, data])
  }

  const validation = yup.object().shape({
    descricao: yup.string().required('Campo obrigatório')
  })

  const handleUpdateCat = async ( item ) => {
    const {data} = await api.put(`categoria/${item.id}`, item, {
      headers: {
        Authenticate: `Bearer ${token}`
      }
    })
    setCategoria(categoria.map( value => value.id === data.id ? data : value))
  }

  const deleteCat = async ( id )=> {
    const { data } = await api.delete(`categoria/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setCategoria( categoria.filter( item => item.id !== data ))
  }

  return (
    <div className="white">
      <nav className="row blue">
        <div className="col s1 offset-s1 title-componet">Categoria</div>
      </nav>
      <br/>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validation}
        initialValues={{ descricao: '' }}
      >
        <Form>
          <div className="row">
            <Field type="text" name="descricao" className="col s4 offset-s1"/>
            <ErrorMessage name="descricao"/>
            <button className="btn col s2" type="submit" >Cadastrar</button>
          </div>
        </Form>
      </Formik><br/>

      <div className="row">
        <table className="highlight col s6 offset-s1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
          {categoria.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.descricao}</td>
              <td>
                <i 
                  className="material-icons bt-defult modal-trigger" 
                  data-target="modalCategoria"
                  onClick={e => setUpdate([item])}>
                  edit
                </i>
                <i 
                  className="material-icons bt-defult" 
                  onClick={e => deleteCat(item.id)}>
                  delete_forever
                </i>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div><br/><br/>

      <div className="modal" id="modalCategoria">
        {update.map((item) => (
          <div className="modal-content" key={item.id}>
            <h4>Edição de categoria</h4>
            <Formik
              onSubmit={handleUpdateCat}
              validationSchema={validation}
              initialValues={{ 
                id: item.id,
                descricao: item.descricao
              }}
            >
              <Form>
                <div className="row">
                  <Field type="hidden" name="id"/>
                  <Field type="text" name="descricao" className="col s4"/>
                  <button className="btn modal-close" type="submit" >Editar</button>
                </div>
                <span className="red-text">
                  <ErrorMessage name="descricao"/>
                </span>
              </Form>
            </Formik>
          </div>
        ))}
      </div>
    </div>
  );
}
