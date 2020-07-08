import React, { useEffect } from 'react'
import { Modal, FormSelect } from 'materialize-css'

const Receitas = () => {
  useEffect(()=>{
    const modal = document.querySelectorAll('.modal')
    const select = document.querySelectorAll('.select')
    Modal.init(modal)
    FormSelect.init(select)
  }, [])
  return (
    <>
      <div className="white">
        <nav className="row green">
          <div className="title-componet col s10 offset-s1">Receitas</div>
        </nav>
        <div className="row">
          <table className="highlight col s10 offset-s1">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor previsto</th>
                <th>Valor real</th>
                <th>Diferença</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moradia</td>
                <td>R$ 500,00</td>
                <td>R$ 00</td>
                <td>R$ 00</td>
                <td><button className="btn-floating waves-effect waves-light green">
                  <i className="material-icons">beenhere</i>
                </button></td>
              </tr>
              <tr>
                <td>Texto um pouco maior</td>
                <td>R$ 500,00</td>
                <td>R$ 00</td>
                <td>R$ 00</td>
                <td><button className="btn-floating waves-effect waves-light green">
                  <i className="material-icons">beenhere</i>
                </button></td>
              </tr>
              <tr>
                <td>Texto um pouco maior</td>
                <td>R$ 500,00</td>
                <td>R$ 00</td>
                <td>R$ 00</td>
                <td><button className="btn-floating waves-effect waves-light green">
                  <i className="material-icons">beenhere</i>
                </button></td>
              </tr>
              <tr>
                <td>Texto um pouco maior</td>
                <td>R$ 500,00</td>
                <td>R$ 00</td>
                <td>R$ 00</td>
                <td><button className="btn-floating waves-effect waves-light green">
                  <i className="material-icons">beenhere</i>
                </button></td>
              </tr>
              <tr>
                <td>Moradia</td>
                <td>R$ 500,00</td>
                <td>R$ 00</td>
                <td>R$ 00</td>
                <td><button className="btn-floating waves-effect waves-light green">
                  <i className="material-icons">beenhere</i>
                </button></td>
              </tr>
              <tr>
                <td>Texto um pouco maior</td>
                <td>R$ 500,00</td>
                <td>R$ 00</td>
                <td>R$ 00</td>
                <td><button className="btn-floating waves-effect waves-light green">
                  <i className="material-icons">beenhere</i>
                </button></td>
              </tr>
              <tr>
                <td>Texto um pouco maior</td>
                <td>R$ 500,00</td>
                <td>R$ 00</td>
                <td>R$ 00</td>
                <td><button className="btn-floating waves-effect waves-light green">
                  <i className="material-icons">beenhere</i>
                </button></td>
              </tr>
              <tr>
                <td>Texto um pouco maior</td>
                <td>R$ 500,00</td>
                <td>R$ 00</td>
                <td>R$ 00</td>
                <td><button className="btn-floating waves-effect waves-light green">
                  <i className="material-icons">beenhere</i>
                </button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </div>

      <div className="fixed-action-btn">
        <button 
          className="
            btn-floating 
            btn-large 
            waves-effect 
            waves-light 
            green 
            modal-trigger"
          data-target="modalcad"
          >
          <i className="material-icons">add</i>
        </button>
      </div>

      <div className="modal" id="modalcad">
        <div className="modal-content">
          <h4>Cadastro de receitas</h4>
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
                <input type="date"/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m4">
                <select value="0" id="idPlan" className="select">
                  <option value="0" disabled>Selecione um planejamento</option>
                  <option value="1">Valor 1</option>
                  <option value="2">Valor 2</option>
                  <option value="3">Valor 3</option>
                  <option value="3">Valor 4</option>
                  <option value="3">Valor 5</option>
                  <option value="3">Valor 6</option>
                </select>
                <label htmlFor="idPLan">Planejamento</label>
              </div>
              <div className="input-field col s12 m4">
                <select value="0" id="idCat" className="select">
                  <option value="0" disabled>Selecione uma Categoria</option>
                  <option value="1">Valor 1</option>
                  <option value="2">Valor 2</option>
                  <option value="3">Valor 3</option>
                  <option value="3">Valor 4</option>
                  <option value="3">Valor 5</option>
                  <option value="3">Valor 6</option>
                </select>
                <label htmlFor="idCat">Categoria</label>
              </div>
              <div className="input-field col s12 m4">
                <select value="0" id="idLoc" className="select">
                  <option value="0" disabled>Selecione um Local</option>
                  <option value="1">Valor 1</option>
                  <option value="2">Valor 2</option>
                  <option value="3">Valor 3</option>
                  <option value="3">Valor 4</option>
                  <option value="3">Valor 5</option>
                  <option value="3">Valor 6</option>
                </select>
                <label htmlFor="idLoc">Local</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button 
            className="
              modal-action 
              modal-close 
              waves-effect 
              waves-green 
              btn"
            data-target="modal"
            >
              Inserir
          </button>
        </div>
      </div>
    </>  
  )
}

export default Receitas
