import { Model } from 'objection';
import {v4 as uuidv4} from 'uuid';

export class FlatModel extends Model {
  static tableName: string = 'flats';

  id: string;
  numberOfHouse: number;
  number: number;
  countOfRooms: number;
  price: number;

  $beforeInsert(): void {
    this.id = uuidv4();
  }
}
