import { Model } from 'objection';
import { FlatInterface } from "../../interfaces/flat.interface";

export class FlatModel extends Model implements Omit<FlatInterface, 'id'>{
  static tableName: string = 'flats';

  id: string;
  houseId: string;
  number: number;
  countOfRooms: number;
  price: number;
  ownerId: string;
  numberOfHouse: number;

  static relationMappings = {
    house: {
      relation: Model.HasOneRelation,
      modelClass: `${__dirname}/house.model`,
      join: {
        from: 'flats.houseId',
        to: 'houses.id'
      }
    },
    owner: {
      relation: Model.HasOneRelation,
      modelClass: `${__dirname}/person.model`,
      join: {
        from: 'flats.ownerId',
        to: 'person.id'
      }
    }
  }
}