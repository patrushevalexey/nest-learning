import { TravelCompanyInterface } from '../interfaces/travel-company.interface';

export class CreateTravelCompanyDto
  implements Omit<TravelCompanyInterface, 'id'>
{
  name: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
}
