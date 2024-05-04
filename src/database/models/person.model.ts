import { Model } from 'objection';
import { PersonInterface } from '../../interfaces/person.interface';
import { FlatInterface } from '../../interfaces/flat.interface';

export class PersonModel extends Model implements PersonInterface {
  static tableName: string = 'person';

  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;

  flats?: FlatInterface[];

  static relationMappings = {
    flats: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/flat.model`,
      join: {
        from: 'person.id',
        to: 'flats.ownerId',
      },
    },
  };
}
