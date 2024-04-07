import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { FlatsControllers } from "./controllers/flats.contollers";
import { HousesControllers } from "./controllers/houses.controllers";
import { FlatsService } from "./services/flats.service";
import { HouseService } from "./services/houses.service";
import { ApiModule } from "./api/api.module";

const controllers = [FlatsControllers, HousesControllers];
const providers = [FlatsService, HouseService];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ApiModule,
  ]
})
export class AppModule {}
