import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('travel_company').del();

  // Inserts seed entries
  await knex('travel_company').insert([
    {
      id: '8f7c7b55-807d-452e-bfee-e8c75667a1eb',
      name: 'ANEX Tour',
      country: 'Russia',
      city: 'Moscow',
      email: 'mail@anex.ru',
      phoneNumber: '+78001005486',
    },
    {
      id: 'b4c03579-50bc-46f5-a550-1c176dae2288',
      name: 'FUN AND SUN',
      country: 'Russia',
      city: 'Moscow',
      email: 'ff@travel.ru',
    },
    {
      id: '5fd3c7c8-e540-41d2-a516-50e4c4798f5f',
      name: 'Pegas Touristic',
      country: 'Russia',
      city: 'Moscow',
      email: 'mail@pegas.com',
      phoneNumber: '+78005558080',
    },
    {
      id: 'a14a747f-4be7-401c-a6ba-454b84ac382d',
      name: 'Tez Tour',
      country: 'Russia',
      city: 'Moscow',
      email: 'tez@tour.ru',
    },
    {
      id: '0bca55db-712c-4251-b07c-0db05cb2860e',
      name: 'TUI Travel',
      country: 'Germany',
      city: 'Berlin',
      email: 'tui@travel.com',
      phoneNumber: '+190090090',
    },
    {
      id: 'd41caf30-7861-478e-9d87-f8738b016652',
      name: 'Expedia Group',
      country: 'USA',
      city: 'Washington',
      email: 'ex@group.com',
      phoneNumber: '+4912312355',
    },
  ]);
}
