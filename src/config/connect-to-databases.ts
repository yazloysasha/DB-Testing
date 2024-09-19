import { di } from "./awilix-manager";
import { DatabaseService } from "@services";

/**
 * Подключиться к базам данных
 */
export const connectToDatabases = (): void => {
  const databaseService: DatabaseService = di.container.resolve(
    DatabaseService.name
  );

  databaseService.connectToDatabases();
};
