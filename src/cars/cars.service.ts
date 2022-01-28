import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import * as dto from "./dto";

@Injectable()
export class CarsService {
  constructor(private readonly entityManager: EntityManager) {}

  async allCars() {
    return await this.entityManager.query(`
  SELECT cars.*, SUM(session_arend.end_date - session_arend.start_date) as days, DATE_TRUNC('month',session_arend.start_date)
  AS  month FROM  cars
  LEFT JOIN session_arend 
  ON cars.id = session_arend.cars_id
  GROUP BY DATE_TRUNC('month',session_arend.start_date), cars.id;
    `);
  }
}
