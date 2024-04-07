import { HouseInterface } from '../interfaces/house.interface';

export class CreateHouseDto implements Omit<HouseInterface, 'id'> {
  city: string;
  street: string;
  number: number;
  countOfFlats: number;
}
