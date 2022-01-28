import {MigrationInterface, QueryRunner} from "typeorm";

export class tariffs1642616627579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(`CREATE TABLE tariffs (
            id SERIAL,
            from_date INTEGER NOT NULL,
            to_date INTEGER NOT NULL,
            percent int,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            PRIMARY KEY (id)
           );`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(`DROP TABLE tariffs;`)
    }

}
