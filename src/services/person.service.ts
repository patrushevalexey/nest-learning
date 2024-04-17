import { Injectable } from "@nestjs/common";
import { PersonRepo } from "../database/repos/person.repo";
import { CreatePersonDto } from "../dto/person.dto";
import { PersonInterface } from "../interfaces/person.interface";

@Injectable()
export class PersonService {
	constructor(
		private readonly personRepo: PersonRepo,
	) {}

	async create(dto: CreatePersonDto): Promise<PersonInterface> {
		return this.personRepo.create(dto);
	}

	async getAll(): Promise<PersonInterface[]> {
		return this.personRepo.getAll();
	}

	async delete(id: string): Promise<void> {
		await this.personRepo.delete(id);
	}
}