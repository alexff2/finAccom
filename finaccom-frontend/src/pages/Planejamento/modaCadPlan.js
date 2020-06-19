import React from 'react'

export default function CadPlan() {

  function handleSubModal(e) {
    e.preventDefault()
  }

  return (
    <div className="modal" id="cadPlanModal">
      <div className="modal-content">
        <h4>Cadastro de planejamento</h4>
        <form onSubmit={handleSubModal}>
          <div className="input-field">
            <input type="text" id="descricao" />
            <label htmlFor="descricao">Descrição</label>
          </div>
          <div className="row">
            <div className="input-field col s12 m6">
              <input type="date" id="monthInicial"/>
              <label htmlFor="monthInicial">Data Inicial</label>
            </div>
            <div className="input-field col s12 m6">
              <input type="number" id="month"/>
              <label htmlFor="month">Duração em meses</label>
            </div>
          </div>
          <button 
            type="submit" 
            className="btn modal-action modal-close waves-effect"
            data-target="modal"
          >Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
