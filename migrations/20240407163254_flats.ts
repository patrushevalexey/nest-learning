import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('flats', table => {
        table.uuid('id')
            .primary()
            .notNullable()

        table.integer('numberOfHouse')
             .notNullable()
             .references('number')
             .inTable('houses')

        table.integer('number')
            .notNullable()

        table.integer('countOfRooms')
            .notNullable()

        table.integer('price')
            .notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('flats')
}

