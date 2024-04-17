import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('flats', table => {
		table.uuid('ownerId')
			 .references('id')
			 .inTable('person')
			 .onDelete('CASCADE')
	})
}


export async function down(knex: Knex): Promise<void> {
	knex.schema.alterTable('flats', table => {
		table.dropColumn('ownerId')
	})
}

