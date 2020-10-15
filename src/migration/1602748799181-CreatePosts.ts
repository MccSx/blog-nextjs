import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePosts1602748799181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "posts",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true
          },
          { name: "title", type: "varchar" },
          { name: "content", type: "text" },
          { name: "authorId", type: "int" }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("posts");
  }
}
