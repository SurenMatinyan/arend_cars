import { Module } from '@nestjs/common';
import { SessionArendController } from './session-arend.controller';
import { SessionArendService } from './session-arend.service';

@Module({
  controllers: [SessionArendController],
  providers: [SessionArendService]
})
export class SessionArendModule {}
