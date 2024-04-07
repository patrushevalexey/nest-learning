import {Inject, Injectable} from "@nestjs/common";
import {FlatModel} from "../models/flat.model";
import {ModelClass} from "objection";
import {CreateFlatDto} from "../../dto/flat.dto";
import {FlatInterface} from "../../interfaces/flat.interface";

@Injectable()
export class FlatsRepo {
constructor(
    @Inject('FlatModel')
    private readonly flatModel: ModelClass<FlatModel>,
) {}

    async create(dto: CreateFlatDto): Promise<FlatInterface> {
        return this.flatModel.query()
               .insert({...dto});
    }

    async getAll(): Promise<FlatInterface[]> {
        return this.flatModel.query()
            .select()
    }
}