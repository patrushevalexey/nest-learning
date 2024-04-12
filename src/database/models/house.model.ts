import { Model } from 'objection';
import {v4 as uuidv4} from 'uuid';

export class HouseModel extends Model {
  static tableName: string = 'houses';

  id: string;
  city: string;
  street: string;
  number: number;
  countOfFlats: number;

  $beforeInsert(): void {
    this.id = uuidv4();
  }

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
