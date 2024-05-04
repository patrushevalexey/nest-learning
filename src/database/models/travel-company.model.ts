import { Model } from 'objection';
import { Injectable } from '@nestjs/common';
import { TravelCompanyInterface } from '../../interfaces/travel-company.interface';
import { HouseInterface } from '../../interfaces/house.interface';

@Injectable()
export class TravelCompanyModel
  extends Model
  implements TravelCompanyInterface
{
  static tableName = 'travelCompany';

  id: string;
  name: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;

  house?: HouseInterface[];

  static relationMappings = {
    house: {
      modelClass: `${__dirname}/house.model`,
      relation: Model.ManyToManyRelation,
      join: {
        from: 'travelCompany.id',
        through: {
          from: 'houses_travel-company.travelCompanyId',
          to: 'houses_travel-company.houseId',
        },
        to: 'house.id',
      },
    },
  };
}
