import { Injectable } from "@nestjs/common";
import { Model } from "objection";

Injectable()
export class HousesTravelCompanyModel extends Model {
	static tableName = "houses_travel-company";

	id: string;
	houseId: string;
	travelCompanyId: string;
}