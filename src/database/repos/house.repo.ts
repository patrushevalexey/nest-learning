import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { HouseModel } from '../models/house.model';
import { CreateHouseDto } from '../../dto/house.dto';
import { HouseInterface } from '../../interfaces/house.interface';

@Injectable()
export class HouseRepo {
  constructor(
    @Inject('HouseModel')
    private readonly houseModel: ModelClass<HouseModel>,
  ) {}

  async create(dto: CreateHouseDto): Promise<HouseInterface> {
    return this.houseModel.query()
               .insert({...dto});
  }

  async getAll() : Promise<HouseInterface[]> {
    return this.houseModel.query()
               .select()
  }
}
