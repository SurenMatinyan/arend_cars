import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars.module';
import {Tariffs} from './tariffs'
import dbConfig from '../../config/db-config';
import { EntityManager } from "typeorm";
@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig)
  ]
})
export class AppModule {
    constructor(private readonly entityManager: EntityManager){
      const cars = new CarsModule(this.entityManager);
      cars.seed();
      const sesion_arends = new Tariffs(this.entityManager);
      sesion_arends.seed();
    }
}