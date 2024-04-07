import { Module } from "@nestjs/common";
import { HousesControllers } from "../controllers/houses.controllers";
import { FlatsControllers } from "../controllers/flats.contollers";
import { HouseService } from "../services/houses.service";
import { FlatsService } from "../services/flats.service";

@Module({
	controllers: [HousesControllers, FlatsControllers],
	providers: [HouseService, FlatsService],
})

export class ApiModule {}