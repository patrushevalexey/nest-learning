import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { OwnerOfFlatService } from "../services/owner-of-flat.service";
import { OwnerOfFlatInterface } from "../interfaces/owner-of-flat.interface";
import { CreateOwnerOfFlatDto } from "../dto/owner-of-flat.dto";

@Controller()
export class OwnerOfFlatController {
	constructor(
		private readonly ownerOfFlatService: OwnerOfFlatService,
	) {}

	@Post('api/v1/owner-of-flat')
	async create(
		@Body() dto: CreateOwnerOfFlatDto
	): Promise<OwnerOfFlatInterface> {
		return this.ownerOfFlatService.create(dto);
	}

	@Get('api/v1/owner-of-flat')
	async getAll(): Promise<OwnerOfFlatInterface[]> {
		return this.ownerOfFlatService.getAll();
	}

	@Delete('api/v1/owner-of-flat/:id')
	async delete(
		@Param('id') id: string,
	): Promise<void> {
		return this.ownerOfFlatService.delete(id);
	}
}