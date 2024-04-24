import { HouseInterface } from '../interfaces/house.interface';
import { Inject, Injectable } from '@nestjs/common';
import { HouseRepo } from '../database/repos/house.repo';

@Injectable()
export class HouseService {
constructor(
  @Inject(HouseRepo)
  private readonly houseRepo: HouseRepo,
) {}

  public async getAll(): Promise<HouseInterface[]> {
    return this.houseRepo.getAll();
  }
}