import { Body, Controller, Get, Post } from "@nestjs/common";
import { CarsService } from "./cars.service";
import * as dto from "./dto";

@Controller("cars")
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  
  @Get()
  async allCars(){
    return this.carsService.allCars()
  }
}
