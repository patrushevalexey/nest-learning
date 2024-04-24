import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('houses_travel-company', table => {
		table.uuid('id')
			 .primary()
			 .defaultTo(knex.fn.uuid())

		table.uuid('houseId')
			 .references('id')
			 .inTable('houses')
			 .notNullable()

		table.uuid('travelCompanyId')
			 .references('id')
			 .inTable('travelCompany')
			 .notNullable()
	})
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('houses_travel-company');
}

