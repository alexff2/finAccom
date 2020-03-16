'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanejamentoSchema extends Schema {
  up () {
    this.create('planejamentos', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()//Valor não pode ser abaixo de 0
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('description',80).notNullable()
      table.integer('month',80).notNullable()
      table.string('status',10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('planejamentos')
  }
}

module.exports = PlanejamentoSchema
