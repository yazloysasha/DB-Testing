/**
 * Сервис для взаимодействия с базой данных
 */
export class DatabaseService {
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
    // TODO
  }

  /**
   * Протестировать заранее написанный запрос
   */
  async testQuery({ database }: { database: string }): Promise<void> {
    // TODO
  }

  /**
   * Выполнить любой запрос
   */
  async runQuery({ database }: { database: string }): Promise<void> {
    // TODO
  }
}
