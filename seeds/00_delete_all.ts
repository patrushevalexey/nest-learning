import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("houses_travel-company").del();
    await knex("travelCompany").del()
    await knex("flats").del();
    await knex("houses").del();
    await knex("person").del();
}
