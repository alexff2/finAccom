import React, { useEffect, useState } from 'react'
import { Modal } from 'materialize-css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

import api from '../../services/api'
import { getToken } from '../../services/auth'
import { FormatData } from '../../functions/functions'

export default function Planejamento({ history }) {
  const [ plan, setPlan ] = useState([])
  const [ update, setUpdate ] = useState([])

  const token = getToken()

  useEffect(()=>{
    const modal = document.querySelectorAll('modal')
    Modal.init(modal)

    api.get('planejamento', {
      headers: {
        Authentication: `Bearer ${token}`
      }
    }).then( resp => {
      const planejamento = resp.data 
      setPlan(planejamento.map( item => {
        var { id, description, month, monthInicial, monthFinal, status} = item
        monthInicial = FormatData(monthInicial)
        monthFinal = FormatData(monthFinal)
        return { id, description, month, monthInicial, monthFinal, status}
      }))
    }).catch( error => alert('Erro na conexão, tente novamente!'))
  }, [token])

  const validation = yup.object().shape({
    description: yup.string().required(),
    monthInicial: yup.date().required(),
    month: yup.number().required()
  })
  
  function planItens( id, { target } ) {
    if (target.tagName !== 'I') {
      history.push({
        pathname: '/planejamentos/itens',
        state: id
      })
    }
  }

  function colorStatus ( data ) {
    if (data === "Lançamento") {
      return "blue-text"
    }
    if (data === "Iniciado") {
      return "green-text"
    }
    if (data === "Finalizado") {
      return "red-text"
    }
  }

  const handleSubmit = async ( values, { resetForm } ) => {
    const { data } = await api.post('planejamento', values, {
      headers: {
        Authentication: `Bearer ${token}`
      }
    })
    setPlan([...plan, data])
    resetForm()
  }

  const handleUpdate =  async ( value ) => {
    const { data } = await api.put(`planejamento/${value.id}`, value, {
      headers: {
        Authentication: `Bearer ${token}`
    }})
    
    setPlan( plan.map( item => item.id === data.id ? data : item) )
  }

  const handleDelete = async ( id ) => {
    const { data } = await api.delete(`planejamento/${id}`, {
      headers: {
        Authentication: `Bearer ${token}`
    }})

    setPlan( plan.filter( item => item.id !== data) )
  }

  return (
    <>
      <div className="plan" id="idPlan">

        <nav>
          <div className="nav-wrapper orange row">
            <div className="col s9 offset-s1">
              <div className="breadcrumb ">Planejamento</div>
            </div>
          </div>
        </nav>

        <div className="row white">
          <div className="col s10 offset-s1">
            <table className="highlight responsive-table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Duração</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {plan.map(item => (
                <tr 
                  key={item.id}
                  onClick={item.status === "Lançamento"? 
                  (e) => planItens(item.id,e) 
                  : null}
                >
                  <td>{item.description}</td>
                  <td>{item.month} Meses</td>
                  <td 
                    className={colorStatus(item.status)}
                  >{item.status}</td>
                  {item.status === "Lançamento"?
                  <td>
                    <i
                      className="material-icons bt-defult modal-trigger" 
                      data-target="UpdatePlanModal"
                      onClick={e => setUpdate([item])}
                      >edit</i>
                    <i 
                      className="material-icons bt-defult" 
                      onClick={e => handleDelete(item.id)}
                      >delete_forever</i>
                    </td>
                  : ""}
                </tr>
              ))}
              </tbody>
            </table>
            <br/>
            <br/>
          </div>
          <div className="col s1"></div>
        </div>
        
        <div className="fixed-action-btn">
          <button 
            className="
              btn-floating 
              btn-large 
              waves-effect 
              waves-light 
              orange 
              righ-align
              modal-trigger" 
            data-target="cadPlanModal"
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      
      </div>

      <div className="modal" id="cadPlanModal">
        <div className="modal-content">
          <h4>Cadastro de planejamento</h4>
          <Formik
            onSubmit={handleSubmit}
            validationSchema={validation}
            initialValues={{
              description: '',
              monthInicial: '',
              month: '',
              status: 'Lançamento'
            }}
          >
            <Form>
              <Field type="hidden" name="status" />
              <div className="input-field">
                <Field type="text" id="description" name="description" />
                <span>
                  <ErrorMessage name="description"/>
                </span>
                <label htmlFor="description">Descrição</label>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <Field type="date" id="monthInicial" name="monthInicial"/>
                  <span>
                    <ErrorMessage name="monthInicial"/>
                  </span>
                  <label htmlFor="monthInicial">Data Inicial</label>
                </div>
                <div className="input-field col s12 m6">
                  <Field type="number" id="month" name="month"/>
                  <span>
                    <ErrorMessage name="month"/>
                  </span>
                  <label htmlFor="month">Duração em meses</label>
                </div>
              </div>
              <button 
                type="submit" 
                className="btn modal-action modal-close waves-effect"
                data-target="modal"
              >Cadastrar</button>
            </Form>
          </Formik>
        </div>
      </div>

      <div className="modal" id="UpdatePlanModal">
        <div className="modal-content">
          <h4>Cadastro de planejamento</h4>
          {update.map( item => (
            <Formik
              onSubmit={handleUpdate}
              validationSchema={validation}
              initialValues={{
                description: item.description,
                monthInicial: item.monthInicial,
                month: item.month,
                id: item.id
              }}
              key={item.id}
            >
              <Form>
                <Field type="hidden" name="id" />
                <div className="input-field">
                  <Field type="text" id="description" name="description" />
                  <span>
                    <ErrorMessage name="description"/>
                  </span>
                  <label htmlFor="description">Descrição</label>
                </div>
                <div className="row">
                  <div className="input-field col s12 m6">
                    <Field type="date" id="monthInicial" name="monthInicial"/>
                    <span>
                      <ErrorMessage name="monthInicial"/>
                    </span>
                    <label htmlFor="monthInicial">Data Inicial</label>
                  </div>
                  <div className="input-field col s12 m6">
                    <Field type="number" id="month" name="month"/>
                    <span>
                      <ErrorMessage name="month"/>
                    </span>
                    <label htmlFor="month">Duração em meses</label>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="btn modal-action modal-close waves-effect"
                  data-target="modal"
                >Cadastrar</button>
              </Form>
            </Formik>
          ))}
        </div>
      </div>     
    </>
  )
}