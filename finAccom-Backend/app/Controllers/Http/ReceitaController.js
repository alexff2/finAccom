'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Rec = use('App/Models/Receita')
const PlanItens = use('App/Models/PlanIten')

class ReceitaController {
  /**
   * Show a list of all receitas.
   * GET receitas
   *
   * @param {object} ctx
   */
  async index ({ auth }) {
    return await Rec
      .query()
      .where('user_id', '=', auth.user.id)
      .fetch()
  }

  /**
   * Create/save a new receita.
   * POST receitas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store ({ request, auth }) {
    const data = request.all()

    if (PlanItens.findOrFail(data.planItens_id)){
      
      const rec = await Rec.create({ user_id: auth.user.id, ...data })

      return rec
    }
  }

  /**
   * Update receita details.
   * PUT or PATCH receitas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const {planItens_id, descricao, valor, date} =  request.all()

    if(PlanItens.findOrFail(planItens_id)){

      const rec = await Rec.findOrFail(params.id)

      rec.planItens_id = planItens_id
      rec.descricao = descricao
      rec.valor = valor
      rec.date = date

      await rec.save()

      return rec
    }
  }

  /**
   * Delete a receita with id.
   * DELETE receitas/:id
   *
   * @param {object} ctx
   */
  async destroy ({ params }) {
    const rec = await Rec.findOrFail(params.id)

    await rec.delete()
  }
}

module.exports = ReceitaController
