import { Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateHouseDto } from "../dto/house.dto";
import { HouseInterface } from "../interfaces/house.interface";
import { HouseService } from "../services/houses.service";

@Controller()
export class HousesControllers {
	constructor(
		@Inject(HouseService)
		private readonly HouseService: HouseService,
	) {}

	@Post('api/v1/house')
	async create(dto: CreateHouseDto): Promise<HouseInterface> {
		return this.HouseService.create(dto)
	}

	@Get('api/v1/house')
	async getAll(): Promise<HouseInterface[]> {
		return this.HouseService.getAll()
	}
}
