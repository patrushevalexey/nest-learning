import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('houses', (table) => {
    table.string('id')
         .primary()
         .notNullable()

    table.string('city')
         .notNullable()

    table.string('street')
        .notNullable()

    table.integer('number')
        .notNullable()

    table.integer('countOfFlats')
        .notNullable()
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('houses');
}
