import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('flats', table => {
        table.uuid('id')
             .primary()
             .defaultTo(knex.fn.uuid())

        table.uuid('houseId')
             .references('id')
             .inTable('houses')
             .onDelete('CASCADE')
             .notNullable()

        table.integer('number')
            .notNullable()

        table.integer('countOfRooms')
            .notNullable()

        table.integer('price')
            .notNullable()

        table.string('numberOfHouse')

        table.uuid('ownerId')
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('flats')
}

