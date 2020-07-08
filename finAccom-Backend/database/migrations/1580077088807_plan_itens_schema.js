'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanItensSchema extends Schema {
  up () {
    this.create('plan_itens', (table) => {
      table.increments()
      table
        .integer('plan_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('planejamentos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('cat_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categorias')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('description', 80).notNullable()
      table.float('valor').notNullable().unsigned()
      table.date('vencimento').notNullable()
      table.string('tipo1',1).notNullable()
      table.string('tipo2',1).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('plan_itens')
  }
}

module.exports = PlanItensSchema
