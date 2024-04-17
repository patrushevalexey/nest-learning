import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PersonService } from "../services/person.service";
import { PersonInterface } from "../interfaces/person.interface";
import { CreatePersonDto } from "../dto/person.dto";

@Controller()
export class PersonController {
	constructor(
		private readonly ownerOfFlatService: PersonService,
	) {}

	@Post('api/v1/person')
	async create(
		@Body() dto: CreatePersonDto
	): Promise<PersonInterface> {
		return this.ownerOfFlatService.create(dto);
	}

	@Get('api/v1/person')
	async getAll(): Promise<PersonInterface[]> {
		return this.ownerOfFlatService.getAll();
	}

	@Delete('api/v1/person/:id')
	async delete(
		@Param('id') id: string,
	): Promise<void> {
		return this.ownerOfFlatService.delete(id);
	}
}