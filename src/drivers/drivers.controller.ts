import { Controller, Get } from "@nestjs/common";
import { DriversService } from "./drivers.service";

@Controller('drivers')
export class DriversController{
    constructor(private readonly driversService:DriversService){}

    @Get()
    getCurrentDrivers(){
        return this.driversService.getCurrentDrivers()
    }
}