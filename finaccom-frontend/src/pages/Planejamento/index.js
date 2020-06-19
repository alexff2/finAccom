import React, { useEffect, useState } from 'react'
import { FormSelect, Modal } from 'materialize-css'

import "./style.css"
import ModalCadPlan from './modaCadPlan'
import PlanItens from './planItens'

export default function Planejamento() {
  const [ plan, setPlan ] = useState([{
    description: "Planejamento inicial",
    month: "6 meses",
    status: "Finalizado"
  }, {
    description: "Primeiro semestre 2020",
    month: "6 meses",
    status: "Iniciado"
  },{
    description: "Outro teste",
    month: "8 meses",
    status: "Lançamento"
  }])

  useEffect(()=>{
    const select = document.querySelectorAll('.select')
    FormSelect.init(select)

    const modal = document.querySelectorAll('.modal')
    Modal.init(modal)
  }, [])
  
  function handlePlanItens() {
    document.getElementById('idPlan').style.display = 'none'
    document.getElementById('idPlanItens').style.display = 'block'
  }

  function handlePlanos ( data ) {
    if (data.status === "Finalizado") {
      return (
      <tr>
        <td>{data.description}</td>
        <td>{data.month}</td>
        <td className="red-text">{data.status}</td>
      </tr>
    )}
    if (data.status === "Iniciado") {
      return (
      <tr>
        <td>{data.description}</td>
        <td>{data.month}</td>
        <td className="green-text">{data.status}</td>
        <button className="btn">
          Finalizar
        </button>
      </tr>
    )}
    if (data.status === "Lançamento") {
      return (
      <tr onClick={handlePlanItens}>
        <td>{data.description}</td>
        <td>{data.month}</td>
        <td className="blue-text">{data.status}</td>
        <button className="btn">
          Iniciar
        </button>
      </tr>
    )}
  }

  return (
    <>
      <div className="plan" id="idPlan">

        <nav>
          <div className="nav-wrapper orange row">
            <div className="col s9 offset-s1">
              <div className="breadcrumb">Planejamento</div>
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
              {plan.map(item => handlePlanos(item))}
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

      <PlanItens />

      <ModalCadPlan />      
    </>
  )
}