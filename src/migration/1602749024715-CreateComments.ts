import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateComments1602749024715 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true
          },
          { name: "userId", type: "int" },
          { name: "postId", type: "int" },
          { name: "content", type: "int" }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("comments");
  }
}
