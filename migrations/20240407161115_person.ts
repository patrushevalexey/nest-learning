import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('person', table => {
		table.uuid('id')
            .primary()
			 .defaultTo(knex.fn.uuid())

		table.string('firstName')
		    .notNullable()

		table.string('lastName')
		    .notNullable()

		table.string('phoneNumber')
		    .notNullable()
			.unique()
	})
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('person');
}

