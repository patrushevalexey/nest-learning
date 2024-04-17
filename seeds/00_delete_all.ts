import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("flats").del();
    await knex("houses").del();
    await knex("person").del();

};
