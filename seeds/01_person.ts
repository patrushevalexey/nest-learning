import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("person").insert([
        {
            id: "a2647fd1-84b9-4f20-905f-8f2105ec2cdf",
            firstName: "Ivan",
            lastName: "Ivanov",
            phoneNumber: "+79955001020",
        },
        {
            id: "dceab7a7-1d93-47f7-9b4e-d57928cb2a23",
            firstName: "Kirill",
            lastName: "Petrov",
            phoneNumber: "+79328504848",
        },
        {
            id: "d5101d2e-d7b1-40c4-bf73-2822a9ff78be",
            firstName: "Olga",
            lastName: "Vasileva",
            phoneNumber: "+79531236434",
        },
        {
            id: "7031aa30-44d9-476f-bdb1-b6c31a18be28",
            firstName: "Dmitriy",
            lastName: "Tarasov",
            phoneNumber: "+79956502525",
        }
    ]);
};
