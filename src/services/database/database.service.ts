import { cro, medicine } from "./entities";
import { Columns, IDatabase } from "./database.types";
import postgres, { Row, RowList, Sql } from "postgres";

/**
 * Сервис для взаимодействия с базой данных
 */
export class DatabaseService {
  /**
   * Доступные базы данных
   */
  databases: IDatabase[] = [medicine, cro];

  /**
   * Подключения к базам данных
   */
  sql: { [Property in string]: Sql<{}> } = {};

  /**
   * Подключиться к базе данных
   */
  private connectToDatabase(database: IDatabase): void {
    const sql = postgres(database.url);

    this.sql[database.name] = sql;
  }

  /**
   * Подключиться ко всем базам данных
   */
  connectToDatabases(): void {
    for (const database of this.databases) {
      this.connectToDatabase(database);
    }
  }

  /**
   * Заполнить таблицу данными
   */
  async fillTable({
    database,
    table,
    count = 10,
  }: {
    database: string;
    table: string;
    count?: number;
  }): Promise<void> {
    const databaseModel = this.databases.find(
      (databaseModel) => database === databaseModel.name
    );
    if (!databaseModel) throw Error(`Unknown database: ${database}`);

    const tableModel = databaseModel.tables[table];
    if (!tableModel) throw Error(`Unknown table: ${table}`);

    const sql = this.sql[database];

    for (let i = 0; i < count; i++) {
      let columns: Columns;

      try {
        columns = await tableModel(sql);

        const [output] = await sql`
          INSERT INTO ${sql(table)} ${sql(columns)}
          RETURNING *
        `;

        console.log(columns, "->", output);
      } catch (err) {
        console.error(columns, "->", (err as Error).message);
      }
    }
  }

  /**
   * Протестировать заранее написанный запрос
   */
  async testQuery({
    database,
    number,
  }: {
    database: string;
    number: number;
  }): Promise<void> {
    const databaseModel = this.databases.find(
      (databaseModel) => database === databaseModel.name
    );
    if (!databaseModel) throw Error(`Unknown database: ${database}`);

    const queryModel = databaseModel.queries[number];
    if (!queryModel) throw Error(`Unknown query number: ${number}`);

    console.log(`Starting query: ${queryModel.description}`);

    const rows = await queryModel.query(this.sql[database]);

    console.log(`Finishing query:`, [...rows]);
  }
}
