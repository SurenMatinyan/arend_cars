import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TariffsModule } from './tariffs/tariffs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SessionArendModule } from './session-arend/session-arend.module';
import { CarsModule } from './cars/cars.module';
import dbConfig from 'config/db-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    ConfigModule.forRoot(),
    TariffsModule,
    SessionArendModule,
    CarsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }