'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Rotas de login/registro
Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')


//Rotas de planejamento
Route.group(()=>{
  Route.resource('planejamento','PlanejamentoController').apiOnly().except('show')
}).middleware(['auth'])

//Rotas de planejamento_itens
Route.group(()=>{
  Route.resource('plan','PlanItenController').apiOnly().except('show')
}).middleware(['auth'])

//Rotas de despesas
Route.group(()=>{
  Route.resource('desp','DespesaController').apiOnly().except('show')
}).middleware(['auth'])

//Rotas de receita
Route.group(()=>{
  Route.resource('rec','ReceitaController').apiOnly().except('show')
}).middleware(['auth'])