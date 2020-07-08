'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Rotas de login/registro
Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')

//
//Rotas de planejamento
Route.group(()=>{
  Route.resource('planejamento','PlanejamentoController').apiOnly().except('show')
}).middleware(['auth'])

//Rota de modificação de status de planejamento
Route.put('planejamento/status/:id', 'PlanejamentoController.modifyStatus').middleware(['auth'])

//Rotas de categorias
Route.group(()=>{
  Route.resource('categoria','CategoriaController').apiOnly().except('show')
}).middleware(['auth'])

//Rotas de planejamento_itens
Route.group(()=>{
  Route.resource('planitens','PlanItenController').apiOnly().except('index')
}).middleware(['auth'])

//Rotas de despesas
Route.group(()=>{
  Route.resource('desp','DespesaController').apiOnly().except('show')
}).middleware(['auth'])

//Rotas de receita
Route.group(()=>{
  Route.resource('rec','ReceitaController').apiOnly().except('show')
}).middleware(['auth'])
