import React from 'react'

const Despesas = ()=> {
  return (
    <>
      <div className="table">
        <div className="table-title white-text red">
          Despesas
        </div>
        <table className="highlight">
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
              <td><button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">beenhere</i>
              </button></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">beenhere</i>
              </button></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">beenhere</i>
              </button></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">beenhere</i>
              </button></td>
            </tr>
            <tr>
              <td>Moradia</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">beenhere</i>
              </button></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">beenhere</i>
              </button></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">beenhere</i>
              </button></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">beenhere</i>
              </button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="fixed-action-btn">
        <button className="btn-floating btn-large waves-effect waves-light red righ-align">
          <i className="material-icons">add</i>
        </button>
      </div>
    </>
  )
}

export default Despesas