import {MigrationInterface, QueryRunner} from "typeorm";

export class sessionArend1642617051679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(`CREATE TABLE session_arend (
            id SERIAL,
            cars_id INTEGER NOT NULL,
            tariff_id INTEGER NOT NULL,
            start_date DATE NOT NULL, 
            end_date DATE NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            PRIMARY KEY (id),
            FOREIGN KEY (cars_id) REFERENCES cars (id) ON DELETE CASCADE,
            FOREIGN KEY (tariff_id) REFERENCES tariffs (id) ON DELETE CASCADE
           );`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(`DROP TABLE session_arend;`)
    }

}
