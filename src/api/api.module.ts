import { Module } from '@nestjs/common';
import { HousesControllers } from '../controllers/houses.controllers';
import { HouseService } from '../services/houses.service';

@Module({
  controllers: [HousesControllers],
  providers: [HouseService],
})
export class ApiModule {}
