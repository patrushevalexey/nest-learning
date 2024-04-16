import { Model } from "objection";
import { OwnerOfFlatInterface } from "../../interfaces/owner-of-flat.interface";

export class OwnerOfFlatModel extends Model implements Omit<OwnerOfFlatInterface, 'id'>{
	static tableName: string = 'owner_of_flat';

	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;

	static relationMappings = {
		flats: {
            relation: Model.HasManyRelation,
            modelClass: `${__dirname}/flat.model`,
            join: {
                from: 'owner_of_flat.id',
                to: 'flats.ownerId'
            }
        }
	}
}