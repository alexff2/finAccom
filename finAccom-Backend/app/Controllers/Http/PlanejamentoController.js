'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

 const plan = use('App/Models/Planejamento')

class PlanejamentoController {
  /**
   * Show a list of all planejamentos.
   * GET planejamentos
   *
   * @param {object} ctx
   * @param {auth} ctx.auth
   */
  async index ({ auth}) {
    return await plan
      .query()
      .where('user_id', '=', auth.user.id)
      .fetch()
  }

  /**
   * Create/save a new planejamento.
   * POST planejamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {auth} ctx.auth
   */
  async store ({ request, auth }) {
    const data = request.all(['description, month, status'])
    const Plan = await plan.create({ user_id: auth.user.id, ...data})
    return Plan
  }

  /**
   * Update planejamento details.
   * PUT or PATCH planejamentos/:id
   *
   * @param {object} ctx
   * @param {params} ctx.params
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const { description, month, status } = request.all()
    const Plan = await plan.findOrFail(params.id)
    Plan.description = description
    Plan.month = month
    Plan.status = status
    await Plan.save()
    
    return Plan
  }

  /**
   * Delete a planejamento with id.
   * DELETE planejamentos/:id
   *
   * @param {object} ctx
   * @param {params} ctx.params
   */
  async destroy ({ params}) {
    const Plan = await plan.findOrFail(params.id)
    
    Plan.delete()
  }
}

module.exports = PlanejamentoController
