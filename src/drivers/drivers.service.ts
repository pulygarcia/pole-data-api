import { Injectable, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class DriversService{
    async getCurrentDrivers(){
        try {
            const currentSeason = new Date().getFullYear();
            const response = await fetch(`${process.env.JOLPICA_BASE_URL}/${currentSeason}/drivers`);
            const drivers = await response.json();

            return drivers.MRData.DriverTable.Drivers;

        } catch (e) {
            const error = new Error('La información acerca de los pilotos no está disponible en este momento, lo sentimos.');
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}