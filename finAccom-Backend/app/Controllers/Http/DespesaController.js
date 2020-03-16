'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Desp = use('App/Models/Despesa')
const PlanItens = use('App/Models/PlanIten')

class DespesaController {
  /**
   * Show a list of all despesas.
   * GET despesas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async index ({ auth }) {
    return await Desp
      .query()
      .where('user_id', '=', auth.user.id)
      .fetch()
  }

  /**
   * Create/save a new despesa.
   * POST despesas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store ({ request, auth }) {
    const data = request.all(['planItens_id, descricao, valor, date'])

    const planItens = PlanItens.findOrFail(data.planItens_id)
    if (planItens){
      await Desp.create({ user_id: auth.user.id, ...data })
    }
  }

  /**
   * Update despesa details.
   * PUT or PATCH despesas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const {planItens_id, descricao, valor, date} = request.all()
    
    if(PlanItens.findOrFail(planItens_id)){

      const desp = await Desp.findOrFail(params.id)
  
      desp.planItens_id = planItens_id
      desp.descricao = descricao
      desp. valor = valor
      desp.date = date
      await desp.save()
      
      return desp
    }
  }

  /**
   * Delete a despesa with id.
   * DELETE despesas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async destroy ({ params }) {
    const desp = await Desp.findOrFail(params.id)

    await desp.delete()
  }
}

module.exports = DespesaController
