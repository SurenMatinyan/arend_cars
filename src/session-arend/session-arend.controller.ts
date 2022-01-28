import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { SessionArendService } from "./session-arend.service";
import * as dto from './dto'

@Controller("session-arend")
export class SessionArendController {
  constructor(private readonly sessionArendService: SessionArendService) {}

  @Post()
  async create(@Body() body: dto.CreateDto){
    return this.sessionArendService.create(body)
  }

  @Get(':id')
  async checkAvailability(@Query() query: dto.IsAvailabilityDto, @Param('id') id){
    return this.sessionArendService.checkAvailability(id,query)
  }
}
