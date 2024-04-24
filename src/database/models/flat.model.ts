import { Model } from 'objection';
import { FlatInterface } from "../../interfaces/flat.interface";
import { HouseInterface } from "../../interfaces/house.interface";
import { PersonInterface } from "../../interfaces/person.interface";

export class FlatModel extends Model implements FlatInterface{
  static tableName: string = 'flats';

  id: string;
  houseId: string;
  number: number;
  countOfRooms: number;
  price: number;
  ownerId: string;
  numberOfHouse: number;

  house?: HouseInterface;
  owner: PersonInterface;

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