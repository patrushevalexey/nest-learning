import { Model } from 'objection';

export class HouseModel extends Model {
  static tableName: string = 'houses';

  id: string;
  city: string;
  street: string;
  number: number;
  countOfFlats: number;

  static relationMappings = {
    flats: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/flat.model`,
      join: {
        from: 'houses.id',
        to: 'flats.houseId'
      }
    }
  }
}
