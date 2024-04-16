import { Inject, Injectable } from "@nestjs/common";
import { ModelClass } from "objection";
import { OwnerOfFlatModel } from "../models/owner-of-flat.model";
import { OwnerOfFlatInterface } from "../../interfaces/owner-of-flat.interface";
import { CreateOwnerOfFlatDto } from "../../dto/owner-of-flat.dto";

@Injectable()
export class OwnerOfFlatRepo {
	constructor(
        @Inject('OwnerOfFlatModel')
        private readonly ownerOfFlatModel: ModelClass<OwnerOfFlatModel>,
    ) {}
	
	async create(dto: CreateOwnerOfFlatDto): Promise<OwnerOfFlatInterface> {
		return this.ownerOfFlatModel.query()
                .insert({
                    ...dto
                });
	}

	async getAll(): Promise<OwnerOfFlatInterface[]> {
        return this.ownerOfFlatModel.query()
                .select()
                .withGraphJoined('flats')
    }

	async delete(id: string): Promise<void> {
        this.ownerOfFlatModel.query()
                .delete()
                .where('id', id)
    }
}