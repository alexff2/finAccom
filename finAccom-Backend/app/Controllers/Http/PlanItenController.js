'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const planiten = use('App/Models/PlanIten')
const plan = use('App/Models/Planejamento')

class PlanItenController {
  /**
   * Show a list of all planitens.
   * GET planitens
   *
   * @param {object} ctx
   */
  async show ({ auth, params }) {

    const Plan = await plan.findOrFail(params.id)

    if (Plan.user_id === auth.user.id){
      return await planiten
        .query()
        .where('plan_id', '=', params.id)
        .fetch()
    }

    return {
      error: "Erro ao cadastrar item, entre em contato com Administrador de sistema"
    }
  }

  /**
   * Create/save a new planiten.
   * POST planitens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store ({ request, auth }) {
    const data = request.all(['plan_id, cat_id, description, valor, vencimento, tipo1, tipo2'])

    const Plan = await plan.findOrFail(data.plan_id)

    if (Plan.user_id === auth.user.id){
      return await planiten.create( data )
    }

    return {
      error: "Erro ao cadastrar item, entre em contato com Administrador de sistema"
    }
  }


  /**
   * Update planiten details.
   * PUT or PATCH planitens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request, auth }) {
    const {plan_id, cat_id, description, valor, vencimento, tipo1, tipo2} = request.all()

    const Plan = await plan.findOrFail(plan_id)
    if (Plan.user_id === auth.user.id) {
      const PlanIten = await planiten.findOrFail(params.id)
      PlanIten.cat_id = cat_id
      PlanIten.description = description
      PlanIten.valor = valor
      PlanIten.vencimento = vencimento
      PlanIten.tipo1 = tipo1
      PlanIten.tipo2 = tipo2
      await PlanIten.save()

      return PlanIten
    }
  }

  /**
   * Delete a planiten with id.
   * DELETE planitens/:id
   *
   * @param {object} ctx
   * @param {object} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const PlanIten = await planiten.findOrFail(params.id)

    const Plan = await plan.findOrFail(PlanIten.plan_id)

    if (Plan.user_id !== auth.user.id){
      return response.status(401).json({Erro: "User dont autorization, talke your admin"})
    }

    await PlanIten.delete()

    return params.id
  }
}

module.exports = PlanItenController
