import React from 'react';

export default function PlanItens() {
  function handlePlan() {
    document.getElementById('idPlanItens').style.display = 'none'
    document.getElementById('idPlan').style.display = 'block'
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
              <span className="btnNav" onClick={handlePlan}>Finalizar</span>
            </div>
          </div>
        </nav>
        
        <div className="row white">
          <div className="col s10 offset-s1">
            <h4>Lançamento dos itens</h4>
            <form>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" name="" id="descricao" />
                  <label htmlFor="descricao">Descrição</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input type="text" name="" id="valor"/>
                  <label htmlFor="valor">Valor</label>
                </div>
                <div className="input-field col s12 m6">
                  <input type="date" id="vencimento"/>
                  <label htmlFor="vencimento">Vencimento</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m4">
                  <select value="0" id="idTipo1" className="select">
                    <option value="0" disabled>Selecione o tipo 1</option>
                    <option value="D">Despesa</option>
                    <option value="R">Receita</option>
                  </select>
                  <label htmlFor="idTipo1">Despesa/Receita</label>
                </div>
                <div className="input-field col s12 m4">
                  <select value="0" id="idTipo2" className="select">
                    <option value="0" disabled>Selecione o tipo 2</option>
                    <option value="F">Fixo</option>
                    <option value="V">Variável</option>
                  </select>
                  <label htmlFor="idTipo2">Fixo/Variável</label>
                </div>
                <div className="input-field col s12 m4">
                  <select value="0" id="idCat" className="select">
                    <option value="0" disabled>Selecione a categoria</option>
                    <option value="1">Moradia</option>
                    <option value="2">Contas</option>
                    <option value="3">Farmacia</option>
                    <option value="3">Supermercado</option>
                    <option value="3">Cartões</option>
                    <option value="3">Alimentação</option>
                  </select>
                  <label htmlFor="idCat">Categoria</label>
                </div>
              </div>
              <button className="btn waves-effect" type="button">Lançar</button>
            </form><br/><br/>
          </div>
        <div className="col s1"></div>
      </div>
      
      </div>
  );
}
