import { Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateFlatDto } from "../dto/flat.dto";
import { FlatInterface } from "../interfaces/flat.interface";
import { FlatsService } from "../services/flats.service";

@Controller()
export class FlatsControllers {
	constructor(
		@Inject(FlatsService)
		private readonly flatsService: FlatsService,
	) {}

	@Post('api/v1/flat')
	async crate(dto: CreateFlatDto): Promise<FlatInterface> {
		return this.flatsService.create(dto)
	}

	@Get('api/v1/flat')
	async getAll(): Promise<FlatInterface[]> {
		return this.flatsService.getAll();
	}
}