import { Global, Module, Provider } from '@nestjs/common';
import * as Knex from 'knex';
import * as knexfile from 'knexfile';
import { Model } from 'objection';
import { HouseModel } from './models/house.model';
import { HouseRepo } from './repos/house.repo';
import { FlatModel } from './models/flat.model';
import { FlatsRepo } from './repos/flat.repo';
import { PersonModel } from './models/person.model';
import { PersonRepo } from './repos/person.repo';
import { TravelCompanyModel } from './models/travel-company.model';
import { TravelCompanyRepo } from './repos/travel-company.repo';
import { HousesTravelCompanyModel } from './models/houses_travel-company.model';

const models = [
  HouseModel,
  FlatModel,
  PersonModel,
  TravelCompanyModel,
  HousesTravelCompanyModel,
];
const repos = [HouseRepo, FlatsRepo, PersonRepo, TravelCompanyRepo];

const modelProviders = models.map((model) => ({
  provide: model.name,
  useValue: model,
}));

const internalProviders: Provider[] = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex(knexfile);
      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers: [...internalProviders, ...repos],
  exports: [...repos],
})
export class DatabaseModule {}
