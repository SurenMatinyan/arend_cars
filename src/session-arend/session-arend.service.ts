import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";

@Injectable()
export class SessionArendService {
  constructor(private readonly entityManager: EntityManager) {}

  async create(body) {
    let startDate: Date | string = new Date(body.startDate);
    let endDate: Date | string = new Date(body.endDate);

    const diff = (endDate.valueOf() - startDate.valueOf()) / (24 * 3600 * 1000);

    if (diff > 30) {
      throw new Error("Maximum days 30");
    }

    if (
      startDate.getDay() === 0 ||
      startDate.getDay() === 6 ||
      endDate.getDay() === 0 ||
      endDate.getDay() === 6
    ) {
      throw new Error("Select only working day");
    }

    startDate.setDate(startDate.getDate() - 3);
    startDate = startDate.toISOString().split("T")[0];

    endDate.setDate(endDate.getDate() + 3);
    endDate = endDate.toISOString().split("T")[0];

    const check = await this.isCarAvailable({
      carsId: body.carsId,
      endDate,
      startDate,
    });

    if (!check) {
      throw new Error("You can't choose this period");
    }

    await this.entityManager.query(`
        INSERT INTO session_arend (cars_id, tariff_id, start_date, end_date)
        VALUES (${body.carsId}, ${body.tariffId}, '${body.startDate}', '${body.endDate}') 
        `);
    return { status: 202, message: "created" };
  }

  async checkAvailability(carsId, query) {
    const { startDate, endDate } = query;
    const check = await this.isCarAvailable({ carsId, startDate, endDate });
    return { status: 200, message: check ? "available" : "not available" };
  }

  async isCarAvailable({
    carsId,
    startDate,
    endDate,
  }: {
    carsId: number;
    startDate: string;
    endDate: string;
  }): Promise<boolean> {
    const check = await this.entityManager.query(`
    SELECT * 
    FROM session_arend
    WHERE cars_id = ${carsId} AND (start_date BETWEEN  '${startDate}' AND '${endDate}'
    OR end_date BETWEEN '${startDate}' AND '${endDate}'); 
    `);

    if (check.length !== 0) {
      return false;
    }
    return true;
  }
}
