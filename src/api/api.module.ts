import { Module } from "@nestjs/common";
import { HousesControllers } from "../controllers/houses.controllers";
import { FlatsControllers } from "../controllers/flats.contollers";
import { HouseService } from "../services/houses.service";
import { FlatsService } from "../services/flats.service";
import { OwnerOfFlatController } from "../controllers/owner-of-flat.controller";
import { OwnerOfFlatService } from "../services/owner-of-flat.service";

@Module({
	controllers: [HousesControllers, FlatsControllers, OwnerOfFlatController],
	providers: [HouseService, FlatsService, OwnerOfFlatService],
})

export class ApiModule {}