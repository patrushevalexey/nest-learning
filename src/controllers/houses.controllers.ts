import { Body, Controller, Delete, Get, Inject, Param, Post } from "@nestjs/common";
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
	async create(
		@Body() dto: CreateHouseDto,
	): Promise<HouseInterface> {
		return await this.HouseService.create(dto)
	}

	@Get('api/v1/house')
	async getAll(): Promise<HouseInterface[]> {
		return await this.HouseService.getAll()
	}

	@Delete('api/v1/house/:id')
	async delete(
		@Param('id') id: string,
	): Promise<void> {
        await this.HouseService.delete(id)
    }
}
