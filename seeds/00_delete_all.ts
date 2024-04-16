import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("owner_of_flat").del();
    await knex("flats").del();
    await knex("houses").del();
};
