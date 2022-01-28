import {MigrationInterface, QueryRunner} from "typeorm";

export class cars1642617032097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(`CREATE TABLE cars(
            id SERIAL,
            model VARCHAR(40) NOT NULL,
            year INTEGER NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            PRIMARY KEY (id)
           );`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(`DROP TABLE cars;`)
    }

}
