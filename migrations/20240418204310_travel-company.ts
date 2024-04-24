import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('travelCompany', table => {
		table.string('id')
			.primary()
			.defaultTo(
				knex.fn.uuid()
			)
		
		table.string('name')
			.notNullable()
		
		table.string('country')
			.notNullable()
		
		table.string('city')
			.notNullable()
		
		table.string('email')
			.notNullable()
		
		table.string('phoneNumber')
	})
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('travelCompany');
}