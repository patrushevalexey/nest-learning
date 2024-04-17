import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("flats").insert([
        {
            id: "eaf70fce-dd21-427b-88c5-237f6da05ac8",
            number: 1,
            countOfRooms: 2,
            price: 6000000,
            numberOfHouse: 3,
            houseId: "5c009a41-2a9a-451e-865d-fe3b2c7ea656",
            ownerId: "a2647fd1-84b9-4f20-905f-8f2105ec2cdf",
        },
        {
            id: "17248edc-eeb5-411a-b4bf-2797da04ef20",
            number: 2,
            countOfRooms: 2,
            price: 12000000,
            numberOfHouse: 3,
            houseId: "5c009a41-2a9a-451e-865d-fe3b2c7ea656",
            ownerId: "7031aa30-44d9-476f-bdb1-b6c31a18be28",
        },
        {
            id: "8d277777-189d-4baa-a3ab-ead44715622e",
            number: 1,
            countOfRooms: 2,
            price: 12000000,
            numberOfHouse: 65,
            houseId: "5c2f908b-c53a-4882-9ea0-c5264aa1fde4",
            ownerId: "a2647fd1-84b9-4f20-905f-8f2105ec2cdf",
        },
        {
            id: "9c277777-189d-4baa-a3ab-ead44715622e",
            number: 2,
            countOfRooms: 2,
            price: 6000000,
            numberOfHouse: 65,
            houseId: "5c2f908b-c53a-4882-9ea0-c5264aa1fde4",
            ownerId: "d5101d2e-d7b1-40c4-bf73-2822a9ff78be",
        },
        {
            id: "ac277777-189d-4baa-a3ab-ead44715622e",
            number: 3,
            countOfRooms: 2,
            price: 12000000,
            numberOfHouse: 65,
            houseId: "5c2f908b-c53a-4882-9ea0-c5264aa1fde4",
        },
        {
            id: "cc277777-189d-4baa-a3ab-ead44715622e",
            number: 1,
            countOfRooms: 2,
            price: 6000000,
            numberOfHouse: 11,
            houseId: "8709bd9a-e387-4848-8971-e25839b26053",
        },
        {
            id: "dc277777-189d-4baa-a3ab-ead44715622e",
            number: 2,
            countOfRooms: 2,
            price: 4000000,
            numberOfHouse: 11,
            houseId: "8709bd9a-e387-4848-8971-e25839b26053",
            ownerId: "dceab7a7-1d93-47f7-9b4e-d57928cb2a23",
        },
        {
            id: "ec277777-189d-4baa-a3ab-ead44715622e",
            number: 3,
            countOfRooms: 2,
            price: 12000000,
            numberOfHouse: 11,
            houseId: "8709bd9a-e387-4848-8971-e25839b26053",
            ownerId: "dceab7a7-1d93-47f7-9b4e-d57928cb2a23",
        },
        {
            id: "95a1ab65-13f7-42e1-a9d3-3efdf4c355b5",
            number: 1,
            countOfRooms: 2,
            price: 5000000,
            numberOfHouse: 11,
            houseId: "8709bd9a-e387-4848-8971-e25839b26053",
            ownerId: "a2647fd1-84b9-4f20-905f-8f2105ec2cdf",
        },
    ]);
}