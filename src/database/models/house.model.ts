import { Model } from 'objection';
import { HouseInterface } from "../../interfaces/house.interface";
import { FlatInterface } from "../../interfaces/flat.interface";
import { TravelCompanyInterface } from "../../interfaces/travel-company.interface";

export class HouseModel extends Model implements HouseInterface {
  static tableName: string = 'houses';

  id: string;
  city: string;
  street: string;
  number: number;
  countOfFlats: number;

  flats?: FlatInterface[];
  travelCompany?: TravelCompanyInterface[];

  static relationMappings = {
    flats: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/flat.model`,
      join: {
        from: 'houses.id',
        to: 'flats.houseId'
      }
    },

    travelCompany: {
      modelClass: `${__dirname}/travel-company.model`,
      relation: Model.ManyToManyRelation,
      join: {
        from: 'houses.id',
        through: {
          from: 'houses_travel-company.houseId',
          to: 'houses_travel-company.travelCompanyId'
        },
        to: 'travelCompany.id'
      }
    }
  }
}
