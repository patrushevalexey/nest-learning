import { Inject, Injectable } from "@nestjs/common";
import { FlatsRepo } from "../database/repos/flat.repo";
import { CreateFlatDto } from "../dto/flat.dto";
import { FlatInterface } from "../interfaces/flat.interface";

@Injectable()
export class FlatsService {
	constructor(
		@Inject(FlatsRepo)
		private readonly flatsRepo: FlatsRepo,
	) {}

	public async create(dto: CreateFlatDto): Promise<FlatInterface> {
		return this.flatsRepo.create(dto)
	}

	public async getAll(): Promise<FlatInterface[]> {
        return this.flatsRepo.getAll()
    }
}