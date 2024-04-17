import { Model } from "objection";
import { PersonInterface } from "../../interfaces/person.interface";

export class PersonModel extends Model implements Omit<PersonInterface, 'id'>{
	static tableName: string = 'person';

	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;

	static relationMappings = {
		flats: {
			relation: Model.HasManyRelation,
			modelClass: `${__dirname}/flat.model`,
			join: {
				from: 'person.id',
				to: 'flats.ownerId'
			}
		}
	}
}