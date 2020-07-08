import React, { useEffect, useState } from 'react';
import { FormSelect, Modal } from 'materialize-css'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

import api from '../../services/api'
import { getToken } from '../../services/auth'

import { FormatData } from '../../functions/functions'

export default function PlanItens({ history, location }) {
  const [ categoria, setCategoria ] = useState([])
  const [ planitens, setPlanitens ] = useState([])
  const [ update, setUpdate ] = useState([])
  
  if (!location.state){
    history.push('/planejamentos')
  }
  
  const token = getToken()

  useEffect(()=>{
    api.get('categoria', {
      headers: {
        Authorization: `Bearer ${token}`
      }}).then( resp => setCategoria(resp.data)
      ).catch( error => alert('Servidor indisponível '+error))

    api.get(`planitens/${location.state}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }}).then( resp => setPlanitens(resp.data)
      ).catch( error => alert('Servidor indisponível '+error))
  },[token, location.state])

  useEffect(()=>{
    const select = document.querySelectorAll('select')
    FormSelect.init(select)

    const modal = document.querySelectorAll('.modal')
    Modal.init(modal)
  },[categoria])
  
  useEffect(()=>{
    const select = document.querySelectorAll('select')
    FormSelect.init(select)
  },[update])
  

  const validation = yup.object().shape({
    description: yup.string().required()
  })

  const handleSubmit = async ( values, { resetForm } ) => {
    try {
      const objValues = { plan_id: location.state,...values }
      const { data } = await api.post('planitens', objValues, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      if(data.error){
        alert(data.error)
      }else{
        setPlanitens([...planitens, data])
        resetForm()
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleUpdate = async ( values ) => {
    try {
      const { data } = await api.put(`planitens/${values.id}`, values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setPlanitens( planitens.map( item => item.id === data.id ? data : item) ) 
    } catch (error) {
      alert(error)
    }
  }

  const deletePlan = async ( id ) => {
    try {
      const { data } = await api.delete(`planitens/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setPlanitens( planitens.filter( item => item.id !== data))
      
    } catch (error) {
      alert(error)
    }
  }

  const savePlan = async () => {
    const {data} = await api.put(`planejamento/status/${location.state}`, {
      status: 'Iniciado'
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // history.push('/planejamentos')
    console.log(data)
  }
  
  return (
    <div className="planItens" id="idPlanItens">
        
      <nav>
        <div className="nav-wrapper orange row">
          <div className="col s9 offset-s1">
            <span className="breadcrumb">Planejamento</span>
            <span className="breadcrumb">Lançamentos</span>
          </div>
          <div className="col s1">
            <span 
              className="btnNav modal-trigger" 
              data-target="modalAviso"
            >Finalizar</span>
          </div>
        </div>
      </nav>
        
      <div className="row white">
      
        <div className="col s10 offset-s1">
      
          <h4>Lançamento dos itens - {location.state}</h4>
          
          {location.state ? 
          <Formik
            onSubmit={handleSubmit}
            validationSchema={validation}
            initialValues={{
              description: '',
              valor: '',
              vencimento: '',
              tipo1: '',
              tipo2: '',
              cat_id: ''
            }}
          >
            <Form>
              <div className="row">
                <div className="input-field col s12">
                  <Field type="text" name="description" id="descricao" />
                  <span className="red-text"><ErrorMessage name="description" /></span>
                  <label htmlFor="descricao">Descrição</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <Field type="text" name="valor" id="valor" />
                  <span className="red-text"><ErrorMessage name="valor" /></span>
                  <label htmlFor="valor">Valor</label>
                </div>
                <div className="input-field col s12 m6">
                  <Field type="date" name="vencimento" />
                  <span className="red-text"><ErrorMessage name="vencimento" /></span>
                  <label>Vencimento</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m4">
                  <Field as="select" name="tipo1">
                    <option value="" disabled>Selecione o tipo 1</option>
                    <option value="D">Despesa</option>
                    <option value="R">Receita</option>
                  </Field>
                  <label>Despesa/Receita</label>
                </div>
                <div className="input-field col s12 m4">
                  <Field as="select" name="tipo2">
                    <option value="" disabled>Selecione o tipo 2</option>
                    <option value="F">Fixo</option>
                    <option value="V">Variável</option>
                  </Field>
                  <label>Fixo/Variável</label>
                </div>
                <div className="input-field col s12 m4">
                  <Field as="select" name="cat_id">
                    <option value="" disabled>Selecione a categoria</option>
                    {categoria.map( item => (
                      <option value={item.id} key={item.id}>{item.descricao}</option>
                    ))}
                  </Field>
                  <label>Categoria</label>
                </div>
              </div>
              <button className="btn waves-effect" type="submit">Lançar</button>
            </Form>
          </Formik> : <span></span>}
          <br/><br/>

          {planitens[0] ?
          <table className="highlight responsive-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>ID_PLAN</th>
                <th>ID_CAT</th>
                <th>DESCRICAO</th>
                <th>VALOR</th>
                <th>VENCIMENTO</th>
                <th>DESP/REC</th>
                <th>FIXO/VARIAVEL</th>
              </tr>
            </thead>
            <tbody>
            {planitens.map( item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.plan_id}</td>
                <td>{item.cat_id}</td>
                <td>{item.description}</td>
                <td>{item.valor}</td>
                <td>{FormatData(item.vencimento)}</td>
                <td>{item.tipo1}</td>
                <td>{item.tipo2}</td>
                  <td>
                  <i 
                    className="material-icons bt-defult modal-trigger" 
                    data-target="updateModalPlanItens"
                    onClick={e => setUpdate([item])}>
                    edit
                  </i>
                  <i 
                    className="material-icons bt-defult" 
                    onClick={e => deletePlan(item.id)}>
                    delete_forever
                  </i>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          : ''}

        </div>

        <div className="col s1"></div>
      
      </div>

      <div className="modal" id="updateModalPlanItens">
        <div className="modal-content">
          <h6>Edição do item do planejamento</h6>
          {update.map( item => (    
          <Formik
            onSubmit={handleUpdate}
            validationSchema={validation}
            initialValues={{
              id: item.id,
              plan_id: item.plan_id,
              description: item.description,
              valor: item.valor,
              vencimento: FormatData(item.vencimento),
              tipo1: item.tipo1,
              tipo2: item.tipo2,
              cat_id: item.cat_id
            }}
            key={item.id}
          >
            <Form>
            <Field type="hidden" name="id" />
            <Field type="hidden" name="plan_id" />
              <div className="row">
                <div className="input-field col s12">
                  <Field type="text" name="description" id="descricao" />
                  <span className="red-text"><ErrorMessage name="description" /></span>
                  <label htmlFor="descricao">Descrição</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <Field type="text" name="valor" id="valor" />
                  <span className="red-text"><ErrorMessage name="valor" /></span>
                  <label htmlFor="valor">Valor</label>
                </div>
                <div className="input-field col s12 m6">
                  <Field type="date" name="vencimento" />
                  <span className="red-text"><ErrorMessage name="vencimento" /></span>
                  <label>Vencimento</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m4">
                  <Field as="select" name="tipo1">
                    <option value="" disabled>Selecione o tipo 1</option>
                    <option value="D">Despesa</option>
                    <option value="R">Receita</option>
                  </Field>
                  <label>Despesa/Receita</label>
                </div>
                <div className="input-field col s12 m4">
                  <Field as="select" name="tipo2">
                    <option value="" disabled>Selecione o tipo 2</option>
                    <option value="F">Fixo</option>
                    <option value="V">Variável</option>
                  </Field>
                  <label>Fixo/Variável</label>
                </div>
                <div className="input-field col s12 m4">
                  <Field as="select" name="cat_id">
                    <option value="" disabled>Selecione a categoria</option>
                    {categoria.map( item => (
                      <option value={item.id} key={item.id}>{item.descricao}</option>
                    ))}
                  </Field>
                  <label>Categoria</label>
                </div>
              </div>
              <button 
                className="btn modal-action modal-close waves-effect" 
                type="submit"
                data-target="modal"
              >Alterar</button>
            </Form>
          </Formik>
          ))}
        </div>
      </div>
    
      <div className="modal" id="modalAviso">
        <div className="modal-content">
          <h1>Atenção</h1>
          <p>
            Tem certeza que deseja realizar essa operação? (Após finalizar, você não 
            conseguira mais realizar alterações nos itens)
          </p>
        </div>
        <div className="modal-footer">
          <button 
            className="modal-close waves-effect waves-green btn-flat" 
            type="button"
          >NÃO</button>
          <button 
            className="modal-close waves-effect waves-green btn-flat" 
            type="button"
            onClick={savePlan}
          >SIM</button>
        </div>
      </div>
    
    </div>
  );
}