import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { HouseModel } from '../models/house.model';
import { HouseInterface } from '../../interfaces/house.interface';

@Injectable()
export class HouseRepo {
  constructor(
    @Inject('HouseModel')
    private readonly houseModel: ModelClass<HouseModel>,
  ) {}

  async getAll() : Promise<HouseInterface[]> {
    return this.houseModel.query()
               .select()
               .withGraphJoined('flats')
               .withGraphJoined('travelCompany')
  }
}
