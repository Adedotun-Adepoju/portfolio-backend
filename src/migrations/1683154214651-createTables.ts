import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1683154214651 implements MigrationInterface {
    name = 'CreateTables1683154214651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "experiences" ("id" SERIAL NOT NULL, "company" character varying NOT NULL, "job_title" character varying NOT NULL, "start_date" date NOT NULL, "end_date" date NOT NULL, "link" character varying NOT NULL, "roles" character varying array NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_884f0913a63882712ea578e7c85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "image_link" character varying NOT NULL, "year" integer NOT NULL, "skills" character varying array NOT NULL, "github_link" character varying NOT NULL, "demo_link" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "experiences"`);
    }

}
