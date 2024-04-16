import { OwnerOfFlatInterface } from "../interfaces/owner-of-flat.interface";

export class CreateOwnerOfFlatDto implements Omit<OwnerOfFlatInterface, 'id'> {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}