import { Model } from 'objection';

export class FlatModel extends Model {
  static tableName: string = 'flats';

  id: string;
  houseId: string;
  numberOfHouse: number;
  number: number;
  countOfRooms: number;
  price: number;

  static relationMappings = {
    house: {
      relation: Model.HasOneRelation,
      modelClass: `${__dirname}/house.model`,
      join: {
        from: 'flats.houseId',
        to: 'houses.id'
      }
    }
  }
}