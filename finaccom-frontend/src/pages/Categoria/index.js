import React from 'react';

export default function Categoria() {
  return (
    <div className="white">
      <nav className="row blue">
        <div className="col s1 offset-s1">Categoria</div>
      </nav><br/>
      <form>
        <div className="row">
          <input type="text" name="categoria" id="idcat" className="col s4 offset-s1"/>
          <button className="btn col s2" type="button" >Cadastrar</button>
        </div>
      </form><br/>
      <div className="row">
        <table className="highlight col s6 offset-s1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Moradia</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Energia</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Água e esgoto</td>
            </tr>
          </tbody>
        </table>
      </div><br/><br/>
    </div>
  );
}
