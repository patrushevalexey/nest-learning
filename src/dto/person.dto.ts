import { PersonInterface } from "../interfaces/person.interface";

export class CreatePersonDto implements Omit<PersonInterface, 'id'> {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}