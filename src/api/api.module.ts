import { Module } from "@nestjs/common";
import { HousesControllers } from "../controllers/houses.controllers";
import { FlatsControllers } from "../controllers/flats.contollers";
import { HouseService } from "../services/houses.service";
import { FlatsService } from "../services/flats.service";
import { PersonController } from "../controllers/person.controller";
import { PersonService } from "../services/person.service";

@Module({
	controllers: [HousesControllers, FlatsControllers, PersonController],
	providers: [HouseService, FlatsService, PersonService],
})

export class ApiModule {}