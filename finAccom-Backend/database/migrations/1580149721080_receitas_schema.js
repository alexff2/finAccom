'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceitasSchema extends Schema {
  up () {
    this.create('receitas', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('planItens_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('plan_itens')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('descricao',80).notNullable()
      table.float('valor').notNullable()
      table.date('date')
      table.timestamps()
    })
  }

  down () {
    this.drop('receitas')
  }
}

module.exports = ReceitasSchema
