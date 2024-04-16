import { Global, Module, Provider } from '@nestjs/common';
import * as Knex from 'knex';
import * as knexfile from 'knexfile';
import { Model } from 'objection';
import { HouseModel } from './models/house.model';
import { HouseRepo } from './repos/house.repo';
import {FlatModel} from "./models/flat.model";
import {FlatsRepo} from "./repos/flat.repo";
import { OwnerOfFlatModel } from "./models/owner-of-flat.model";
import { OwnerOfFlatRepo } from "./repos/owner-of-flat.repo";

const models = [HouseModel, FlatModel, OwnerOfFlatModel];
const repos = [HouseRepo, FlatsRepo, OwnerOfFlatRepo];

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
