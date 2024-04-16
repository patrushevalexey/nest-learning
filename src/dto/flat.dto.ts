import { FlatInterface } from '../interfaces/flat.interface';

export class CreateFlatDto implements Omit<FlatInterface, 'id'> {
  number: number;
  countOfRooms: number;
  price: number;
  numberOfHouse: number;

  houseId: string;
  ownerId?: string;
}