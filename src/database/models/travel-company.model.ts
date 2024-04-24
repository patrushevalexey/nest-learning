import { Model } from "objection";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TravelCompanyModel extends Model {
	static tableName = 'travelCompany';

	id: string;
	name: string;
	country: string;
	city: string;
	email: string;
	phoneNumber: string;
}