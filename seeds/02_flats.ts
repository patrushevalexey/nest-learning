import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("flats").del();

    // Inserts seed entries
    await knex("flats").insert([
        {
            id: "eaf70fce-dd21-427b-88c5-237f6da05ac8",
            numberOfHouse: 1,
            number: 1,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "17248edc-eeb5-411a-b4bf-2797da04ef20",
            numberOfHouse: 1,
            number: 2,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "9b2c71e9-7d14-446b-865a-6fa912733d4d",
            numberOfHouse: 1,
            number: 3,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "2461ea53-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 1,
            number: 4,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "33277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 1,
            number: 5,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "42277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 1,
            number: 6,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "51277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 1,
            number: 7,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "60277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 1,
            number: 8,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "6f277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 1,
            number: 9,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "7e277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 1,
            number: 10,
            countOfRooms: 2,
            price: 6000000,
        },
        {
            id: "8d277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 2,
            number: 1,
            countOfRooms: 2,
            price: 12000000,
        },
        {
            id: "9c277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 2,
            number: 2,
            countOfRooms: 2,
            price: 12000000,
        },
        {
            id: "ac277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 2,
            number: 3,
            countOfRooms: 2,
            price: 12000000,
        },
        {
            id: "bc277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 2,
            number: 4,
            countOfRooms: 2,
            price: 12000000,
        },
        {
            id: "cc277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 3,
            number: 1,
            countOfRooms: 2,
            price: 4000000,
        },
        {
            id: "dc277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 3,
            number: 2,
            countOfRooms: 2,
            price: 4000000,
        },
        {
            id: "ec277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 3,
            number: 3,
            countOfRooms: 2,
            price: 4000000,
        },
        {
            id: "fc277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 3,
            number: 4,
            countOfRooms: 2,
            price: 4000000,
        },
        {
            id: "0d277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 3,
            number: 5,
            countOfRooms: 2,
            price: 4000000,
        },
        {
            id: "1c277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 3,
            number: 6,
            countOfRooms: 2,
            price: 4000000,
        },
        {
            id: "2b277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 3,
            number: 7,
            countOfRooms: 2,
            price: 4000000,
        },
        {
            id: "3a277777-189d-4baa-a3ab-ead44715622e",
            numberOfHouse: 3,
            number: 8,
            countOfRooms: 2,
            price: 4000000,
        }
    ]);
};
