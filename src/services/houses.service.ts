import { HouseInterface } from '../interfaces/house.interface';
import { Inject, Injectable } from '@nestjs/common';
import { HouseRepo } from '../database/repos/house.repo';
import { CreateHouseDto } from '../dto/house.dto';

@Injectable()
export class HouseService {
constructor(
  @Inject(HouseRepo)
  private readonly houseRepo: HouseRepo,
) { }

  public async create(dto: CreateHouseDto) :Promise<HouseInterface> {
    return this.houseRepo.create(dto);
  }

  public async getAll(): Promise<HouseInterface[]> {
    return this.houseRepo.getAll();
  }

  public async delete(id: string): Promise<void> {
  return this.houseRepo.delete(id);
  }
}