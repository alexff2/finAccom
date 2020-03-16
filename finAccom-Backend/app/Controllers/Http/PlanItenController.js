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
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ auth }) {
    return planiten
      .query()
      .where('user_id', '=', auth.user.id)
      .fetch()
  }

  /**
   * Create/save a new planiten.
   * POST planitens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store ({ request }) {
    const data = request.all(['plan_id, description, valor, vencimento, tipo1, tipo2'])

    const Plan = await plan.findOrFail(data.plan_id)
    if (Plan){
      return await planiten.create({user_id: Plan.user_id, ...data})
    }
  }


  /**
   * Update planiten details.
   * PUT or PATCH planitens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const {plan_id, description, valor, vencimento, tipo1, tipo2} = request.all()
    
    const Plan = await plan.findOrFail(plan_id)
    if(Plan){
      const PlanIten = await planiten.findOrFail(params.id)
      PlanIten.plan_id = plan_id
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
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const PlanIten = await planiten.findOrFail(params.id)
    
    PlanIten.delete()
  }
}

module.exports = PlanItenController
