import { Injectable } from "@nestjs/common";
import { OwnerOfFlatRepo } from "../database/repos/owner-of-flat.repo";
import { CreateOwnerOfFlatDto } from "../dto/owner-of-flat.dto";
import { OwnerOfFlatInterface } from "../interfaces/owner-of-flat.interface";

@Injectable()
export class OwnerOfFlatService {
	constructor(
        private readonly ownerOfFlatRepo: OwnerOfFlatRepo,
    ) {}

	async create(dto: CreateOwnerOfFlatDto): Promise<OwnerOfFlatInterface> {
        return this.ownerOfFlatRepo.create(dto);
    }

	async getAll(): Promise<OwnerOfFlatInterface[]> {
        return this.ownerOfFlatRepo.getAll();
    }

	async delete(id: string): Promise<void> {
        await this.ownerOfFlatRepo.delete(id);
    }
}