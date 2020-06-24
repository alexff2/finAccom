'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Categoria = use('App/Models/Categoria')

class CategoriaController {
  /**
   * Show a list of all categorias.
   * GET categorias
   */
  async index ({ auth }) {
    return await Categoria
    .query()
    .where('user_id', '=', auth.user.id)
    .fetch()
  }

  /**
   * Create/save a new categoria.
   * POST categorias
   *
   * @param {Request} ctx.request
   */
  async store ({ request, auth }) {
    const { descricao } = request.all()

    const categoria = await Categoria.create({ descricao, user_id: auth.user.id })

    return categoria
  }

  /**
   * Display a single categoria.
   * GET categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update categoria details.
   * PUT or PATCH categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth }) {

    const { descricao } = request.all()

    const categoria = await Categoria.findOrFail(params.id)

    if (auth.user.id === categoria.user_id) {
      categoria.descricao = descricao
      categoria.save()

      return categoria
    }
  }

  /**
   * Delete a categoria with id.
   * DELETE categorias/:id
   */
  async destroy ({ params, auth }) {
    const categoria = await Categoria.findOrFail(params.id)

    if (auth.user.id === categoria.user_id) {
      await categoria.delete()

      return params.id
    }
    return {msg: "Usuário não autorizado"}
  }
}

module.exports = CategoriaController
