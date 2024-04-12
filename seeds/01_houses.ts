import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("houses").del();

    // Inserts seed entries
    await knex("houses").insert([
        {
            id: "5c009a41-2a9a-451e-865d-fe3b2c7ea656",
            city: "Moscow",
            street: "15 Parkovaya",
            number: 3,
            countOfFlats: 10,
        },
        {
            id: "5c2f908b-c53a-4882-9ea0-c5264aa1fde4",
            city: "Moscow",
            street: "Maroseyka",
            number: 65,
            countOfFlats: 4,
        },{
            id: "8709bd9a-e387-4848-8971-e25839b26053",
            city: "Moscow",
            street: "Pervomayskaya",
            number: 11,
            countOfFlats: 8,
        },
    ]);
}
