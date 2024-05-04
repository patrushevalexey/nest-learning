import { Inject } from '@nestjs/common';
import { TravelCompanyModel } from '../models/travel-company.model';
import { TravelCompanyInterface } from '../../interfaces/travel-company.interface';
import { ModelClass } from 'objection';
import { CreateTravelCompanyDto } from '../../dto/travel-company.dto';

export class TravelCompanyRepo {
  constructor(
    @Inject('TravelCompanyModel')
    private readonly travelCompanyModel: ModelClass<TravelCompanyModel>,
  ) {}

  async create(dto: CreateTravelCompanyDto): Promise<TravelCompanyInterface> {
    return this.travelCompanyModel.query().insert({
      ...dto,
    });
  }

  async getAll(): Promise<TravelCompanyInterface[]> {
    return this.travelCompanyModel.query().select().withGraphJoined('house');
  }

  async delete(id: string): Promise<void> {
    await this.travelCompanyModel.query().delete().where('id', id);
  }
}
