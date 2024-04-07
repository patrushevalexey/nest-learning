import { FlatInterface } from '../interfaces/flat.interface';

export class CreateFlatDto implements Omit<FlatInterface, 'id'> {
  numberOfHouse: number;
  number: number;
  countOfRooms: number;
  price: number;
}