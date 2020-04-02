import React from 'react'
import Chart from 'react-google-charts'

import './style.css'

const Home = () => {
  return (
  <>
    <div className="row">
      <div className="col s6 m6 l6 xl3">
        <div className="card-panel-dash">
          <div className="row">
            <div className="col s4">
              <i className="medium material-icons circle green img_card">trending_up</i>
            </div>
            <div className="col s8">
              <h6 className="grey-text right-align">Receitas</h6><br/>
              <h6 className="green-text right-align text-card">R$ 5.187,00</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="col s6 m6 l6 xl3">
        <div className="card-panel-dash">
          <div className="row">
            <div className="col s4">
              <i className="medium material-icons circle red img_card">trending_down</i>
            </div>
            <div className="col s8">
              <h6 className="grey-text right-align">Despesas</h6><br/>
              <h6 className="red-text right-align text-card">R$ 1.195,35</h6>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col s6 m6 l6 xl3">
        <div className="card-panel-dash">
          <div className="row">
            <div className="col s4">
              <i className="medium material-icons circle blue img_card">attach_money</i>
            </div>
            <div className="col s8">
              <h6 className="grey-text right-align">Saldo Atual</h6><br/>
              <h6 className="blue-text right-align text-card">R$ 3.187,00</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="col s6 m6 l6 xl3">
        <div className="card-panel-dash">
          <div className="row">
            <div className="col s4">
              <i className="medium material-icons circle orange img_card">attach_money</i>
            </div>
            <div className="col s8">
              <h6 className="grey-text right-align">Mês anterior</h6><br/>
              <h6 className="orange-text right-align text-card">R$ 3.187,00</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col s12 m12 l12 xl6">
        <div className="card-chart">
          <div style={{ display: 'flex', maxWidth: 900 }}>
            <Chart
              width={400}
              height={300}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000],
              ]}
              options={{
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '30%' },
                hAxis: {
                  title: 'Total Population',
                  minValue: 0,
                },
                vAxis: {
                  title: 'City',
                },
              }}
              legendToggle
            />
          </div>
        </div>
      </div>
      <div className="col s12 m12 l12 xl6">
        <div className="card-chart">
          <Chart
            width={'450px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7],
            ]}
            options={{
              title: 'My Daily Activities',
              // Just add this option
              is3D: true,
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </div>
      </div>
    </div>

    <div className="row">
    <div className="col s12 m12 l6">
      <div className="card-table">
        <div className="red-text center-align">Despesas</div>
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
              <td><a className="btn-floating waves-effect waves-light red" href="#!">
                <i className="material-icons">beenhere</i>
              </a></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><a className="btn-floating waves-effect waves-light red" href="#!">
                <i className="material-icons">beenhere</i>
              </a></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><a className="btn-floating waves-effect waves-light red" href="#!">
                <i className="material-icons">beenhere</i>
              </a></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><a className="btn-floating waves-effect waves-light red" href="#!">
                <i className="material-icons">beenhere</i>
              </a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="col s12 m12 l6">
      <div className="card-table">
        <div className="green-text center-align">Receitas</div>
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
              <td><a className="btn-floating waves-effect waves-light green" href="#!">
                <i className="material-icons">beenhere</i>
              </a></td>
            </tr>
            <tr>
              <td>Texto um pouco maior</td>
              <td>R$ 500,00</td>
              <td>R$ 00</td>
              <td>R$ 00</td>
              <td><a className="btn-floating waves-effect waves-light green" href="#!">
                <i className="material-icons">beenhere</i>
              </a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </>
  )
}

export default Home
