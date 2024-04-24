import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("houses_travel-company").insert([
        {
            id: "30388c89-c2c7-4857-aa32-f948d0d966d4",
            houseId: "5c009a41-2a9a-451e-865d-fe3b2c7ea656",
            travelCompanyId: "8f7c7b55-807d-452e-bfee-e8c75667a1eb",
        },
        {
            id: "6d2b4964-62c8-420f-bc46-5ff30198feac",
            houseId: "5c009a41-2a9a-451e-865d-fe3b2c7ea656",
            travelCompanyId: "b4c03579-50bc-46f5-a550-1c176dae2288",
        },
        {
            id: "bfcdea6e-5930-4b2d-8c10-0fefb105abd1",
            houseId: "5c009a41-2a9a-451e-865d-fe3b2c7ea656",
            travelCompanyId: "5fd3c7c8-e540-41d2-a516-50e4c4798f5f",
        },
        {
            id: "6dd70d81-9602-451a-a689-853a4efd3878",
            houseId: "5c009a41-2a9a-451e-865d-fe3b2c7ea656",
            travelCompanyId: "a14a747f-4be7-401c-a6ba-454b84ac382d",
        },
        {
            id: "7a89bc0d-b289-4504-958f-6cdef424cd92",
            houseId: "5c009a41-2a9a-451e-865d-fe3b2c7ea656",
            travelCompanyId: "0bca55db-712c-4251-b07c-0db05cb2860e",
        },
        {
            id: "ceee7376-5d5b-4c50-aeb6-0a18572c9c86",
            houseId: "5c2f908b-c53a-4882-9ea0-c5264aa1fde4",
            travelCompanyId: "8f7c7b55-807d-452e-bfee-e8c75667a1eb",
        },
        {
            id: "877f9f3d-fe5f-458e-a084-c3b77acffda1",
            houseId: "5c2f908b-c53a-4882-9ea0-c5264aa1fde4",
            travelCompanyId: "b4c03579-50bc-46f5-a550-1c176dae2288",
        },
        {
            id: "e6295f58-e5b0-410c-a420-5f4f07a6878d",
            houseId: "5c2f908b-c53a-4882-9ea0-c5264aa1fde4",
            travelCompanyId: "5fd3c7c8-e540-41d2-a516-50e4c4798f5f",
        },
        {
            id: "18914261-0a90-409c-a782-5df26c9465fc",
            houseId: "5c2f908b-c53a-4882-9ea0-c5264aa1fde4",
            travelCompanyId: "a14a747f-4be7-401c-a6ba-454b84ac382d",
        },
        {
            id: "57f98d1d-41a0-4106-a642-2979f9a300c1",
            houseId: "8709bd9a-e387-4848-8971-e25839b26053",
            travelCompanyId: "8f7c7b55-807d-452e-bfee-e8c75667a1eb",
        },
        {
            id: "fc6582b8-81c2-4af6-b8f4-b52e7744197b",
            houseId: "8709bd9a-e387-4848-8971-e25839b26053",
            travelCompanyId: "b4c03579-50bc-46f5-a550-1c176dae2288",
        },
        {
            id: "8105d623-3ab8-4f40-86e3-aacfb0e6e115",
            houseId: "8709bd9a-e387-4848-8971-e25839b26053",
            travelCompanyId: "d41caf30-7861-478e-9d87-f8738b016652",
        }
    ]);
}
