import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import * as dto from "./dto";

@Injectable()
export class TariffsService {
  constructor(private readonly entityManager: EntityManager) {}

  async costCalculation(query: dto.CostCalculation): Promise<number> {
    let days =
      new Date(query.endDate).valueOf() - new Date(query.startDate).valueOf();
    days = days / 86400000;
    const tariffs = await this.entityManager.query(`
          SELECT * 
          FROM tariffs
          WHERE from_date <= ${days}
          ORDER BY from_date ASC
          `);

    let totalSum = 0;
    tariffs.forEach((element) => {
      let diff = days - element.to_date;
      let discount = 0;
      if (diff > 0) {
        discount =
          ((element.to_date - element.from_date + 1) * 1000 * element.percent) /
          100;
        totalSum += ((element.to_date - element.from_date + 1) * 1000) - discount
      } else {
       
        discount =
          (1000 *
            (days - element.from_date + 1) *
            element.percent) /
          100;
        totalSum += ((days - element.from_date + 1) * 1000) - discount
      }
    });
    return totalSum;
  }
}
