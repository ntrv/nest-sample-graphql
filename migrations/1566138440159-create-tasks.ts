import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTasks1566138440159 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "tasks",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "overview",
                    type: "varchar",
                },
                {
                    name: "priority",
                    type: "int",
                },
                {
                    name: "deadline",
                    type: "datetime",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "created_at",
                    type: "datetime",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updated_at",
                    type: "datetime",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("tasks");
    }

}
