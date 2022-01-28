import { Controller, Get, Query } from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import * as dto from './dto'

@Controller('tariffs')
export class TariffsController {

    constructor(private readonly tariffsService: TariffsService){}

    @Get('cost-calculation')
    async costCalculation(@Query() query: dto.CostCalculation){
        return this.tariffsService.costCalculation(query)
    }
}
