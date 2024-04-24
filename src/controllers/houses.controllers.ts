import { Controller, Get, Inject } from "@nestjs/common";
import { HouseInterface } from "../interfaces/house.interface";
import { HouseService } from "../services/houses.service";

@Controller()
export class HousesControllers {
	constructor(
		@Inject(HouseService)
		private readonly HouseService: HouseService,
	) {}

	@Get('api/v1/house')
	async getAll(): Promise<HouseInterface[]> {
		return await this.HouseService.getAll()
	}
}
