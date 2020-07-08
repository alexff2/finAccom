'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Planejamento = use('App/Models/Planejamento')

class PlanejamentoController {
  /**
   * Show a list of all planejamentos.
   * GET planejamentos
   *
   * @param {object} ctx
   * @param {auth} ctx.auth
   */
  async index ({ auth }) {
    return await Planejamento
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
    const data = request.all(['description, month, monthInicial, status'])

    var monthFinal = new Date(data.monthInicial);
    monthFinal.setMonth(monthFinal.getMonth() + data.month)

    const plan = {user_id: auth.user.id, ...data, monthFinal}

    return await Planejamento.create( plan )
  }

  /**
   * Update planejamento details.
   * PUT or PATCH planejamentos/:id
   *
   * @param {object} ctx
   * @param {params} ctx.params
   * @param {Request} ctx.request
   */
  async update ({ params, request, auth }) {
    const { description, month, monthInicial } = request.all()

    var monthFinal = new Date(monthInicial);
    monthFinal.setMonth(monthFinal.getMonth() + month)

    const Plan = await Planejamento.findOrFail(params.id)

    if (auth.user.id === Plan.user_id) {
      Plan.description = description
      Plan.month = month
      Plan.monthInicial = monthInicial
      Plan.monthFinal = monthFinal
      await Plan.save()

      return Plan
    }

    return {msg: "Usuário não autorizado"}
  }

  /**
   * Delete a planejamento with id.
   * DELETE planejamentos/:id
   *
   * @param {object} ctx
   * @param {params} ctx.params
   */
  async destroy ({ params, auth }) {
    const Plan = await Planejamento.findOrFail(params.id)

    if (auth.user.id === Plan.user_id) {
      Plan.delete()

      return params.id
    }
  }

  async modifyStatus ({ request, auth, params }) {
    const { status } = request.all()

    const Plan = await Planejamento.findOrFail( params.id )

    if (auth.user.id === Plan.user_id) {
      Plan.status = status
      return await Plan.save()
    }

    return {msg: "Usuário não autorizado"}
  }
}

module.exports = PlanejamentoController
